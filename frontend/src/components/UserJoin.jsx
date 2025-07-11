import React, { useState } from 'react';
import { Sword, User } from 'lucide-react';

const UserJoin = ({ onJoin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onJoin(username.trim());
    }
  };

  return (
    <div className="h-full flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full mx-4">
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <div className="text-center mb-8">
            <div className="bg-blue-600 p-4 rounded-full inline-block mb-4">
              <Sword className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Frenemies Battle Royale</h1>
            <p className="text-gray-400">Enter your warrior name to join the battle</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="input-field w-full"
                autoFocus
              />
            </div>
            <button
              type="submit"
              disabled={!username.trim()}
              className="btn-primary w-full"
            >
              Join the Battle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserJoin;