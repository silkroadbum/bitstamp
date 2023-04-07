import React from 'react';

function ButtonsBlock() {
  return (
    <div className="flex items-center">
      <button className="hidden md:block w-20 h-6 border text-xs border-blue-500 bg-transparent text-blue-500 hover:border-blue-600 hover:text-blue-600 rounded transition-all duration-300 mr-4">
        Log in
      </button>
      <button className="hidden md:block w-20 h-6 bg-blue-500 text-xs text-white rounded hover:bg-blue-600 transition-all duration-300 mr-3">
        Register
      </button>
      <button className="hidden md:block text-gray-300 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" height="20" width="20">
          <path
            d="M6 8a2 2 0 1 1 2-2 2 2 0 0 1-2 2m5-2.91-1.3-.62.51-1.39a1 1 0 0 0-1.29-1.29l-1.39.51L6.91 1a1 1 0 0 0-1.82 0l-.62 1.3-1.39-.51a1 1 0 0 0-1.29 1.29l.52 1.39L1 5.09a1 1 0 0 0 0 1.82l1.35.62-.56 1.39a1 1 0 0 0 1.29 1.29l1.39-.52.62 1.31a1 1 0 0 0 1.82 0l.62-1.35 1.39.52a1 1 0 0 0 1.29-1.29L9.7 7.53l1.3-.62a1 1 0 0 0 0-1.82"
            fillRule="evenodd"
            fill="currentColor"></path>
        </svg>
      </button>
      <button className="block md:hidden text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default ButtonsBlock;
