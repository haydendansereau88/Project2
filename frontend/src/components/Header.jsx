import React from 'react';
import { Sword, Wifi, WifiOff } from 'lucide-react';

const Header = ({ currentUser, currentRoom, isConnected }) => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Logo and title */}
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Sword className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Frenemies Battle Royale</h1>
            {currentRoom && (
              <p className="text-sm text-gray-400">#{currentRoom}</p>
            )}
          </div>
        </div>

        {/* Right side - User info and connection status */}
        <div className="flex items-center space-x-4">
          {/* Connection status */}
          <div className="flex items-center space-x-2">
            {isConnected ? (
              <>
                <Wifi className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-500">Connected</span>
              </>
            ) : (
              <>
                <WifiOff className="h-4 w-4 text-red-500" />
                <span className="text-sm text-red-500">Disconnected</span>
              </>
            )}
          </div>

          {/* User info */}
          {currentUser && (
            <div className="bg-gray-700 px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-white">{currentUser}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;