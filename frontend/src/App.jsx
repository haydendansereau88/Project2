import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Header from './components/Header';
import ChatRoom from './components/ChatRoom';
import Sidebar from './components/Sidebar';
import UserJoin from './components/UserJoin';

function App() {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState(['battle-arena-1', 'battle-arena-2', 'general']);

  // Initialize socket connection
  useEffect(() => {
    const newSocket = io('http://localhost:8000');
    
    newSocket.on('connect', () => {
      console.log('Connected to server');
      setIsConnected(true);
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from server');
      setIsConnected(false);
    });

    newSocket.on('connection_established', (data) => {
      console.log('Connection established:', data);
    });

    newSocket.on('new_message', (message) => {
      setMessages(prev => [...prev, message]);
    });

    newSocket.on('user_joined', (data) => {
      setMessages(prev => [...prev, {
        id: `system_${Date.now()}`,
        user_id: 'System',
        message: data.message,
        timestamp: data.timestamp,
        isSystem: true
      }]);
    });

    newSocket.on('user_left', (data) => {
      setMessages(prev => [...prev, {
        id: `system_${Date.now()}`,
        user_id: 'System',
        message: data.message,
        timestamp: data.timestamp,
        isSystem: true
      }]);
    });

    newSocket.on('room_messages', (data) => {
      setMessages(data.messages);
    });

    newSocket.on('error', (error) => {
      console.error('Socket error:', error);
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const joinRoom = (roomId) => {
    if (socket && currentUser) {
      if (currentRoom) {
        socket.emit('leave_room', { room_id: currentRoom });
      }

      socket.emit('join_room', {
        room_id: roomId,
        user_id: currentUser
      });

      setCurrentRoom(roomId);
      setMessages([]);

      socket.emit('get_room_messages', {
        room_id: roomId,
        limit: 50
      });
    }
  };

  const sendMessage = (message) => {
    if (socket && currentRoom && message.trim()) {
      socket.emit('send_message', {
        room_id: currentRoom,
        message: message.trim()
      });
    }
  };

  const handleUserJoin = (username) => {
    setCurrentUser(username);
    if (rooms.length > 0) {
      joinRoom(rooms[0]);
    }
  };

  if (!currentUser) {
    return (
      <div className="h-screen bg-gray-900">
        <UserJoin onJoin={handleUserJoin} />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      <Header 
        currentUser={currentUser} 
        currentRoom={currentRoom}
        isConnected={isConnected}
      />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar 
          rooms={rooms}
          currentRoom={currentRoom}
          onRoomSelect={joinRoom}
          currentUser={currentUser}
        />
        
        <ChatRoom 
          messages={messages}
          currentUser={currentUser}
          currentRoom={currentRoom}
          onSendMessage={sendMessage}
          isConnected={isConnected}
        />
      </div>
    </div>
  );
}

export default App;