'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, ArrowRight, Trophy, Brain } from 'lucide-react'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
}

export default function SecurityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const questions: Question[] = [
    {
      id: 1,
      question: "What is the most common method used in phishing attacks?",
      options: [
        "Phone calls",
        "Email spoofing",
        "Social media posts",
        "Text messages"
      ],
      correctAnswer: 1,
      explanation: "Email spoofing is the most common phishing method, where attackers impersonate legitimate organizations to steal sensitive information.",
      category: "Phishing"
    },
    {
      id: 2,
      question: "Which of the following is the strongest password?",
      options: [
        "password123",
        "P@ssw0rd!",
        "MyDogSpot2023!",
        "qwertyuiop"
      ],
      correctAnswer: 2,
      explanation: "MyDogSpot2023! is the strongest because it combines uppercase, lowercase, numbers, symbols, and is longer than 12 characters.",
      category: "Password Security"
    },
    {
      id: 3,
      question: "What should you do if you receive a suspicious email?",
      options: [
        "Click all links to check if they're safe",
        "Reply to ask if it's legitimate",
        "Delete it without opening",
        "Forward it to all your contacts"
      ],
      correctAnswer: 2,
      explanation: "The safest action is to delete suspicious emails without opening them, as they may contain malicious content.",
      category: "Email Security"
    },
    {
      id: 4,
      question: "What does HTTPS stand for?",
      options: [
        "HyperText Transfer Protocol Secure",
        "High Tech Transfer Protocol System",
        "Home Transfer Protocol Security",
        "Hyper Transfer Protocol Safe"
      ],
      correctAnswer: 0,
      explanation: "HTTPS stands for HyperText Transfer Protocol Secure, which encrypts data between your browser and the website.",
      category: "Web Security"
    },
    {
      id: 5,
      question: "What is two-factor authentication (2FA)?",
      options: [
        "Using two different passwords",
        "A second layer of security beyond just a password",
        "Having two email accounts",
        "Using two different browsers"
      ],
      correctAnswer: 1,
      explanation: "2FA adds a second layer of security, typically requiring both a password and a code from your phone or email.",
      category: "Authentication"
    }
  ]

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return // Prevent multiple selections
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setQuizCompleted(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 80) return { message: "Excellent! You're a cybersecurity expert!", icon: <Trophy className="w-8 h-8 text-yellow-500" /> }
    if (percentage >= 60) return { message: "Good job! You have solid security knowledge.", icon: <Brain className="w-6 h-6 text-cyber-500" /> }
    return { message: "Keep learning! Cybersecurity is a journey.", icon: <Brain className="w-6 h-6 text-gray-500" /> }
  }

  if (quizCompleted) {
    const scoreInfo = getScoreMessage()
    return (
      <div className="cyber-card max-w-2xl mx-auto text-center">
        <div className="mb-6">
          {scoreInfo.icon}
        </div>
        <h3 className="text-3xl font-bold mb-4">Quiz Complete!</h3>
        <div className="text-6xl font-bold text-cyber-500 mb-4">
          {score}/{questions.length}
        </div>
        <p className="text-xl text-gray-300 mb-6">{scoreInfo.message}</p>
        
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4">Your Results:</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-dark-700 p-3 rounded">
              <div className="text-2xl font-bold text-success-500">{score}</div>
              <div className="text-gray-400">Correct</div>
            </div>
            <div className="bg-dark-700 p-3 rounded">
              <div className="text-2xl font-bold text-danger-500">{questions.length - score}</div>
              <div className="text-gray-400">Incorrect</div>
            </div>
          </div>
        </div>

        <button
          onClick={resetQuiz}
          className="cyber-button"
        >
          Take Quiz Again
        </button>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="cyber-card max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Question {currentQuestion + 1} of {questions.length}</span>
          <span className="text-sm text-cyber-400">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
        </div>
        <div className="w-full bg-dark-700 rounded-full h-2">
          <div
            className="bg-cyber-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-cyber-600 text-white text-sm rounded-full mb-3">
            {currentQ.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-6">{currentQ.question}</h3>
        
        {/* Answer Options */}
        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
              className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${
                selectedAnswer === null
                  ? 'bg-dark-700 border-dark-600 hover:bg-dark-600'
                  : selectedAnswer === index
                  ? index === currentQ.correctAnswer
                    ? 'bg-success-500/20 border-success-500 text-success-400'
                    : 'bg-danger-500/20 border-danger-500 text-danger-400'
                  : index === currentQ.correctAnswer
                  ? 'bg-success-500/20 border-success-500 text-success-400'
                  : 'bg-dark-700 border-dark-600 opacity-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {selectedAnswer !== null && (
                  <div>
                    {index === currentQ.correctAnswer ? (
                      <CheckCircle className="w-5 h-5 text-success-500" />
                    ) : selectedAnswer === index ? (
                      <XCircle className="w-5 h-5 text-danger-500" />
                    ) : null}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Explanation */}
      {selectedAnswer !== null && (
        <div className="mb-6 p-4 bg-cyber-900/20 border border-cyber-500/30 rounded-lg">
          <h4 className="font-semibold mb-2 text-cyber-400">Explanation:</h4>
          <p className="text-gray-300">{currentQ.explanation}</p>
        </div>
      )}

      {/* Next Button */}
      {selectedAnswer !== null && (
        <button
          onClick={handleNextQuestion}
          className="w-full cyber-button flex items-center justify-center space-x-2"
        >
          <span>
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </span>
          <ArrowRight className="w-5 h-5" />
        </button>
      )}

      {/* Score Display */}
      <div className="mt-6 text-center">
        <span className="text-sm text-gray-400">
          Current Score: {score}/{currentQuestion + (selectedAnswer !== null ? 1 : 0)}
        </span>
      </div>
    </div>
  )
} 