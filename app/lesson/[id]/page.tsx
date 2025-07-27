'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Play, 
  Pause, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Target,
  FileText,
  Video,
  Download,
  Share2
} from 'lucide-react'
import { cybersecurityCourse, getModuleById } from '@/data/courseStructure'
import ExerciseModal from '@/components/ExerciseModal'

export default function LessonViewer() {
  const params = useParams()
  const router = useRouter()
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState<number[]>([])
  const [lesson, setLesson] = useState<any>(null)
  const [module, setModule] = useState<any>(null)
  const [showExerciseModal, setShowExerciseModal] = useState(false)
  const [selectedExercise, setSelectedExercise] = useState<any>(null)

  useEffect(() => {
    // Find the lesson by ID
    const lessonId = params.id as string
    let foundLesson = null
    let foundModule = null

    for (const module of cybersecurityCourse) {
      const lesson = module.lessons.find(l => l.id === lessonId)
      if (lesson) {
        foundLesson = lesson
        foundModule = module
        break
      }
    }

    if (foundLesson) {
      setLesson(foundLesson)
      setModule(foundModule)
    } else {
      // Redirect to course page if lesson not found
      router.push('/course')
    }
  }, [params.id, router])

  const sections = [
    { id: 'overview', title: 'Overview', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'content', title: 'Lesson Content', icon: <FileText className="w-5 h-5" /> },
    { id: 'exercises', title: 'Exercises', icon: <Target className="w-5 h-5" /> },
    { id: 'resources', title: 'Resources', icon: <Download className="w-5 h-5" /> }
  ]

  const markSectionComplete = (sectionIndex: number) => {
    if (!completedSections.includes(sectionIndex)) {
      setCompletedSections([...completedSections, sectionIndex])
    }
  }

  const progress = (completedSections.length / sections.length) * 100

  if (!lesson || !module) {
    return <div className="min-h-screen flex items-center justify-center text-xl">Loading...</div>
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/course')}
                className="p-2 hover:bg-dark-700 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-3xl font-bold">{lesson.title}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{lesson.duration}</span>
              </div>
              <button className="cyber-button text-sm px-4 py-2">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Progress</span>
              <span className="text-sm text-cyber-400">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-dark-700 rounded-full h-2">
              <div
                className="bg-cyber-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <p className="text-gray-300">{lesson.description}</p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-dark-800 rounded-lg p-1">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setCurrentSection(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 ${
                  currentSection === index
                    ? 'bg-cyber-600 text-white'
                    : 'text-gray-300 hover:bg-dark-700'
                }`}
              >
                {section.icon}
                <span>{section.title}</span>
                {completedSections.includes(index) && (
                  <CheckCircle className="w-4 h-4" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {currentSection === 0 && (
                <div className="cyber-card">
                  <h2 className="text-2xl font-bold mb-6">Lesson Overview</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">What You'll Learn</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {lesson.topics.map((topic: string, index: number) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-cyber-500 rounded-full"></div>
                          <span className="text-gray-300">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Prerequisites</h3>
                    <p className="text-gray-300">
                      This lesson is designed for {lesson.duration} of focused learning. 
                      Make sure you have completed any previous lessons in this module.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Learning Objectives</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Understand the core concepts presented in this lesson</li>
                      <li>• Complete all hands-on exercises</li>
                      <li>• Review additional resources for deeper understanding</li>
                      <li>• Apply knowledge to real-world scenarios</li>
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      setCurrentSection(1)
                      markSectionComplete(0)
                    }}
                    className="cyber-button"
                  >
                    Start Lesson
                  </button>
                </div>
              )}

              {currentSection === 1 && (
                <div className="cyber-card">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Lesson Content</h2>
                    <button
                      onClick={() => markSectionComplete(1)}
                      className="text-sm text-cyber-400 hover:text-cyber-300"
                    >
                      Mark as Complete
                    </button>
                  </div>
                  
                  <div className="prose prose-invert max-w-none">
                    <div 
                      className="text-gray-300 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: lesson.content || `
                        <h2>Lesson Content</h2>
                        <p>This lesson covers important cybersecurity concepts and practical applications.</p>
                        <h3>Key Topics</h3>
                        <ul>
                          ${lesson.topics.map((topic: string) => `<li>${topic}</li>`).join('')}
                        </ul>
                        <h3>Learning Objectives</h3>
                        <p>By the end of this lesson, you will understand:</p>
                        <ul>
                          <li>The fundamental concepts of ${lesson.title.toLowerCase()}</li>
                          <li>How to apply these concepts in real-world scenarios</li>
                          <li>Best practices for security implementation</li>
                        </ul>
                        <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
                          <h4 class="text-cyber-400 font-semibold mb-2">Important Note</h4>
                          <p>This lesson provides hands-on experience with cybersecurity concepts. Make sure to complete all exercises and review the additional resources.</p>
                        </div>
                      ` }}
                    />
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setCurrentSection(0)}
                      className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={() => {
                        setCurrentSection(2)
                        markSectionComplete(1)
                      }}
                      className="cyber-button"
                    >
                      Next: Exercises →
                    </button>
                  </div>
                </div>
              )}

              {currentSection === 2 && (
                <div className="cyber-card">
                  <h2 className="text-2xl font-bold mb-6">Hands-on Exercises</h2>
                  
                  <div className="space-y-6">
                    {lesson.exercises.map((exercise: any, index: number) => (
                      <div key={index} className="border border-dark-600 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-semibold">{exercise.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            exercise.type === 'quiz' ? 'bg-success-600' :
                            exercise.type === 'practical' ? 'bg-cyber-600' : 'bg-orange-600'
                          }`}>
                            {exercise.type.charAt(0).toUpperCase() + exercise.type.slice(1)}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4">{exercise.description}</p>
                        <div className="flex space-x-3">
                          <button 
                            className="cyber-button text-sm px-4 py-2"
                            onClick={() => {
                              setSelectedExercise(exercise)
                              setShowExerciseModal(true)
                            }}
                          >
                            Start Exercise
                          </button>
                          <button 
                            className="px-4 py-2 border border-cyber-500 text-cyber-500 hover:bg-cyber-500 hover:text-white rounded-lg transition-all duration-300 text-sm"
                            onClick={() => {
                              // Create a solution view of the exercise
                              const solutionExercise = {
                                ...exercise,
                                title: `${exercise.title} - Solution`,
                                content: exercise.solution || exercise.content
                              }
                              setSelectedExercise(solutionExercise)
                              setShowExerciseModal(true)
                            }}
                          >
                            View Solution
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setCurrentSection(1)}
                      className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={() => {
                        setCurrentSection(3)
                        markSectionComplete(2)
                      }}
                      className="cyber-button"
                    >
                      Next: Resources →
                    </button>
                  </div>
                </div>
              )}

              {currentSection === 3 && (
                <div className="cyber-card">
                  <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
                  
                  <div className="space-y-4">
                    {lesson.resources.map((resource: string, index: number) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-cyber-400" />
                          <div>
                            <h3 className="font-semibold">{resource}</h3>
                            <p className="text-sm text-gray-400">Additional learning material</p>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            // Map resource names to actual file names
                            const resourceMap: { [key: string]: string } = {
                              'NIST Framework': 'nist-framework.html',
                              'CISA Essentials': 'cisa-essentials.html',
                              'Security basics guide': 'security-basics-guide.html',
                              'Mobile security checklist': 'mobile-security-checklist.html',
                              'App security checklist': 'app-security-checklist.html',
                              'Monitoring tools': 'network-security-guide.html',
                              'Configuration best practices': 'device-security-guide.html',
                              'Cybersecurity fundamentals': 'cybersecurity-fundamentals-guide.pdf',
                              'Network security': 'network-security-comprehensive.pdf',
                              'Web application security': 'web-application-security-guide.pdf',
                              'Ethical hacking': 'ethical-hacking-methodology.pdf',
                              'Cryptography': 'cryptography-advanced-guide.pdf',
                              'Incident response': 'incident-response-playbook.pdf',
                              'Cloud security': 'cloud-security-best-practices.pdf',
                              'IoT security': 'iot-security-handbook.pdf',
                              'Mobile security': 'mobile-security-comprehensive.pdf',
                              'Social engineering': 'social-engineering-defense.pdf',
                              'Digital forensics': 'forensics-investigation-guide.pdf',
                              'Penetration testing': 'penetration-testing-methodology.pdf',
                              'Security architecture': 'security-architecture-guide.pdf',
                              'Compliance frameworks': 'compliance-frameworks-overview.pdf',
                              'Threat intelligence': 'threat-intelligence-guide.pdf',
                              'Secure coding': 'secure-coding-practices.pdf',
                              'Security monitoring': 'security-monitoring-guide.pdf',
                              'Business continuity': 'business-continuity-planning.pdf',
                              'OSINT tools': 'threat-intelligence-guide.pdf',
                              'Scanning techniques': 'penetration-testing-methodology.pdf',
                              'Reconnaissance methods': 'ethical-hacking-methodology.pdf',
                              'Vulnerability databases': 'web-application-security-guide.pdf',
                              'Assessment tools': 'penetration-testing-methodology.pdf',
                              'Reporting templates': 'incident-response-playbook.pdf',
                              'Exploit development': 'ethical-hacking-methodology.pdf',
                              'Metasploit documentation': 'penetration-testing-methodology.pdf',
                              'Exploitation techniques': 'ethical-hacking-methodology.pdf',
                              'Web exploitation': 'web-application-security-guide.pdf',
                              'Testing tools': 'penetration-testing-methodology.pdf',
                              'Vulnerability examples': 'web-application-security-guide.pdf',
                              'Wireless security': 'network-security-comprehensive.pdf',
                              'Attack tools': 'ethical-hacking-methodology.pdf',
                              'Security assessment methods': 'penetration-testing-methodology.pdf',
                              'Incident response guide': 'incident-response-playbook.pdf',
                              'Procedures template': 'incident-response-playbook.pdf',
                              'Recovery checklist': 'business-continuity-planning.pdf',
                              'Forensics guide': 'forensics-investigation-guide.pdf',
                              'Analysis tools': 'forensics-investigation-guide.pdf',
                              'Evidence handling procedures': 'forensics-investigation-guide.pdf',
                              'Reverse engineering techniques': 'forensics-investigation-guide.pdf',
                              'Cloud security guide': 'cloud-security-best-practices.pdf',
                              'Security frameworks': 'compliance-frameworks-overview.pdf',
                              'AWS security guide': 'cloud-security-best-practices.pdf',
                              'Security tools': 'security-monitoring-guide.pdf',
                              'Azure security guide': 'cloud-security-best-practices.pdf',
                              'Security center docs': 'cloud-security-best-practices.pdf',
                              'IoT security guide': 'iot-security-handbook.pdf',
                              'Threat reports': 'threat-intelligence-guide.pdf',
                              'Device security guide': 'device-security-guide.html',
                              'Firmware analysis tools': 'device-security-guide.html',
                              'Network security guide': 'network-security-guide.html',
                              'Protocol security': 'network-security-guide.html'
                            }
                            
                            const fileName = resourceMap[resource] || `${resource.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}.html`
                            console.log('Downloading resource:', resource, '-> File:', fileName)
                            
                            const link = document.createElement('a')
                            link.href = `/resources/${fileName}`
                            link.download = fileName
                            link.target = '_blank' // Open in new tab as fallback
                            document.body.appendChild(link)
                            link.click()
                            document.body.removeChild(link)
                          }}
                          className="text-cyber-400 hover:text-cyber-300 transition-colors"
                        >
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setCurrentSection(2)}
                      className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={() => {
                        markSectionComplete(3)
                        // Navigate to next lesson or back to course
                        router.push('/course')
                      }}
                      className="cyber-button"
                    >
                      Complete Lesson
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="cyber-card">
              <h3 className="text-lg font-semibold mb-4">Lesson Navigation</h3>
              
              <div className="space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => setCurrentSection(index)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      currentSection === index
                        ? 'bg-cyber-600 text-white'
                        : 'text-gray-300 hover:bg-dark-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {section.icon}
                        <span>{section.title}</span>
                      </div>
                      {completedSections.includes(index) && (
                        <CheckCircle className="w-4 h-4 text-success-400" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="font-semibold mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  <button className="w-full text-left p-2 text-gray-300 hover:bg-dark-700 rounded transition-colors">
                    <div className="flex items-center space-x-2">
                      <Video className="w-4 h-4" />
                      <span>Watch Video</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-2 text-gray-300 hover:bg-dark-700 rounded transition-colors">
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download Notes</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-2 text-gray-300 hover:bg-dark-700 rounded transition-colors">
                    <div className="flex items-center space-x-2">
                      <Share2 className="w-4 h-4" />
                      <span>Share Lesson</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise Modal */}
      {showExerciseModal && selectedExercise && (
        <ExerciseModal
          exercise={selectedExercise}
          onClose={() => {
            setShowExerciseModal(false)
            setSelectedExercise(null)
          }}
        />
      )}
    </div>
  )
} 