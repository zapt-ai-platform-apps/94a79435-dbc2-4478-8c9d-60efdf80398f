import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';

export default function PracticeQuestions() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        setLoading(true);
        console.log("Generating practice questions...");
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const generated = [
                { id: 1, question: "What is 2+2?" },
                { id: 2, question: "Explain the water cycle." },
            ];
            setQuestions(generated);
            console.log("Practice questions generated:", generated);
        } catch (error) {
            console.error("Error generating practice questions:", error);
            Sentry.captureException(error);
            alert('Failed to generate practice questions.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full p-4">
            <h2 className="text-2xl font-semibold mb-4">Practice Questions</h2>
            <button 
                onClick={handleGenerate}
                disabled={loading}
                className="px-6 py-2 bg-green-600 rounded cursor-pointer disabled:opacity-50 mb-4"
            >
                {loading ? 'Generating...' : 'Generate Questions'}
            </button>
            <ul className="w-full max-w-md">
                {questions.map(q => (
                    <li key={q.id} className="p-2 bg-gray-800 rounded mb-2">
                        {q.question}
                    </li>
                ))}
            </ul>
        </div>
    );
}