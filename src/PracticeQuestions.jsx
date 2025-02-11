import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';
import { generatePracticeQuestions } from './api/generatePracticeQuestions';
import QuestionItem from './components/QuestionItem';

export default function PracticeQuestions() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        setLoading(true);
        console.log("Generating practice questions...");
        try {
            const generated = await generatePracticeQuestions();
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

    const handleUserAnswerChange = (id, value) => {
        setQuestions(prevQuestions =>
            prevQuestions.map(q => (q.id === id ? { ...q, userAnswer: value } : q))
        );
    };

    const checkAnswer = (id) => {
        setQuestions(prevQuestions =>
            prevQuestions.map(q => {
                if (q.id === id) {
                    const isCorrect = Number(q.userAnswer) === q.correctAnswer;
                    return { ...q, isCorrect };
                }
                return q;
            })
        );
    };

    return (
        <div className="flex flex-col items-center justify-start h-full p-4 pt-20">
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
                    <QuestionItem 
                        key={q.id} 
                        question={q} 
                        onUserAnswerChange={handleUserAnswerChange} 
                        onCheckAnswer={checkAnswer} 
                    />
                ))}
            </ul>
        </div>
    );
}