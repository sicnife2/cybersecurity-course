'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  Code, 
  Globe,
  ArrowRight,
  Play,
  CheckCircle,
  Clock,
  Users,
  GraduationCap,
  Target,
  Brain,
  Rocket
} from 'lucide-react'
import { cybersecurityCourse, getModuleById, getModulesByDifficulty } from '@/data/courseStructure'

function CourseContent() {
  const searchParams = useSearchParams()
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
  
  // Handle URL parameters for filtering
  useEffect(() => {
    const difficulty = searchParams.get('difficulty')
    if (difficulty) {
      setSelectedDifficulty(difficulty.charAt(0).toUpperCase() + difficulty.slice(1))
    }
  }, [searchParams])
  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null)

  const difficulties = [
    { id: 'all', label: 'All Levels', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'Beginner', label: 'Beginner', icon: <Shield className="w-5 h-5" /> },
    { id: 'Intermediate', label: 'Intermediate', icon: <Target className="w-5 h-5" /> },
    { id: 'Advanced', label: 'Advanced', icon: <Brain className="w-5 h-5" /> },
    { id: 'Expert', label: 'Expert', icon: <Rocket className="w-5 h-5" /> }
  ]

  const filteredModules = selectedDifficulty === 'all' 
    ? cybersecurityCourse 
    : getModulesByDifficulty(selectedDifficulty)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-success-600'
      case 'Intermediate': return 'bg-cyber-600'
      case 'Advanced': return 'bg-orange-600'
      case 'Expert': return 'bg-danger-600'
      default: return 'bg-gray-600'
    }
  }

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return <Shield className="w-5 h-5" />
      case 'Intermediate': return <Target className="w-5 h-5" />
      case 'Advanced': return <Brain className="w-5 h-5" />
      case 'Expert': return <Rocket className="w-5 h-5" />
      default: return <GraduationCap className="w-5 h-5" />
    }
  }

  const selectedModuleData = selectedModule ? getModuleById(selectedModule) : null

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-6">
            <span className="cyber-gradient bg-clip-text text-transparent">
              Complete Cybersecurity Course
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            The most comprehensive free cybersecurity course ever created. 
            From absolute beginner to cybersecurity expert - everything you need to know.
          </p>
          
          {/* Course Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-500 mb-2">
                {cybersecurityCourse.length}
              </div>
              <div className="text-gray-400">Modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success-500 mb-2">
                {cybersecurityCourse.reduce((total, module) => total + module.lessons.length, 0)}
              </div>
              <div className="text-gray-400">Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {cybersecurityCourse.reduce((total, module) => {
                  return total + module.lessons.reduce((lessonTotal, lesson) => {
                    return lessonTotal + lesson.exercises.length
                  }, 0)
                }, 0)}
              </div>
              <div className="text-gray-400">Exercises</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-danger-500 mb-2">
                {cybersecurityCourse.reduce((total, module) => {
                  return total + module.lessons.reduce((lessonTotal, lesson) => {
                    return lessonTotal + lesson.resources.length
                  }, 0)
                }, 0)}
              </div>
              <div className="text-gray-400">Resources</div>
            </div>
          </div>
        </motion.div>

        {/* Difficulty Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {difficulties.map((difficulty, index) => (
              <motion.button
                key={difficulty.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedDifficulty(difficulty.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedDifficulty === difficulty.id
                    ? 'bg-cyber-600 text-white'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                {difficulty.icon}
                <span>{difficulty.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Course Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Modules List */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Course Modules</h2>
            <div className="space-y-4">
              {filteredModules.map((module, index) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`cyber-card cursor-pointer transition-all duration-300 ${
                    selectedModule === module.id ? 'border-cyber-500 bg-cyber-900/20' : ''
                  }`}
                  onClick={() => setSelectedModule(module.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {getDifficultyIcon(module.difficulty)}
                      <div>
                        <h3 className="font-semibold">{module.title}</h3>
                        <p className="text-sm text-gray-400">{module.duration}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(module.difficulty)}`}>
                      {module.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">{module.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{module.lessons.length} lessons</span>
                    <span>{module.lessons.reduce((total, lesson) => total + lesson.exercises.length, 0)} exercises</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Module Details */}
          <div className="lg:col-span-2">
            {selectedModuleData ? (
              <div>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold">{selectedModuleData.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedModuleData.difficulty)}`}>
                      {selectedModuleData.difficulty}
                    </span>
                  </div>
                  <p className="text-xl text-gray-300 mb-4">{selectedModuleData.description}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{selectedModuleData.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{selectedModuleData.lessons.length} lessons</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4" />
                      <span>{selectedModuleData.lessons.reduce((total, lesson) => total + lesson.exercises.length, 0)} exercises</span>
                    </div>
                  </div>
                </div>

                {/* Lessons */}
                <div className="space-y-4">
                  {selectedModuleData.lessons.map((lesson, index) => (
                    <motion.div
                      key={lesson.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="cyber-card"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
                          <p className="text-gray-300 mb-3">{lesson.description}</p>
                          
                          {/* Topics */}
                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-cyber-400 mb-2">Topics Covered:</h4>
                            <div className="flex flex-wrap gap-2">
                              {lesson.topics.map((topic, topicIndex) => (
                                <span
                                  key={topicIndex}
                                  className="text-xs bg-dark-700 px-2 py-1 rounded"
                                >
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Exercises & Resources */}
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <h4 className="font-medium text-success-400 mb-2">Exercises ({lesson.exercises.length})</h4>
                              <ul className="space-y-1 text-gray-400">
                                {lesson.exercises.map((exercise, exerciseIndex) => (
                                  <li key={exerciseIndex} className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-success-500 rounded-full"></div>
                                    <span>{exercise}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-cyber-400 mb-2">Resources ({lesson.resources.length})</h4>
                              <ul className="space-y-1 text-gray-400">
                                {lesson.resources.map((resource, resourceIndex) => (
                                  <li key={resourceIndex} className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-cyber-500 rounded-full"></div>
                                    <span>{resource}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-4">
                          <span className="text-sm text-gray-400">{lesson.duration}</span>
                          <button className="cyber-button text-sm px-4 py-2">
                            <Play className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Module Actions */}
                <div className="mt-8 flex space-x-4">
                  <button
                    className="cyber-button flex items-center space-x-2"
                    onClick={() => {
                      if (selectedModuleData && selectedModuleData.lessons.length > 0) {
                        setSelectedLesson(selectedModuleData.lessons[0].id)
                        // Optionally scroll to lesson content
                        document.getElementById('lesson-content')?.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    <Play className="w-5 h-5" />
                    <span>Start Module</span>
                  </button>
                  <button
                    className="px-6 py-3 border border-cyber-500 text-cyber-500 hover:bg-cyber-500 hover:text-white font-semibold rounded-lg transition-all duration-300"
                    onClick={() => {
                      if (selectedModuleData) {
                        // For now, just download the first resource of the first lesson if available
                        const firstLesson = selectedModuleData.lessons[0]
                        if (firstLesson && firstLesson.resources && firstLesson.resources.length > 0) {
                          const resource = firstLesson.resources[0]
                          const fileName = `/resources/${resource.replace(/\s+/g, '_').toLowerCase()}.pdf`
                          window.open(fileName, '_blank')
                        } else {
                          alert('No resources available for this module yet.')
                        }
                      }
                    }}
                  >
                    Download Resources
                  </button>
                </div>
              </div>
            ) : (
              <div className="cyber-card text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Select a Module</h3>
                <p className="text-gray-400">
                  Choose a module from the list to view detailed lesson information and start learning.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Course Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="cyber-card">
            <h2 className="text-2xl font-bold mb-6 text-center">Your Learning Journey</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-success-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Beginner</h3>
                <p className="text-sm text-gray-400">Master the fundamentals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Intermediate</h3>
                <p className="text-sm text-gray-400">Build practical skills</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Advanced</h3>
                <p className="text-sm text-gray-400">Deep technical knowledge</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-danger-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Expert</h3>
                <p className="text-sm text-gray-400">Master offensive security</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Become a Cybersecurity Expert?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your journey today and master every aspect of cybersecurity.
          </p>
          <button className="cyber-button text-lg px-8 py-4">
            Begin Your Cybersecurity Journey
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default function CoursePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CourseContent />
    </Suspense>
  )
} 