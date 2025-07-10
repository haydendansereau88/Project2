from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import socketio
import uvicorn
from datetime import datetime
from typing import Dict, Any
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Create FastAPI app
app = FastAPI(
    title="Frenemies Battle Royale API",
    description="Backend for Frenemies Battle Royale chat application",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure this properly for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create Socket.IO server
sio = socketio.AsyncServer(
    async_mode='asgi',
    cors_allowed_origins="*"
)

# Mount Socket.IO app
socket_app = socketio.ASGIApp(sio, app)

# In-memory storage (replace with database later)
active_connections: Dict[str, Any] = {}
chat_rooms: Dict[str, list] = {}

# Health check endpoint
@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "version": "1.0.0",
        "service": "Frenemies Battle Royale Backend"
    }

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Frenemies Battle Royale API",
        "status": "running",
        "endpoints": {
            "health": "/health",
            "docs": "/docs",
            "socket": "/socket.io/"
        }
    }

# API Routes
@app.get("/api/rooms")
async def get_rooms():
    """Get list of active chat rooms"""
    return {
        "rooms": list(chat_rooms.keys()),
        "total": len(chat_rooms)
    }

@app.get("/api/rooms/{room_id}")
async def get_room_info(room_id: str):
    """Get information about a specific room"""
    if room_id not in chat_rooms:
        raise HTTPException(status_code=404, detail="Room not found")
    
    return {
        "room_id": room_id,
        "message_count": len(chat_rooms[room_id]),
        "active": True
    }

@app.get("/api/status")
async def get_server_status():
    """Get server status and statistics"""
    return {
        "active_connections": len(active_connections),
        "active_rooms": len(chat_rooms),
        "total_messages": sum(len(messages) for messages in chat_rooms.values()),
        "uptime": "Server running"
    }

# Socket.IO event handlers
@sio.event
async def connect(sid, environ):
    """Handle client connection"""
    print(f"Client {sid} connected")
    active_connections[sid] = {
        "connected_at": datetime.now().isoformat(),
        "user_id": None,
        "room": None
    }
    
    await sio.emit('connection_established', {
        'message': 'Connected to Frenemies Battle Royale server',
        'sid': sid
    }, room=sid)

@sio.event
async def disconnect(sid):
    """Handle client disconnection"""
    print(f"Client {sid} disconnected")
    
    # Leave any rooms
    if sid in active_connections:
        room = active_connections[sid].get('room')
        if room:
            await sio.leave_room(sid, room)
        del active_connections[sid]

@sio.event
async def join_room(sid, data):
    """Handle room joining"""
    room_id = data.get('room_id')
    user_id = data.get('user_id', 'Anonymous')
    
    if not room_id:
        await sio.emit('error', {'message': 'Room ID is required'}, room=sid)
        return
    
    # Initialize room if it doesn't exist
    if room_id not in chat_rooms:
        chat_rooms[room_id] = []
    
    # Join the room
    await sio.enter_room(sid, room_id)
    
    # Update connection info
    active_connections[sid].update({
        'room': room_id,
        'user_id': user_id
    })
    
    # Notify room about new user
    await sio.emit('user_joined', {
        'user_id': user_id,
        'message': f'{user_id} joined the battle!',
        'timestamp': datetime.now().isoformat()
    }, room=room_id)
    
    print(f"User {user_id} (sid: {sid}) joined room {room_id}")

@sio.event
async def leave_room(sid, data):
    """Handle room leaving"""
    room_id = data.get('room_id')
    
    if room_id and sid in active_connections:
        user_id = active_connections[sid].get('user_id', 'Anonymous')
        
        await sio.leave_room(sid, room_id)
        active_connections[sid]['room'] = None
        
        # Notify room about user leaving
        await sio.emit('user_left', {
            'user_id': user_id,
            'message': f'{user_id} left the battle!',
            'timestamp': datetime.now().isoformat()
        }, room=room_id)
        
        print(f"User {user_id} (sid: {sid}) left room {room_id}")

@sio.event
async def send_message(sid, data):
    """Handle message sending"""
    room_id = data.get('room_id')
    message = data.get('message')
    
    if not room_id or not message:
        await sio.emit('error', {'message': 'Room ID and message are required'}, room=sid)
        return
    
    if sid not in active_connections:
        await sio.emit('error', {'message': 'Not connected'}, room=sid)
        return
    
    user_id = active_connections[sid].get('user_id', 'Anonymous')
    
    # Create message object
    message_obj = {
        'id': f"{len(chat_rooms.get(room_id, []))}_{datetime.now().timestamp()}",
        'user_id': user_id,
        'message': message,
        'timestamp': datetime.now().isoformat(),
        'room_id': room_id
    }
    
    # Store message
    if room_id not in chat_rooms:
        chat_rooms[room_id] = []
    chat_rooms[room_id].append(message_obj)
    
    # Broadcast message to room
    await sio.emit('new_message', message_obj, room=room_id)
    
    print(f"Message from {user_id} in room {room_id}: {message}")

@sio.event
async def get_room_messages(sid, data):
    """Get recent messages for a room"""
    room_id = data.get('room_id')
    limit = data.get('limit', 50)
    
    if not room_id:
        await sio.emit('error', {'message': 'Room ID is required'}, room=sid)
        return
    
    messages = chat_rooms.get(room_id, [])
    recent_messages = messages[-limit:] if len(messages) > limit else messages
    
    await sio.emit('room_messages', {
        'room_id': room_id,
        'messages': recent_messages,
        'total': len(messages)
    }, room=sid)

if __name__ == "__main__":
    host = os.getenv("HOST", "0.0.0.0")
    port = int(os.getenv("PORT", 8000))
    
    uvicorn.run(
        "main:socket_app",
        host=host,
        port=port,
        reload=True,
        log_level="info"
    )