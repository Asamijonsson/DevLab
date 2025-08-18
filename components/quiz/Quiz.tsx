'use client'

import Link from "next/link";
import { useState } from "react";

type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
};

const questions: Question[] = [
  {
    id: 1,
    question: "Which anime features the character Goku?",
    options: ["Naruto", "Dragon Ball", "One Piece", "Bleach"],
    answer: "Dragon Ball",
  },
  {
    id: 2,
    question: "Who is the main character in Naruto?",
    options: ["Naruto Uzumaki", "Sasuke Uchiha", "Ichigo Kurosaki", "Luffy"],
    answer: "Naruto Uzumaki",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[current].answer) {
      setScore(score + 1);
    }

    setSelectedOption(null); 

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

    const handleRestart = () => {
    setCurrent(0);
    setSelectedOption(null);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        {showScore ? (
          <div className="text-center">
            <h1 className="text-2xl text-black font-bold mb-4">Quiz Completed!</h1>
            <p className="text-lg text-black">Your score: {score} / {questions.length}</p>
            <button
              onClick={handleRestart}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl text-black font-bold mb-4">
              Question {current + 1} / {questions.length}
            </h2>
            <p className="mb-4 text-black">{questions[current].question}</p>
            <div className="flex flex-col space-y-2 mb-4">
              {questions[current].options.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  className={`py-2 text-black px-4 rounded border ${
                    selectedOption === option ? "bg-yellow-500 text-white" : "bg-gray-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className="bg-green-500 text-white py-2 px-4 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}