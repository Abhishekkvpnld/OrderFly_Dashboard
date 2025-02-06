import React from 'react';

const LoadingPage = () => {
  return (
    <div className="w-full h-screen flex items-center gap-3 justify-center ">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-lg text-gray-700">Loading...</p>
    </div>
  );
};

export default LoadingPage;
