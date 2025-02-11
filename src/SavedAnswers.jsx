import React, { useEffect, useState } from 'react';

export default function SavedAnswers() {
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        const savedFromStorage = JSON.parse(localStorage.getItem('savedAnswers') || '[]');
        setSaved(savedFromStorage);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-full p-4">
            <h2 className="text-2xl font-semibold mb-4">Saved Answers</h2>
            {saved.length === 0 ? (
                <p>No saved answers available.</p>
            ) : (
                <ul className="w-full max-w-md">
                    {saved.map((item, index) => (
                        <li key={index} className="p-4 bg-gray-800 rounded mb-2">
                            <h3 className="font-bold">Question:</h3>
                            <p>{item.question || "Image Question"}</p>
                            <h4 className="font-semibold mt-2">Answer:</h4>
                            <p>{item.answer}</p>
                            <h4 className="font-semibold mt-2">Explanation:</h4>
                            <p>{item.explanation}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}