import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';
import { askQuestionAPI } from './api';

export default function AskQuestion() {
    const [question, setQuestion] = useState('');
    const [image, setImage] = useState(null);
    const [voice, setVoice] = useState('male');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleSubmit = async () => {
        if (!question && !image) {
            alert('Please enter a question or select an image.');
            return;
        }
        setLoading(true);
        console.log("Starting API call for question submission");
        try {
            const res = await askQuestionAPI({ question, image, voice });
            setResponse(res);
            const savedAnswers = JSON.parse(localStorage.getItem('savedAnswers') || '[]');
            localStorage.setItem('savedAnswers', JSON.stringify([...savedAnswers, res]));

            const utterance = new SpeechSynthesisUtterance(res.answer);
            const selectedVoice = speechSynthesis.getVoices().find(v => v.name.toLowerCase().includes(voice));
            if (selectedVoice) {
                utterance.voice = selectedVoice;
            }
            speechSynthesis.speak(utterance);
            console.log("Completed API call and read out answer.");
        } catch (error) {
            console.error("Error occurred while asking question:", error);
            Sentry.captureException(error);
            alert('Failed to get answer. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full p-4">
            <h2 className="text-2xl font-semibold mb-4">Ask a Question</h2>
            <textarea
                className="box-border p-2 mb-4 w-full max-w-md bg-gray-800 text-white border border-gray-700 rounded"
                placeholder="Type your question here..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            <input
                type="file"
                accept="image/*"
                className="mb-4 cursor-pointer"
                onChange={handleImageChange}
            />
            <div className="flex items-center mb-4">
                <span className="mr-2">Select Voice:</span>
                <button
                    onClick={() => setVoice('male')}
                    className={`px-3 py-1 rounded cursor-pointer ${voice === 'male' ? 'bg-blue-600' : 'bg-gray-700'}`}
                >
                    Male
                </button>
                <button
                    onClick={() => setVoice('female')}
                    className={`ml-2 px-3 py-1 rounded cursor-pointer ${voice === 'female' ? 'bg-blue-600' : 'bg-gray-700'}`}
                >
                    Female
                </button>
            </div>
            <button 
                onClick={handleSubmit}
                disabled={loading}
                className="px-6 py-2 bg-green-600 rounded cursor-pointer disabled:opacity-50"
            >
                {loading ? 'Loading...' : 'Submit'}
            </button>
            {response && (
                <div className="mt-6 p-4 bg-gray-800 rounded max-w-md">
                    <h3 className="font-bold mb-2">Answer</h3>
                    <p>{response.answer}</p>
                    <h4 className="font-semibold mt-4">Explanation</h4>
                    <p>{response.explanation}</p>
                </div>
            )}
        </div>
    );
}