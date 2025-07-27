# Battle Royale App Development Plan
## Python Backend + React Native Mobile

### **Tech Stack Overview**
- **Backend**: Python + FastAPI + WebSockets
- **Mobile Frontend**: React Native + React Navigation
- **Database**: PostgreSQL (planned)
- **Real-time**: FastAPI WebSockets + Socket.IO
- **AI/Math**: OpenAI Python SDK, NumPy, SciPy
- **Deployment**: Railway/Render (backend), App Store/Google Play (mobile)

---

## **Stage 1: Project Setup & Basic Infrastructure** - ✅ **COMPLETED**

### Task 1.1: Backend Setup - ✅ COMPLETED
- [x] Create Python virtual environment
- [x] Install FastAPI, uvicorn, python-socketio
- [x] Set up basic FastAPI server structure
- [x] Create basic health check endpoint
- [x] Set up development environment with hot reload
- [x] WebSocket connection handling setup
- [x] Basic lobby endpoints created

### Task 1.2: Mobile Frontend Setup - ✅ COMPLETED
- [x] Create React Native app with CLI
- [x] Install socket.io-client
- [x] Set up basic React Native project structure
- [x] Install navigation libraries
- [x] Successfully integrated FrenemiesMobile into GitHub repository
- [x] Resolved submodule issues - directory now fully browsable on GitHub

### Task 1.3: iOS Development Environment Setup - 🔄 **NEXT PRIORITY**
- [ ] Install/verify Xcode installation
- [ ] Install Xcode Command Line Tools
- [ ] Install CocoaPods
- [ ] Run `pod install` in ios/ directory
- [ ] Test React Native iOS simulator setup
- [ ] Verify `npx react-native run-ios` works

### Task 1.4: Database Setup - 🚧 PENDING (can be done parallel to Stage 2)
- [ ] Install PostgreSQL locally
- [ ] Set up database connection with SQLAlchemy
- [ ] Create basic database models (games, players, scenarios)
- [ ] Set up Alembic for database migrations

**Stage 1 Goal**: ✅ **ACHIEVED** - Backend and mobile app infrastructure ready, GitHub properly configured

---

## **Stage 2: Core Lobby System** - 🎯 **CURRENT FOCUS**

### Task 2.1: Backend Lobby Logic - 🔄 IN PROGRESS
- [x] Basic lobby endpoints created
- [x] WebSocket connection handling setup
- [ ] Implement room code generation (6-digit codes)
- [ ] Implement player join/leave lobby functionality
- [ ] Create proper lobby state management
- [ ] Add lobby data persistence (in-memory for now, DB later)

### Task 2.2: Mobile Lobby Interface - 🚧 PENDING
- [ ] Create lobby creation screen
- [ ] Build lobby joining screen with room code input
- [ ] Design lobby waiting room (show connected players)
- [ ] Implement real-time player list updates
- [ ] Add basic error handling for invalid room codes

### Task 2.3: WebSocket Integration - 🚧 PENDING
- [ ] Set up WebSocket event handlers in mobile app
- [ ] Implement real-time synchronization between all phones
- [ ] Handle connection drops and reconnection logic
- [ ] Test with multiple physical devices (iOS simulator + real device)

**Stage 2 Goal**: Friends can create/join lobbies and see each other in real-time on their phones

---

## **Stage 3: Scenario System**

### Task 3.1: Scenario Input Backend
- [ ] Create scenario submission endpoint
- [ ] Implement basic content filtering/validation
- [ ] Set up scenario parsing (extract entities and context)
- [ ] Create scenario queue management
- [ ] Store scenarios in database

### Task 3.2: Scenario Input Mobile UI
- [ ] Build scenario submission form
- [ ] Create scenario display/preview component
- [ ] Implement scenario queue visualization
- [ ] Add input validation and error messages
- [ ] Design mobile-friendly text input

### Task 3.3: Voting System
- [ ] Create voting endpoints (submit predictions)
- [ ] Implement voting state management
- [ ] Build voting interface with options
- [ ] Add vote confirmation and "waiting for others" state
- [ ] Implement voting deadline/timer

**Stage 3 Goal**: Players can submit scenarios and vote on outcomes

---

## **Stage 4: AI Judge System (MVP Version)**

### Task 4.1: OpenAI Integration
- [ ] Set up OpenAI Python SDK
- [ ] Create knowledge extraction functions
- [ ] Implement basic entity fact gathering
- [ ] Create explanation generation system
- [ ] Add error handling for API failures

### Task 4.2: Basic Scoring Algorithm
- [ ] Install NumPy/SciPy for mathematical operations
- [ ] Create entity attribute scoring system
- [ ] Implement basic contextual weighting
- [ ] Build winner determination logic
- [ ] Add randomness/upset potential

### Task 4.3: Results System
- [ ] Create results calculation endpoint
- [ ] Implement dramatic reveal timing
- [ ] Build results display component for mobile
- [ ] Add AI explanation presentation
- [ ] Create winner announcement with reasoning

**Stage 4 Goal**: AI can judge battles and provide entertaining explanations

---

## **Stage 5: Game Flow & Scoring**

