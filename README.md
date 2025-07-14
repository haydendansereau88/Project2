# Frenemies Battle Royale

A mobile game where players predict winners in absurd AI-judged battles. Built with FastAPI (backend) and React Native (mobile frontend).

## Game Concept

Players compete in Kahoot-style prediction games where:
- AI creates ridiculous battle scenarios ("Shakespeare vs Gordon Ramsay in a cooking competition")
- Players vote on who would win
- AI judge analyzes and decides winners using algorithms and data
- Players earn points for correct predictions
- AI provides entertaining explanations for its decisions

## Prerequisites

- Python 3.8+ installed
- Node.js 18+ and npm installed  
- Git installed
- **For iOS development:** Mac with Xcode
- **For Android development:** Android Studio

## Backend Setup

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

## Mobile Frontend Setup

1. **Navigate to mobile app directory**
   ```bash
   cd FrenemiesMobile
   ```

2. **Install React Native dependencies**
   ```bash
   npm install
   ```

3. **Install additional packages**
   ```bash
   npm install socket.io-client @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context react-native-vector-icons
   ```

4. **For iOS (Mac only):**
   ```bash
   cd ios
   pod install
   cd ..
   npx react-native run-ios
   ```

5. **For Android:**
   ```bash
   npx react-native run-android
   ```

## Development Workflow

**Start Backend:**
```bash
# From project root
source venv/bin/activate  # (or venv\Scripts\activate on Windows)
python main.py
```

**Start Mobile App:**
```bash
# From project root
cd FrenemiesMobile
npx react-native run-ios    # or run-android
```

## Project Structure

```
Project2/
├── main.py                 # FastAPI backend server
├── requirements.txt        # Python dependencies
├── venv/                   # Python virtual environment
├── battle_app_dev_plan.md  # Development roadmap
└── FrenemiesMobile/        # React Native mobile app
    ├── src/
    │   ├── components/     # React Native components (to be built)
    │   ├── screens/        # App screens (to be built)
    │   └── services/       # API and Socket.IO services
    ├── ios/                # iOS-specific files
    ├── android/            # Android-specific files
    └── package.json        # Node.js dependencies
```

## Current Development Status

### ✅ Completed (Stage 1)
- **Backend Setup:** FastAPI server with Socket.IO for real-time communication
- **Mobile Setup:** React Native project structure ready
- **Real-time Communication:** WebSocket events for lobby management
- **API Endpoints:** Health check, lobby management, player connections

### 🚧 In Progress
- **Mobile UI Components:** Converting web components to React Native
- **Lobby System:** Create/join game lobbies with room codes
- **Player Management:** Real-time player lists and connections

### 📋 Next Steps (Following battle_app_dev_plan.md)
- **Stage 2:** Complete lobby system with mobile interface
- **Stage 3:** Scenario submission and voting system
- **Stage 4:** AI judge integration with OpenAI
- **Stage 5:** Scoring system and game flow
- **Stage 6:** Advanced AI algorithms and social features

## API Endpoints

- `GET /` - Root endpoint with API info
- `GET /health` - Health check
- `GET /docs` - Interactive API documentation
- `GET /api/lobbies` - Get list of active game lobbies
- `GET /api/lobbies/{lobby_id}` - Get lobby information
- `GET /api/status` - Server status and statistics

## Socket.IO Events

### Client to Server
- `join_lobby` - Join a game lobby
- `leave_lobby` - Leave a game lobby
- `send_message` - Send message in lobby (temporary)
- `get_lobby_messages` - Get lobby message history

### Server to Client
- `connection_established` - Connection confirmation
- `player_joined` - Player joined lobby notification
- `player_left` - Player left lobby notification
- `new_message` - New message in lobby
- `lobby_messages` - Lobby message history
- `error` - Error notifications

## Technology Stack

- **Backend:** Python, FastAPI, Socket.IO, Uvicorn
- **Mobile:** React Native, React Navigation, Socket.IO Client
- **Future:** OpenAI API, NumPy/SciPy for AI algorithms
- **Database:** PostgreSQL (planned)
- **Deployment:** Railway/Render (backend), App Store/Google Play (mobile)

## Contributing

This is a collaborative project between team members. Follow the development plan in `battle_app_dev_plan.md` for structured progress.

1. Create feature branches for new development
2. Test on both iOS and Android when possible
3. Follow the stage-by-stage development approach
4. Commit frequently with descriptive messages

## Troubleshooting

### Backend Issues
**If `pip install -r requirements.txt` fails:**
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### Mobile Issues
**If React Native setup fails:**
- Ensure you have the latest Node.js version
- For iOS: Verify Xcode is installed and updated
- For Android: Ensure Android Studio and SDK are properly configured

### iOS Development Options
**Option 1: Traditional (Mac Required)**
- Install Xcode on Mac
- Full native development capabilities
- Best performance and control

**Option 2: Expo (Cross-Platform)**
- No Xcode needed initially
- Test on real iPhone with Expo Go app
- Cloud building for App Store deployment
- Can migrate to React Native CLI later

**Option 3: Start Android First**
- Develop Android version on Windows
- Use Android Studio for testing
- Add iOS development later with Mac access

**Option 4: Cloud Building Services**
- Develop on any platform
- Use Expo EAS Build or similar services
- Remote iOS building without local Mac/Xcode
- Still need Mac for final testing and App Store submission

**If Socket.IO connection fails:**
- Ensure backend is running on `localhost:8000`
- Check that mobile app is connecting to correct IP address
- For physical devices, use your computer's IP instead of localhost

## Game Development Roadmap

See `battle_app_dev_plan.md` for the complete development timeline and detailed task breakdown.

**Current Focus:** Building the foundation lobby system for multiplayer game sessions.

**Happy coding!**