import React from 'react';
import { Hash, Users } from 'lucide-react';

const Sidebar = ({ rooms, currentRoom, onRoomSelect, currentUser }) => {
  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold text-white mb-2">Battle Rooms</h2>
        <p className="text-sm text-gray-400">Choose your arena</p>
      </div>

      {/* Room List */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-2">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Available Rooms
          </h3>
          
          {rooms.map((room) => (
            <button
              key={room}
              onClick={() => onRoomSelect(room)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                currentRoom === room
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <Hash className="h-4 w-4" />
              <span className="font-medium">{room}</span>
            </button>
          ))}
        </div>
      </div>

      {/* User Section */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-full">
            <Users className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">{currentUser}</p>
            <p className="text-xs text-gray-400">Ready for battle</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;