### Task 5.1: Round Management
- [ ] Implement round progression logic
- [ ] Create round state management
- [ ] Build round transition animations (mobile)
- [ ] Add round counter and game progress
- [ ] Implement game end conditions

### Task 5.2: Points System
- [ ] Create scoring algorithm for predictions
- [ ] Implement bonus points for creative scenarios
- [ ] Build leaderboard system (mobile UI)
- [ ] Add score tracking across rounds
- [ ] Create final game results screen

### Task 5.3: Mobile Game Polish
- [ ] Add loading states and animations
- [ ] Implement proper error handling throughout
- [ ] Create game statistics tracking
- [ ] Add haptic feedback and mobile-specific features
- [ ] Optimize for mobile performance

**Stage 5 Goal**: Complete game loop with scoring and polish

---

## **Stage 6: Advanced Features**

### Task 6.1: Enhanced AI Algorithm
- [ ] Implement more sophisticated scoring vectors
- [ ] Add environmental context bonuses
- [ ] Create skill synergy systems
- [ ] Build historical performance tracking
- [ ] Add advanced upset mechanics

### Task 6.2: Social Features
- [ ] Implement player nicknames/avatars
- [ ] Add game history and statistics
- [ ] Create shareable game results
- [ ] Build favorite scenarios system
- [ ] Add player achievements/badges

### Task 6.3: Content & Moderation
- [ ] Implement age-based content filtering
- [ ] Add scenario reporting system
- [ ] Create admin moderation tools
- [ ] Build content guidelines
- [ ] Add automated content screening

**Stage 6 Goal**: Feature-complete app ready for beta testing

---

## **Stage 7: Deployment & Launch**

### Task 7.1: Production Setup
- [ ] Set up production database
- [ ] Configure production environment variables
- [ ] Implement proper logging and monitoring
- [ ] Set up CI/CD pipeline
- [ ] Configure SSL and security headers

### Task 7.2: Performance Optimization
- [ ] Optimize database queries
- [ ] Implement caching strategies
- [ ] Minimize API calls and mobile app size
- [ ] Add compression and CDN
- [ ] Load testing and optimization

### Task 7.3: App Store Launch
- [ ] Create privacy policy and terms of service
- [ ] Set up analytics and error tracking
- [ ] Prepare App Store and Google Play listings
- [ ] Create user onboarding flow
- [ ] Plan beta testing with TestFlight/Play Console

**Stage 7 Goal**: Production-ready app deployed to app stores

---

## **Development Timeline Estimate**

- **Stage 1**: ✅ **COMPLETE** (3 weeks actual)
- **Stage 2**: 2-3 weeks (Lobby system + iOS setup)
- **Stage 3**: 1-2 weeks (Scenario system)
- **Stage 4**: 2-3 weeks (AI integration - most complex)
- **Stage 5**: 2-3 weeks (Game flow + mobile polish)
- **Stage 6**: 2-3 weeks (Advanced features)
- **Stage 7**: 1-2 weeks (App store deployment)

**Total Estimated Time**: 10-16 weeks for full development

---

## **Immediate Next Steps (Priority Order)**

### 🚨 **CRITICAL - iOS Development Setup (Mac + Xcode + React Native CLI)**
1. **Verify Xcode Installation**
   ```bash
   xcode-select --version
   ```

2. **Install Xcode Command Line Tools**
   ```bash
   xcode-select --install
   ```

3. **Install CocoaPods**
   ```bash
   sudo gem install cocoapods
   ```

4. **Install iOS Dependencies**
   ```bash
   cd FrenemiesMobile/ios
   pod install
   cd ..
   ```

5. **Test React Native iOS Setup**
   ```bash
   npx react-native run-ios
   ```

### 🎯 **THEN - Start Stage 2 Development**
1. Implement 6-digit room code generation
2. Create mobile lobby creation screen
3. Build room joining interface
4. Test real-time lobby synchronization

---

## **Updated Library Requirements**

### Backend Requirements (Current - in requirements.txt)
```bash
fastapi==0.116.0
uvicorn==0.35.0
python-socketio==5.13.0
python-multipart==0.0.20
python-dotenv==1.1.1
pydantic==2.11.7
# ... (other dependencies already installed)
```

### Future Backend Requirements
```bash
# For Stage 3+ (AI and Database)
pip install openai numpy scipy pandas
pip install sqlalchemy psycopg2-binary alembic
```

### Mobile Frontend Requirements (Already Installed)
```bash
# Core React Native + Navigation
@react-navigation/native
@react-navigation/stack
react-native-screens
react-native-safe-area-context

# Real-time Communication
socket.io-client

# UI Components (for future stages)
react-native-vector-icons
```

## **Current Project Status Summary**

**✅ COMPLETED:**
- FastAPI backend with WebSocket support
- React Native project structure
- GitHub repository properly configured
- Basic lobby endpoints and Socket.IO events

**🔄 IN PROGRESS:**
- iOS development environment setup

**🎯 NEXT UP:**
- Complete iOS setup and test React Native
- Implement room code generation
- Build first mobile lobby screens
- Establish real-time lobby synchronization

**📍 YOU ARE HERE:** Ready to transition from setup to actual feature development!