'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, X, CheckCircle, User } from 'lucide-react'

interface AdminEmailFormProps {
  onClose: () => void
  adminName: string
}

export default function AdminEmailForm({ onClose, adminName }: AdminEmailFormProps) {
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/admin/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          adminName
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email')
      }
      
      setIsSubmitted(true)
      setTimeout(() => {
        onClose()
      }, 3000)
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Failed to send email. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      >
        <div className="cyber-card max-w-md w-full mx-4 text-center">
          <CheckCircle className="w-16 h-16 text-success-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Email Sent!</h2>
          <p className="text-gray-300 mb-4">
            Your message has been sent to {formData.to}
          </p>
          <p className="text-sm text-gray-400">
            Sent from CyberGuide Admin Panel
          </p>
        </div>
      </motion.div>
    )
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
        className="cyber-card max-w-lg w-full mx-4"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-cyber-400" />
            <h2 className="text-2xl font-bold">Send Email to User</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-dark-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">To (User Email)</label>
            <input
              type="email"
              name="to"
              value={formData.to}
              onChange={handleChange}
              required
              className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-cyber-500 focus:outline-none"
              placeholder="user@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-cyber-500 focus:outline-none"
              placeholder="Subject of your message"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-cyber-500 focus:outline-none resize-none"
              placeholder="Type your message here..."
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-dark-600 text-gray-300 hover:bg-dark-700 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 cyber-button flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Email</span>
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-4 p-3 bg-cyber-900/20 border border-cyber-500/30 rounded-lg">
          <p className="text-sm text-gray-400">
            Sending as <span className="text-cyber-400">{adminName}</span> from CyberGuide Admin
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
} 