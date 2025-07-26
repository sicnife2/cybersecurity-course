'use client'

import { useState, useCallback } from 'react'
import { Copy, RefreshCw, Eye, EyeOff, CheckCircle } from 'lucide-react'

export default function PasswordGenerator() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(16)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [copied, setCopied] = useState(false)

  const generatePassword = useCallback(() => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'

    let chars = ''
    if (includeUppercase) chars += uppercase
    if (includeLowercase) chars += lowercase
    if (includeNumbers) chars += numbers
    if (includeSymbols) chars += symbols

    if (chars === '') {
      alert('Please select at least one character type!')
      return
    }

    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    setPassword(result)
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols])

  const copyToClipboard = async () => {
    if (password) {
      await navigator.clipboard.writeText(password)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const getPasswordStrength = () => {
    if (!password) return { score: 0, label: 'No Password', color: 'text-gray-400' }
    
    let score = 0
    if (password.length >= 8) score++
    if (password.length >= 12) score++
    if (/[A-Z]/.test(password)) score++
    if (/[a-z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++

    if (score <= 2) return { score, label: 'Weak', color: 'text-danger-500' }
    if (score <= 4) return { score, label: 'Fair', color: 'text-yellow-500' }
    if (score <= 5) return { score, label: 'Good', color: 'text-cyber-500' }
    return { score, label: 'Strong', color: 'text-success-500' }
  }

  const strength = getPasswordStrength()

  return (
    <div className="cyber-card max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">Password Generator</h3>
      
      {/* Password Display */}
      <div className="mb-6">
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            readOnly
            className="w-full p-4 pr-20 bg-dark-700 border border-dark-600 rounded-lg text-white font-mono text-lg"
            placeholder="Generated password will appear here"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="p-2 hover:bg-dark-600 rounded transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
            <button
              onClick={copyToClipboard}
              className="p-2 hover:bg-dark-600 rounded transition-colors"
            >
              {copied ? <CheckCircle className="w-5 h-5 text-success-500" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        {/* Password Strength */}
        {password && (
          <div className="mt-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Strength:</span>
              <span className={`text-sm font-semibold ${strength.color}`}>
                {strength.label}
              </span>
            </div>
            <div className="w-full bg-dark-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  strength.score <= 2 ? 'bg-danger-500' :
                  strength.score <= 4 ? 'bg-yellow-500' :
                  strength.score <= 5 ? 'bg-cyber-500' : 'bg-success-500'
                }`}
                style={{ width: `${(strength.score / 6) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* Length Slider */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Password Length: {length}
        </label>
        <input
          type="range"
          min="8"
          max="64"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer slider"
        />
      </div>

      {/* Character Options */}
      <div className="space-y-3 mb-6">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
            className="w-4 h-4 text-cyber-600 bg-dark-700 border-dark-600 rounded focus:ring-cyber-500"
          />
          <span>Include Uppercase Letters (A-Z)</span>
        </label>
        
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
            className="w-4 h-4 text-cyber-600 bg-dark-700 border-dark-600 rounded focus:ring-cyber-500"
          />
          <span>Include Lowercase Letters (a-z)</span>
        </label>
        
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className="w-4 h-4 text-cyber-600 bg-dark-700 border-dark-600 rounded focus:ring-cyber-500"
          />
          <span>Include Numbers (0-9)</span>
        </label>
        
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            className="w-4 h-4 text-cyber-600 bg-dark-700 border-dark-600 rounded focus:ring-cyber-500"
          />
          <span>Include Symbols (!@#$%^&*)</span>
        </label>
      </div>

      {/* Generate Button */}
      <button
        onClick={generatePassword}
        className="w-full cyber-button flex items-center justify-center space-x-2"
      >
        <RefreshCw className="w-5 h-5" />
        <span>Generate Password</span>
      </button>

      {/* Security Tips */}
      <div className="mt-6 p-4 bg-cyber-900/20 border border-cyber-500/30 rounded-lg">
        <h4 className="font-semibold mb-2 text-cyber-400">Security Tips:</h4>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>• Use at least 12 characters for better security</li>
          <li>• Include a mix of character types</li>
          <li>• Never reuse passwords across accounts</li>
          <li>• Consider using a password manager</li>
        </ul>
      </div>
    </div>
  )
} 