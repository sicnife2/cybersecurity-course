'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, X, FileText, CheckCircle } from 'lucide-react'

interface ResourceSelectorProps {
  resources: string[]
  onClose: () => void
  title?: string
}

export default function ResourceSelector({ resources, onClose, title = "Download Resources" }: ResourceSelectorProps) {
  const [selectedResources, setSelectedResources] = useState<string[]>([])
  const [isDownloading, setIsDownloading] = useState(false)

  const handleResourceToggle = (resource: string) => {
    setSelectedResources(prev => 
      prev.includes(resource) 
        ? prev.filter(r => r !== resource)
        : [...prev, resource]
    )
  }

  const handleDownload = async () => {
    if (selectedResources.length === 0) {
      alert('Please select at least one resource to download.')
      return
    }

    setIsDownloading(true)

    try {
      // Simulate download process
      for (const resource of selectedResources) {
        await new Promise(resolve => setTimeout(resolve, 500))
        
        const fileName = `${resource.replace(/\s+/g, '_').toLowerCase()}.pdf`
        const link = document.createElement('a')
        link.href = `/resources/${fileName}`
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }

      // Show success message
      setTimeout(() => {
        onClose()
      }, 1000)
    } catch (error) {
      console.error('Error downloading resources:', error)
      alert('Failed to download resources. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  const handleSelectAll = () => {
    setSelectedResources(resources)
  }

  const handleDeselectAll = () => {
    setSelectedResources([])
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
        className="cyber-card max-w-2xl w-full mx-4"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Download className="w-6 h-6 text-cyber-400" />
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-dark-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-4">
          <p className="text-gray-300 mb-4">
            Select the resources you want to download:
          </p>
          
          <div className="flex space-x-3 mb-4">
            <button
              onClick={handleSelectAll}
              className="px-3 py-1 text-sm border border-cyber-500 text-cyber-500 hover:bg-cyber-500 hover:text-white rounded transition-colors"
            >
              Select All
            </button>
            <button
              onClick={handleDeselectAll}
              className="px-3 py-1 text-sm border border-gray-600 text-gray-300 hover:bg-gray-600 rounded transition-colors"
            >
              Deselect All
            </button>
          </div>
        </div>

        <div className="space-y-3 max-h-64 overflow-y-auto">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                selectedResources.includes(resource)
                  ? 'bg-cyber-500/20 border-cyber-500'
                  : 'bg-dark-700 border-dark-600 hover:bg-dark-600'
              }`}
              onClick={() => handleResourceToggle(resource)}
            >
              <div className="flex items-center justify-center w-5 h-5">
                {selectedResources.includes(resource) ? (
                  <CheckCircle className="w-5 h-5 text-cyber-400" />
                ) : (
                  <FileText className="w-5 h-5 text-gray-400" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{resource}</h3>
                <p className="text-sm text-gray-400">PDF Document</p>
              </div>
              <Download className="w-4 h-4 text-gray-400" />
            </div>
          ))}
        </div>

        {resources.length === 0 && (
          <div className="text-center py-8">
            <FileText className="w-12 h-12 text-gray-500 mx-auto mb-3" />
            <p className="text-gray-400">No resources available for this module yet.</p>
          </div>
        )}

        <div className="flex space-x-3 pt-6 border-t border-dark-600">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-dark-600 text-gray-300 hover:bg-dark-700 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleDownload}
            disabled={isDownloading || selectedResources.length === 0}
            className="flex-1 cyber-button flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {isDownloading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Downloading...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>
                  Download {selectedResources.length > 0 ? `(${selectedResources.length})` : ''}
                </span>
              </>
            )}
          </button>
        </div>

        <div className="mt-4 p-3 bg-cyber-900/20 border border-cyber-500/30 rounded-lg">
          <p className="text-sm text-gray-400">
            Selected: <span className="text-cyber-400">{selectedResources.length}</span> of {resources.length} resources
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
} 