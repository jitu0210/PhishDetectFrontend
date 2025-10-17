import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const quizData = [
  {
    question:
      "What should you do if you receive an email from an unknown sender asking for personal info?",
    options: [
      "Reply with info",
      "Ignore/Delete",
      "Click the link to check",
      "Forward to friends",
    ],
    answer: "Ignore/Delete",
    explanation:
      "Never share personal information with unknown senders. Delete suspicious emails immediately.",
  },
  {
    question: "Which of the following is a strong password?",
    options: ["123456", "password", "Abc@1234!", "qwerty"],
    answer: "Abc@1234!",
    explanation:
      "Strong passwords include uppercase, lowercase, numbers, and special characters with minimum 8 characters.",
  },
  {
    question: "What is phishing?",
    options: [
      "Fishing online",
      "Attempt to steal sensitive info through fake emails/websites",
      "A type of antivirus software",
      "A cyber-friendly social media trend",
    ],
    answer: "Attempt to steal sensitive info through fake emails/websites",
    explanation:
      "Phishing is a cyber attack that uses disguised emails or websites to trick users into revealing sensitive information.",
  },
  {
    question: "What should you check before entering credentials on a website?",
    options: [
      "HTTPS & padlock icon",
      "Color of the website",
      "Number of images",
      "Website font style",
    ],
    answer: "HTTPS & padlock icon",
    explanation:
      "Always check for HTTPS and the padlock icon in the address bar to ensure the connection is secure.",
  },
  {
    question: "Which of these is a safe practice?",
    options: [
      "Clicking all pop-ups",
      "Sharing passwords with friends",
      "Using multi-factor authentication",
      "Using same password for all accounts",
    ],
    answer: "Using multi-factor authentication",
    explanation:
      "Multi-factor authentication adds an extra layer of security beyond just passwords.",
  },
  {
    question: "What is the purpose of a VPN?",
    options: [
      "To increase internet speed",
      "To encrypt internet connection and hide IP address",
      "To block all ads",
      "To store passwords securely",
    ],
    answer: "To encrypt internet connection and hide IP address",
    explanation:
      "VPNs create a secure, encrypted tunnel for your internet traffic and mask your real IP address.",
  },
  {
    question: "How often should you update your software?",
    options: [
      "Never",
      "Only when new features are added",
      "Regularly when updates are available",
      "Once a year",
    ],
    answer: "Regularly when updates are available",
    explanation:
      "Regular updates include security patches that protect against newly discovered vulnerabilities.",
  },
  {
    question: "What should you do with suspicious attachments?",
    options: [
      "Open them immediately",
      "Forward to IT department",
      "Delete without opening",
      "Save for later",
    ],
    answer: "Delete without opening",
    explanation:
      "Suspicious attachments may contain malware that can infect your device when opened.",
  },
  {
    question: "Which is the safest way to use public Wi-Fi?",
    options: [
      "Access banking apps directly",
      "Use VPN",
      "Share files freely",
      "Disable firewall for faster speed",
    ],
    answer: "Use VPN",
    explanation:
      "Public Wi-Fi is often unsecured. Using a VPN encrypts your connection and protects your data.",
  },
  {
    question: "What is social engineering?",
    options: [
      "A type of software engineering",
      "Manipulating people to reveal confidential information",
      "Building social media apps",
      "A programming language",
    ],
    answer: "Manipulating people to reveal confidential information",
    explanation:
      "Social engineering relies on human interaction and psychological manipulation rather than technical hacking.",
  },
];

