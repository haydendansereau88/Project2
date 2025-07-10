# Frenemies Battle Royale

A real-time chat application with battle royale features built with FastAPI and Socket.IO.

## Quick Setup for Collaborators

### Prerequisites
- Python 3.8+ installed
- Git installed

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/haydendansereau88/Project2.git
   cd Project2
   ```

2. **Create virtual environment**
   
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

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the server**
   ```bash
   python main.py
   ```

5. **Test it works**
   - Open browser to `http://localhost:8000`
   - Check API docs at `http://localhost:8000/docs`
   - Health check at `http://localhost:8000/health`

## Development Workflow

**Every time you start working:**
```bash
# Activate virtual environment (if not already active)
source venv/bin/activate  # Mac/Linux
# OR
venv\Scripts\activate     # Windows

# Pull latest changes
git pull origin main

# Run the server
python main.py
```

**When you're done:**
```bash
# Stop the server (Ctrl+C)
# Deactivate virtual environment
deactivate
```

## Project Structure

```
frenemies-battle-royale/
├── main.py              # Main FastAPI server
├── requirements.txt     # Python dependencies
├── .gitignore          # Git ignore file
├── api/                # API modules (future)
├── models/             # Data models (future)
├── utils/              # Utility functions (future)
└── tests/              # Test files (future)
```

## Current Features

- ✅ FastAPI server with hot reload
- ✅ Socket.IO integration for real-time chat
- ✅ Health check endpoint
- ✅ Interactive API documentation
- ✅ Room-based chat system
- ✅ User join/leave notifications

## API Endpoints

- `GET /` - Root endpoint with API info
- `GET /health` - Health check
- `GET /docs` - Interactive API documentation
- `GET /api/rooms` - Get list of active rooms
- `GET /api/rooms/{room_id}` - Get room information
- `GET /api/status` - Server status and statistics

## Socket.IO Events

- `connect` - Client connection
- `disconnect` - Client disconnection
- `join_room` - Join a chat room
- `leave_room` - Leave a chat room
- `send_message` - Send a message to a room
- `get_room_messages` - Get recent room messages

## Troubleshooting

**If `pip install -r requirements.txt` fails:**
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

**If Python command doesn't work:**
- Try `python3` instead of `python`
- Make sure Python 3.8+ is installed

**If virtual environment won't activate:**
- On Windows: Use Command Prompt instead of Git Bash
- Make sure you're in the project directory

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Commit and push to your branch
5. Create a pull request

---

**Happy coding!**