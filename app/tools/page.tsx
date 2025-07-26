'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  Code, 
  Globe,
  ArrowRight,
  Download,
  ExternalLink
} from 'lucide-react'
import PasswordGenerator from '@/components/PasswordGenerator'
import HashGenerator from '@/components/HashGenerator'
import Base64Tool from '@/components/Base64Tool'
import PasswordStrengthChecker from '@/components/PasswordStrengthChecker'

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState('password')

  const tools = [
    {
      id: 'password',
      name: 'Password Generator',
      description: 'Generate strong, secure passwords with customizable options',
      icon: <Lock className="w-8 h-8" />,
      component: <PasswordGenerator />
    },
    {
      id: 'hash',
      name: 'Hash Generator',
      description: 'Generate MD5, SHA-1, SHA-256 hashes for any text',
      icon: <Code className="w-8 h-8" />,
      component: <HashGenerator />
    },
    {
      id: 'base64',
      name: 'Base64 Encoder/Decoder',
      description: 'Encode or decode Base64 text easily',
      icon: <Globe className="w-8 h-8" />,
      component: <Base64Tool />
    },
    {
      id: 'strength',
      name: 'Password Strength Checker',
      description: 'Check how strong your password is',
      icon: <Eye className="w-8 h-8" />,
      component: <PasswordStrengthChecker />
    }
  ]

  const activeTool = tools.find(tool => tool.id === activeTab)

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
              Cybersecurity Tools
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Free, powerful tools to help you protect yourself online. 
            From password generation to hash and encoding tools, we've got you covered.
          </p>
        </motion.div>

        {/* Tool Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.button
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveTab(tool.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tool.id
                    ? 'bg-cyber-600 text-white'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                {tool.icon}
                <span>{tool.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active Tool Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {activeTool && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">{activeTool.name}</h2>
                <p className="text-gray-300">{activeTool.description}</p>
              </div>
              {activeTool.component}
            </div>
          )}
        </motion.div>

        {/* External Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">External Security Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="cyber-card group">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-cyber-500" />
                <h3 className="text-xl font-semibold">CISA</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Cybersecurity & Infrastructure Security Agency - Official US government cybersecurity resources
              </p>
              <a 
                href="https://www.cisa.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-cyber-400 hover:text-cyber-300 transition-colors"
              >
                <span>Visit CISA</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="cyber-card group">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-success-500" />
                <h3 className="text-xl font-semibold">Have I Been Pwned</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Check if your email or phone number has been compromised in a data breach
              </p>
              <a 
                href="https://haveibeenpwned.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-success-400 hover:text-success-300 transition-colors"
              >
                <span>Check Your Data</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="cyber-card group">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-danger-500" />
                <h3 className="text-xl font-semibold">VirusTotal</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Analyze suspicious files and URLs to detect types of malware
              </p>
              <a 
                href="https://www.virustotal.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-danger-400 hover:text-danger-300 transition-colors"
              >
                <span>Scan Files</span>
                <ExternalLink className="w-4 h-4" />
              </a>
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
          <h2 className="text-3xl font-bold mb-4">Want More Tools?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're constantly adding new cybersecurity tools. Have a suggestion?
          </p>
          <button className="cyber-button text-lg px-8 py-4">
            Suggest a Tool
          </button>
        </motion.div>
      </div>
    </div>
  )
} 