const fakeLeaderboard = [
  { name: "Rohit Sharma", score: 95 },
  { name: "Priya Singh", score: 90 },
  { name: "Ankit Verma", score: 88 },
  { name: "Neha Patel", score: 85 },
  { name: "Amit Kumar", score: 82 },
  { name: "Sneha Reddy", score: 80 },
  { name: "Vikram Joshi", score: 78 },
  { name: "Pooja Mehta", score: 75 },
  { name: "Rajesh Iyer", score: 72 },
  { name: "Divya Chatterjee", score: 70 },
];

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = (option) => {
    const isCorrect = option === quizData[currentQuestion].answer;
    setSelectedOption(option);
    setShowExplanation(true);

    if (isCorrect) {
      setScore(score + 10);
    }

    // Store user's answer and correctness
    setUserAnswers([
      ...userAnswers,
      {
        question: quizData[currentQuestion].question,
        userAnswer: option,
        correctAnswer: quizData[currentQuestion].answer,
        isCorrect: isCorrect,
        explanation: quizData[currentQuestion].explanation,
      },
    ]);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowExplanation(false);

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setShowExplanation(false);
    setUserAnswers([]);
  };

  const getRankColor = (index) => {
    switch (index) {
      case 0:
        return "from-yellow-400 to-yellow-500";
      case 1:
        return "from-gray-400 to-gray-500";
      case 2:
        return "from-orange-400 to-orange-500";
      default:
        return "from-blue-400 to-blue-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <Navbar />
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {!showScore ? (
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Question {currentQuestion + 1} of {quizData.length}
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    Marks: {score}/100
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-600 h-3 rounded-full transition-all duration-500"
                    style={{
                      width: `${
                        ((currentQuestion + 1) / quizData.length) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {quizData[currentQuestion].question}
              </h2>

              {/* Options */}
              <div className="grid grid-cols-1 gap-4 mb-6">
                {quizData[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => !showExplanation && handleAnswer(option)}
                    disabled={showExplanation}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                      !showExplanation
                        ? "border-gray-300 hover:border-blue-500 hover:bg-blue-50 hover:shadow-md cursor-pointer"
                        : option === quizData[currentQuestion].answer
                        ? "border-green-500 bg-green-50 shadow-md"
                        : option === selectedOption
                        ? "border-red-500 bg-red-50 shadow-md"
                        : "border-gray-300 opacity-70"
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          !showExplanation
                            ? "bg-gray-200"
                            : option === quizData[currentQuestion].answer
                            ? "bg-green-500 text-white"
                            : option === selectedOption
                            ? "bg-red-500 text-white"
                            : "bg-gray-200"
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Explanation */}
              {showExplanation && (
                <div
                  className={`p-4 rounded-xl mb-6 ${
                    selectedOption === quizData[currentQuestion].answer
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  <div className="flex items-start">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 ${
                        selectedOption === quizData[currentQuestion].answer
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {selectedOption === quizData[currentQuestion].answer
                        ? "✓"
                        : "✗"}
                    </div>
                    <div>
                      <p className="font-semibold mb-2">
                        {selectedOption === quizData[currentQuestion].answer
                          ? "Correct! Well done."
                          : "Incorrect. Better luck next time!"}
                      </p>
                      <p className="text-gray-700">
                        <strong>Explanation:</strong>{" "}
                        {quizData[currentQuestion].explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Next Button */}
              {showExplanation && (
                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold shadow-md"
                  >
                    {currentQuestion + 1 === quizData.length
                      ? "Finish Quiz"
                      : "Next Question"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-8">
              {/* Results Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{score}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Quiz Completed!
                </h2>
                <p className="text-gray-700 text-lg mb-2">
                  You scored{" "}
                  <span className="font-bold text-blue-600 text-2xl">
                    {score}
                  </span>{" "}
                  out of 100
                </p>
                <div className="w-full bg-gray-200 rounded-full h-4 max-w-md mx-auto mb-6">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all duration-1000"
                    style={{ width: `${score}%` }}
                  ></div>
                </div>
                <p className="text-gray-600 mb-6">
                  {score >= 80
                    ? "Excellent! You're a cybersecurity expert! 🎉"
                    : score >= 60
                    ? "Good job! You have solid cybersecurity knowledge! 👍"
                    : score >= 40
                    ? "Not bad! Keep learning about cybersecurity! 💪"
                    : "Keep learning! Cybersecurity is important for everyone! 📚"}
                </p>

                <button
                  onClick={resetQuiz}
                  className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300 font-semibold shadow-md"
                >
                  Retake Quiz
                </button>
              </div>

              {/* Leaderboard */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                  <svg
                    className="w-6 h-6 mr-2 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Leaderboard
                </h3>
                <div className="space-y-3">
                  {fakeLeaderboard
                    .sort((a, b) => b.score - a.score)
                    .map((user, index) => (
                      <div
                        key={index}
                        className={`flex justify-between items-center p-4 rounded-xl ${
                          index < 3
                            ? "bg-gradient-to-r " +
                              getRankColor(index) +
                              " text-white shadow-lg"
                            : "bg-gray-50 hover:bg-gray-100"
                        } transition-all duration-300`}
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                              index < 3
                                ? "bg-white text-gray-900"
                                : "bg-blue-100 text-blue-600"
                            }`}
                          >
                            {index + 1}
                          </div>
                          <span className="font-semibold">{user.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-lg">
                            {user.score}
                          </span>
                          <span className="text-sm opacity-80">/100</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Answers Review */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Your Answers
                </h3>
                <div className="space-y-6">
                  {userAnswers.map((answer, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 pb-6 last:border-0"
                    >
                      <p className="font-semibold text-gray-900 mb-3">
                        Q{index + 1}: {answer.question}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div
                          className={`p-3 rounded-lg ${
                            answer.isCorrect
                              ? "bg-green-50 border border-green-200"
                              : "bg-red-50 border border-red-200"
                          }`}
                        >
                          <p className="text-sm text-gray-600 mb-1">
                            Your Answer
                          </p>
                          <p className="font-medium">{answer.userAnswer}</p>
                        </div>
                        <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                          <p className="text-sm text-gray-600 mb-1">
                            Correct Answer
                          </p>
                          <p className="font-medium">{answer.correctAnswer}</p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-700">
                        <strong>Explanation:</strong> {answer.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Test;
