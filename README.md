# Frenemies Battle Royale

A real-time chat application with battle royale features built with FastAPI (backend) and React (frontend).

## Prerequisites

- Python 3.8+ installed
- Node.js 18+ and npm installed
- Git installed

## Complete Setup Instructions

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/haydendansereau88/Project2.git
   cd Project2
   ```

2. **Set up Python virtual environment**
   
   **On Mac/Linux:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
   
   **On Windows:**
   ```cmd
   python -m venv venv
   venv\Scripts\activate
   ```
   
   *You should see `(venv)` appear in your terminal prompt*

3. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Start the backend server**
   ```bash
   python main.py
   ```
   
   The backend will run on `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install Node.js dependencies**
   ```bash
   npm install
   ```

3. **Start the frontend development server**
   ```bash
   npm run dev
   ```
   
   The frontend will run on `http://localhost:5173`

## Running Both Servers

For the full application, you need both servers running:

**Terminal 1 (Backend):**
```bash
# From project root
source venv/bin/activate  # (or venv\Scripts\activate on Windows)
python main.py
```

**Terminal 2 (Frontend):**
```bash
# From project root
cd frontend
npm run dev
```

Then open your browser to `http://localhost:5173`

## Project Structure

```
Project2/
├── main.py                 # FastAPI backend server
├── requirements.txt        # Python dependencies
├── venv/                   # Python virtual environment
├── api/                    # API modules (future expansion)
├── models/                 # Data models (future expansion)
├── utils/                  # Utility functions (future expansion)
├── tests/                  # Test files (future expansion)
└── frontend/               # React frontend application
    ├── src/
    │   ├── components/     # React components
    │   │   ├── Header.jsx
    │   │   ├── Sidebar.jsx
    │   │   ├── ChatRoom.jsx
    │   │   ├── UserJoin.jsx
    │   │   └── MessageBubble.jsx
    │   ├── App.jsx         # Main React app
    │   └── index.css       # Tailwind CSS styles
    ├── package.json        # Node.js dependencies
    └── tailwind.config.js  # Tailwind configuration
```

## Current Features

### Backend (FastAPI + Socket.IO)
- RESTful API endpoints
- Real-time WebSocket communication
- Room-based chat system
- User management
- Message history
- Health check endpoint
- Interactive API documentation at `/docs`

### Frontend (React + Tailwind CSS)
- User authentication (username entry)
- Real-time chat interface
- Multiple chat rooms
- Room switching
- Message history
- Connection status indicator
- Responsive design
- Dark theme

## API Endpoints

- `GET /` - Root endpoint with API info
- `GET /health` - Health check
- `GET /docs` - Interactive API documentation
- `GET /api/rooms` - Get list of active rooms
- `GET /api/rooms/{room_id}` - Get room information
- `GET /api/status` - Server status and statistics

## Socket.IO Events

### Client to Server
- `join_room` - Join a chat room
- `leave_room` - Leave a chat room
- `send_message` - Send a message to a room
- `get_room_messages` - Get recent room messages

### Server to Client
- `connection_established` - Connection confirmation
- `new_message` - New message received
- `user_joined` - User joined room notification
- `user_left` - User left room notification
- `room_messages` - Room message history
- `error` - Error notifications

## Development Workflow

**Every time you start working:**

1. **Activate Python environment and start backend:**
   ```bash
   source venv/bin/activate  # (or venv\Scripts\activate on Windows)
   python main.py
   ```

2. **In a new terminal, start frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Pull latest changes:**
   ```bash
   git pull origin main
   ```

**When you're done:**
```bash
# Stop servers with Ctrl+C
deactivate  # Deactivate Python environment
```

## Troubleshooting

### Backend Issues
**If `pip install -r requirements.txt` fails:**
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

**If Python command doesn't work:**
- Try `python3` instead of `python`
- Make sure Python 3.8+ is installed

### Frontend Issues
**If `npm install` fails:**
```bash
npm install --legacy-peer-deps
```

**If `npm run dev` fails:**
- Make sure Node.js 18+ is installed
- Delete `node_modules` and run `npm install` again

**If pages don't load:**
- Check that both backend (`localhost:8000`) and frontend (`localhost:5173`) are running
- Check browser console for errors

### General Issues
**If virtual environment won't activate:**
- On Windows: Use Command Prompt instead of Git Bash
- Make sure you're in the project directory

**If Socket.IO connection fails:**
- Ensure backend is running on `localhost:8000`
- Check browser network tab for connection errors
- Verify firewall isn't blocking the connection

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test both backend and frontend thoroughly
4. Commit and push to your branch
5. Create a pull request

## Technology Stack

- **Backend:** Python, FastAPI, Socket.IO, Uvicorn
- **Frontend:** React, Vite, Tailwind CSS, Socket.IO Client
- **Icons:** Lucide React
- **Development:** Hot reload enabled for both frontend and backend

**Happy coding!**