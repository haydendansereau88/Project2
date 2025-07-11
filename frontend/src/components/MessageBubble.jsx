import React from 'react';

const MessageBubble = ({ message, isOwn, isSystem }) => {
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (isSystem) {
    return (
      <div className="flex justify-center">
        <div className="bg-gray-700 text-gray-300 text-sm px-4 py-2 rounded-full">
          {message.message}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          isOwn
            ? 'bg-blue-600 text-white'
            : 'bg-gray-700 text-gray-100'
        }`}
      >
        {!isOwn && (
          <div className="text-xs font-semibold text-gray-300 mb-1">
            {message.user_id}
          </div>
        )}
        
        <div className="text-sm">{message.message}</div>
        
        <div className={`text-xs mt-1 ${
          isOwn ? 'text-blue-200' : 'text-gray-400'
        }`}>
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;