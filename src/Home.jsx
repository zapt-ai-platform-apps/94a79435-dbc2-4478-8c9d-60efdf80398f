import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen p-4">
      <div className="w-full">
        <h1 className="text-3xl font-bold">EduGenie</h1>
      </div>
      <div className="mt-auto flex space-x-4 mb-8">
        <Link to="/saved-answers" className="px-4 py-2 bg-gray-800 rounded cursor-pointer hover:bg-gray-700 transition">
          Saved Answers
        </Link>
        <Link to="/ask-question" className="px-6 py-2 bg-blue-600 rounded cursor-pointer hover:bg-blue-500 transition">
          Ask a Question
        </Link>
        <Link to="/practice-questions" className="px-4 py-2 bg-gray-800 rounded cursor-pointer hover:bg-gray-700 transition">
          Practice Mode
        </Link>
      </div>
    </div>
  );
}