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

## Quick Start

### Backend Setup

1. **Clone and navigate to repository**
   ```bash
   git clone https://github.com/haydendansereau88/frenemies-battle-royale.git
   cd frenemies-battle-royale
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

3. **Install dependencies and start server**
   ```bash
   pip install -r requirements.txt
   python main.py
   ```
   
   Backend runs on `http://localhost:8000`

### Mobile Frontend Setup

1. **Navigate to mobile app and install dependencies**
   ```bash
   cd FrenemiesMobile
   npm install
   ```

2. **iOS Setup (Mac only - NEXT STEP NEEDED)**
   ```bash
   # Install CocoaPods if not already installed
   sudo gem install cocoapods
   
   # Install iOS dependencies
   cd ios
   pod install
   cd ..
   
   # Run on iOS simulator
   npx react-native run-ios
   ```

3. **Android Setup**
   ```bash
   npx react-native run-android
   ```

## Development Workflow

**Start Backend:**
```bash
source venv/bin/activate  # (or venv\Scripts\activate on Windows)
python main.py
```

**Start Mobile App:**
```bash
cd FrenemiesMobile
npx react-native run-ios    # or run-android
```

## Project Structure

```
frenemies-battle-royale/
├── main.py                    # FastAPI backend server
├── requirements.txt           # Python dependencies
├── venv/                      # Python virtual environment
├── battle_app_dev_plan.md     # Development roadmap
├── README.md                  # This file
└── FrenemiesMobile/           # React Native mobile app
    ├── App.tsx                # Main React Native app component
    ├── package.json           # Node.js dependencies
    ├── ios/                   # iOS-specific files
    ├── android/               # Android-specific files
    └── (React Native project structure)
```

## Current Development Status

### ✅ **COMPLETED - Stage 1: Project Setup**
- **Backend Infrastructure:** FastAPI server with Socket.IO real-time communication
- **Mobile Infrastructure:** React Native project with navigation libraries
- **GitHub Integration:** Repository properly configured and browsable
- **API Foundation:** Health check, basic lobby endpoints, WebSocket events
- **Real-time Communication:** Socket.IO events for lobby management

### 🔄 **IN PROGRESS - iOS Development Setup**
- **Xcode Configuration:** Installing/verifying Xcode and command line tools
- **CocoaPods Setup:** iOS dependency management
- **React Native iOS Testing:** Ensuring simulator works properly

### 🎯 **NEXT - Stage 2: Core Lobby System**
- **Room Code Generation:** 6-digit lobby codes
- **Mobile Lobby Screens:** Create/join lobby interfaces
- **Real-time Player Lists:** Live lobby participant updates
- **Multi-device Testing:** Synchronization between phones

### 📋 **Future Stages**
- **Stage 3:** Scenario submission and voting system
- **Stage 4:** AI judge integration with OpenAI
- **Stage 5:** Scoring system and game flow
- **Stage 6:** Advanced AI algorithms and social features
- **Stage 7:** App Store deployment

## API Endpoints

### Current Backend API
- `GET /` - Root endpoint with API info
- `GET /health` - Health check
- `GET /docs` - Interactive API documentation (Swagger)
- `GET /api/rooms` - Get list of active chat rooms
- `GET /api/rooms/{room_id}` - Get room information
- `GET /api/status` - Server status and statistics

### Socket.IO Events (Real-time)

**Client to Server:**
- `join_room` - Join a game lobby
- `leave_room` - Leave a game lobby
- `send_message` - Send message in lobby
- `get_room_messages` - Get lobby message history

**Server to Client:**
- `connection_established` - Connection confirmation
- `user_joined` - Player joined lobby notification
- `user_left` - Player left lobby notification
- `new_message` - New message in lobby
- `room_messages` - Lobby message history
- `error` - Error notifications

## Technology Stack

### Current Implementation
- **Backend:** Python, FastAPI, Socket.IO, Uvicorn
- **Mobile:** React Native, React Navigation, Socket.IO Client
- **Real-time:** WebSocket connections via Socket.IO
- **Development:** VS Code, Git, GitHub

### Planned Additions
- **AI/ML:** OpenAI API, NumPy, SciPy for battle algorithms
- **Database:** PostgreSQL with SQLAlchemy
- **Deployment:** Railway/Render (backend), App Store/Google Play (mobile)

## Troubleshooting

### Backend Issues
**If backend won't start:**
```bash
# Ensure virtual environment is activated
source venv/bin/activate  # (Mac/Linux)
venv\Scripts\activate     # (Windows)

# Update pip and reinstall dependencies
pip install --upgrade pip
pip install -r requirements.txt
```

### Mobile Issues

**iOS Setup (Current Focus):**
- Ensure Xcode is installed and updated
- Install Xcode Command Line Tools: `xcode-select --install`
- Install CocoaPods: `sudo gem install cocoapods`
- Run `pod install` in FrenemiesMobile/ios directory

**If React Native setup fails:**
- Verify Node.js version (18+): `node --version`
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

**Android Development:**
- Install Android Studio and configure SDK
- Set up Android emulator or connect physical device
- Ensure Android development environment variables are set

### iOS Development Setup

**Native Development (Mac + Xcode + React Native CLI):**
- ✅ Full access to native iOS features and performance
- ✅ Complete control over build process and configuration
- ✅ Direct integration with Xcode for debugging and testing
- ✅ Best approach for production app development

### Socket.IO Connection Issues
- Ensure backend is running on `http://localhost:8000`
- Check mobile app connection URL in code
- For physical devices, use computer's IP address instead of localhost
- Verify firewall/network settings allow connections

## Development Progress Tracking

See `battle_app_dev_plan.md` for detailed task breakdown and timeline.

**Current Milestone:** Complete iOS development environment setup and begin Stage 2 lobby system development.

**Recent Achievements:**
- ✅ Resolved GitHub submodule issues
- ✅ FastAPI backend with WebSocket support operational
- ✅ React Native project structure properly integrated
- ✅ Basic real-time communication infrastructure complete

**Immediate Goals:**
- 🎯 Complete iOS/Xcode setup for React Native development
- 🎯 Implement 6-digit lobby room codes
- 🎯 Build first mobile lobby creation screen
- 🎯 Test real-time lobby synchronization

## Contributing

This project follows a stage-by-stage development approach outlined in `battle_app_dev_plan.md`.

### Development Workflow
1. Create feature branches for new development
2. Test on both iOS and Android when possible
3. Follow the structured development stages
4. Commit frequently with descriptive messages
5. Keep documentation updated with progress

### Code Standards
- **Backend:** Follow FastAPI best practices, type hints, proper error handling
- **Mobile:** React Native + TypeScript, component-based architecture
- **Real-time:** Consistent Socket.IO event naming and error handling

## License

This project is in active development for educational and portfolio purposes.

---

**Happy coding! 🚀**

*Next step: Complete iOS development setup and begin building lobby features.*