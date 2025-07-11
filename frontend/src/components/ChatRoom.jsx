import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import MessageBubble from './MessageBubble';

const ChatRoom = ({ messages, currentUser, currentRoom, onSendMessage, isConnected }) => {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() && isConnected) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  if (!currentRoom) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-400 mb-2">
            Select a room to start battling
          </h3>
          <p className="text-gray-500">Choose a room from the sidebar to join the conversation</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-900">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-400 mb-2">No messages yet</h3>
              <p className="text-gray-500">Be the first to start the conversation!</p>
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              isOwn={message.user_id === currentUser}
              isSystem={message.isSystem}
            />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-gray-700 p-4">
        <form onSubmit={handleSendMessage} className="flex space-x-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder={isConnected ? `Message #${currentRoom}...` : 'Connecting...'}
            disabled={!isConnected}
            className="flex-1 input-field"
          />
          <button
            type="submit"
            disabled={!newMessage.trim() || !isConnected}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              newMessage.trim() && isConnected
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;