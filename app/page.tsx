'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  BookOpen, 
  Users, 
  Target, 
  AlertTriangle,
  ArrowRight,
  Play,
  Code,
  Globe
} from 'lucide-react'

export default function Home() {
  const [currentThreat, setCurrentThreat] = useState(0)
  
  const threats = [
    "Phishing attacks increased by 600% in 2023",
    "Ransomware costs reached $20 billion globally",
    "Social engineering remains the #1 attack vector",
    "IoT devices are increasingly targeted"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThreat((prev) => (prev + 1) % threats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [threats.length])

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Complete Course",
      description: "Comprehensive cybersecurity course from beginner to expert level"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Security Tools",
      description: "Free tools for password generation, hash, encoding, and more"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Free Learning",
      description: "100% free access to all cybersecurity content and resources"
    }
  ]

  const learningPaths = [
    {
      level: "Beginner",
      title: "Security Fundamentals",
      description: "Learn the basics of cybersecurity and online safety",
      topics: ["Password Security", "Phishing Awareness", "Social Media Safety"],
      color: "bg-success-600"
    },
    {
      level: "Intermediate", 
      title: "Network Security",
      description: "Understand network protocols and security measures",
      topics: ["Firewalls", "VPNs", "Network Monitoring"],
      color: "bg-cyber-600"
    },
    {
      level: "Advanced",
      title: "Ethical Hacking",
      description: "Learn penetration testing and security assessment",
      topics: ["Penetration Testing", "Vulnerability Assessment", "Incident Response"],
      color: "bg-danger-600"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-cyber-500" />
              <span className="text-xl font-bold text-white">CyberGuard</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/course" className="text-gray-300 hover:text-white transition-colors">Course</a>
              <a href="/tools" className="text-gray-300 hover:text-white transition-colors">Tools</a>
            </div>
            <button className="cyber-button">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="cyber-gradient bg-clip-text text-transparent">
                Master Cybersecurity
              </span>
              <br />
              <span className="text-white">For Free</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The most comprehensive free cybersecurity education platform. 
              Learn to protect yourself and others from digital threats.
            </p>
            
            {/* Live Threat Alert */}
            <div className="mb-8 p-4 bg-danger-900/20 border border-danger-500/30 rounded-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-danger-400 animate-pulse" />
                <span className="text-danger-400 font-semibold">Live Threat Alert:</span>
                <span className="text-white">{threats[currentThreat]}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/course" className="cyber-button flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Start Course</span>
              </a>
              <a href="/tools" className="px-6 py-3 border border-cyber-500 text-cyber-500 hover:bg-cyber-500 hover:text-white font-semibold rounded-lg transition-all duration-300">
                Explore Tools
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose CyberGuard?</h2>
            <p className="text-xl text-gray-300">Everything you need to become a cybersecurity expert</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cyber-card text-center group"
              >
                <div className="inline-flex p-3 bg-cyber-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Choose Your Learning Path</h2>
            <p className="text-xl text-gray-300">Start from where you are and progress at your own pace</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cyber-card group hover:scale-105 transition-transform"
              >
                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold mb-4 ${path.color}`}>
                  {path.level}
                </div>
                <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
                <p className="text-gray-400 mb-4">{path.description}</p>
                <ul className="space-y-2 mb-6">
                  {path.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyber-500 rounded-full"></div>
                      <span className="text-gray-300">{topic}</span>
                    </li>
                  ))}
                </ul>
                <a href={`/course?difficulty=${path.level.toLowerCase()}`} className="w-full cyber-button flex items-center justify-center space-x-2">
                  <span>Start Path</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-cyber-500 mb-2">50K+</div>
              <div className="text-gray-400">Students Enrolled</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-success-500 mb-2">200+</div>
              <div className="text-gray-400">Free Tutorials</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-danger-500 mb-2">24/7</div>
              <div className="text-gray-400">Threat Monitoring</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-cyber-500 mb-2">100%</div>
              <div className="text-gray-400">Free Access</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Secure Your Digital Life?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of learners who are already protecting themselves and others online.
            </p>
            <a href="/course" className="cyber-button text-lg px-8 py-4 inline-block">
              Start Your Cybersecurity Journey
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 