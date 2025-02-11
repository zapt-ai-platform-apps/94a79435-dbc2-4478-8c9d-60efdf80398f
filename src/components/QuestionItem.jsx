import React from 'react';

export default function QuestionItem({ question, onUserAnswerChange, onCheckAnswer }) {
    return (
        <li className="p-2 bg-gray-800 rounded mb-2">
            <p>{question.question}</p>
            <div className="flex items-center mt-2 space-x-2">
                <input 
                    type="text" 
                    value={question.userAnswer} 
                    onChange={(e) => onUserAnswerChange(question.id, e.target.value)}
                    className="box-border p-2 bg-gray-700 text-white border border-gray-600 rounded w-full"
                    placeholder="Your answer"
                />
                <button 
                    onClick={() => onCheckAnswer(question.id)}
                    className="px-4 py-1 bg-blue-600 rounded cursor-pointer"
                >
                    Check Answer
                </button>
            </div>
            {question.isCorrect !== null && (
                <p className="mt-2">
                    {question.isCorrect ? 'Correct!' : 'Incorrect – try again.'}
                </p>
            )}
        </li>
    );
}