'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Target, X, CheckCircle, XCircle, Play, Eye } from 'lucide-react'

interface Exercise {
  id: string
  title: string
  description: string
  type: 'quiz' | 'practical' | 'analysis'
  content: string
  solution?: string
  hints?: string[]
}

interface ExerciseModalProps {
  exercise: Exercise
  onClose: () => void
}

export default function ExerciseModal({ exercise, onClose }: ExerciseModalProps) {
  const [currentView, setCurrentView] = useState<'exercise' | 'solution'>('exercise')
  const [showHints, setShowHints] = useState(false)
  const [completed, setCompleted] = useState(false)

  const handleComplete = () => {
    setCompleted(true)
    // Store completion in localStorage for tracking
    const completedExercises = JSON.parse(localStorage.getItem('completedExercises') || '[]')
    if (!completedExercises.includes(exercise.id)) {
      completedExercises.push(exercise.id)
      localStorage.setItem('completedExercises', JSON.stringify(completedExercises))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="cyber-card max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Target className="w-6 h-6 text-cyber-400" />
            <h2 className="text-2xl font-bold">{exercise.title}</h2>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              exercise.type === 'quiz' ? 'bg-success-600' :
              exercise.type === 'practical' ? 'bg-cyber-600' : 'bg-orange-600'
            }`}>
              {exercise.type.charAt(0).toUpperCase() + exercise.type.slice(1)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-dark-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-300">{exercise.description}</p>
        </div>

        {/* View Toggle */}
        <div className="flex space-x-1 bg-dark-800 rounded-lg p-1 mb-6">
          <button
            onClick={() => setCurrentView('exercise')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 ${
              currentView === 'exercise'
                ? 'bg-cyber-600 text-white'
                : 'text-gray-300 hover:bg-dark-700'
            }`}
          >
            <Play className="w-4 h-4" />
            <span>Exercise</span>
          </button>
          {exercise.solution && (
            <button
              onClick={() => setCurrentView('solution')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 ${
                currentView === 'solution'
                  ? 'bg-cyber-600 text-white'
                  : 'text-gray-300 hover:bg-dark-700'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Solution</span>
            </button>
          )}
        </div>

        {/* Exercise Content */}
        {currentView === 'exercise' && (
          <div className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <div 
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: exercise.content }}
              />
            </div>

            {/* Hints */}
            {exercise.hints && exercise.hints.length > 0 && (
              <div className="border border-cyber-500/30 rounded-lg p-4">
                <button
                  onClick={() => setShowHints(!showHints)}
                  className="flex items-center space-x-2 text-cyber-400 hover:text-cyber-300 transition-colors"
                >
                  <span className="font-medium">
                    {showHints ? 'Hide Hints' : 'Show Hints'}
                  </span>
                </button>
                
                {showHints && (
                  <div className="mt-3 space-y-2">
                    {exercise.hints.map((hint, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <span className="text-cyber-400 font-medium">•</span>
                        <span className="text-gray-300">{hint}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Interactive Elements based on exercise type */}
            {exercise.type === 'quiz' && (
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Quiz Questions</h4>
                <div className="space-y-3">
                  {[
                    "What is the primary goal of cybersecurity?",
                    "Which of the following is NOT a common attack vector?",
                    "What does CIA stand for in cybersecurity?"
                  ].map((question, index) => (
                    <div key={index} className="p-4 bg-dark-700 rounded-lg">
                      <p className="font-medium mb-3">{question}</p>
                      <div className="space-y-2">
                        {['Option A', 'Option B', 'Option C', 'Option D'].map((option, optIndex) => (
                          <label key={optIndex} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name={`question-${index}`}
                              className="w-4 h-4 text-cyber-600 bg-dark-700 border-dark-600 focus:ring-cyber-500"
                            />
                            <span className="text-gray-300">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {exercise.type === 'practical' && (
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Practical Task</h4>
                <div className="p-4 bg-dark-700 rounded-lg">
                  <p className="text-gray-300 mb-4">
                    Complete the following practical steps:
                  </p>
                  <ol className="space-y-2 text-gray-300">
                    <li>1. Analyze the provided network diagram</li>
                    <li>2. Identify potential security vulnerabilities</li>
                    <li>3. Document your findings</li>
                    <li>4. Propose security improvements</li>
                  </ol>
                </div>
              </div>
            )}

            {exercise.type === 'analysis' && (
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Analysis Exercise</h4>
                <div className="p-4 bg-dark-700 rounded-lg">
                  <p className="text-gray-300 mb-4">
                    Review the following scenario and provide your analysis:
                  </p>
                  <textarea
                    rows={6}
                    className="w-full p-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-cyber-500 focus:outline-none resize-none"
                    placeholder="Write your analysis here..."
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Solution Content */}
        {currentView === 'solution' && exercise.solution && (
          <div className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <div 
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: exercise.solution }}
              />
            </div>
            
            <div className="p-4 bg-success-900/20 border border-success-500/30 rounded-lg">
              <h4 className="font-semibold text-success-400 mb-2">Key Takeaways</h4>
              <ul className="space-y-1 text-gray-300">
                <li>• Understanding the core concepts</li>
                <li>• Practical application of security principles</li>
                <li>• Best practices for implementation</li>
              </ul>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-6 border-t border-dark-600">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-dark-600 text-gray-300 hover:bg-dark-700 rounded-lg transition-colors"
          >
            Close
          </button>
          {currentView === 'exercise' && (
            <button
              onClick={handleComplete}
              disabled={completed}
              className="flex-1 cyber-button flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {completed ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>Completed</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>Mark as Complete</span>
                </>
              )}
            </button>
          )}
        </div>

        {completed && (
          <div className="mt-4 p-3 bg-success-900/20 border border-success-500/30 rounded-lg">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-success-400" />
              <span className="text-success-400 font-medium">Exercise completed!</span>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
} 