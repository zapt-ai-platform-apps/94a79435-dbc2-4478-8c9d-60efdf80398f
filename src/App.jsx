import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AskQuestion from './AskQuestion';
import PracticeQuestions from './PracticeQuestions';
import SavedAnswers from './SavedAnswers';

export default function App(){
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-900 text-white flex flex-col">
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/ask-question" element={<AskQuestion />} />
                        <Route path="/practice-questions" element={<PracticeQuestions />} />
                        <Route path="/saved-answers" element={<SavedAnswers />} />
                    </Routes>
                </div>
                <footer className="p-4 text-center">
                    <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        Made on ZAPT
                    </a>
                </footer>
            </div>
        </BrowserRouter>
    );
}