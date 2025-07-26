'use client'

import { useState } from 'react'
import { Search, Wifi, Server, Shield, AlertTriangle, CheckCircle, Clock } from 'lucide-react'

interface ScanResult {
  ip: string
  hostname?: string
  ports: PortInfo[]
  status: 'open' | 'closed' | 'filtered'
  lastSeen: string
}

interface PortInfo {
  port: number
  service: string
  version?: string
  status: 'open' | 'closed' | 'filtered'
}

export default function NetworkScanner() {
  const [target, setTarget] = useState('')
  const [scanType, setScanType] = useState('quick')
  const [isScanning, setIsScanning] = useState(false)
  const [results, setResults] = useState<ScanResult[]>([])
  const [scanProgress, setScanProgress] = useState(0)

  const commonPorts = [
    { port: 21, service: 'FTP' },
    { port: 22, service: 'SSH' },
    { port: 23, service: 'Telnet' },
    { port: 25, service: 'SMTP' },
    { port: 53, service: 'DNS' },
    { port: 80, service: 'HTTP' },
    { port: 110, service: 'POP3' },
    { port: 143, service: 'IMAP' },
    { port: 443, service: 'HTTPS' },
    { port: 993, service: 'IMAPS' },
    { port: 995, service: 'POP3S' },
    { port: 3306, service: 'MySQL' },
    { port: 3389, service: 'RDP' },
    { port: 5432, service: 'PostgreSQL' },
    { port: 8080, service: 'HTTP-Alt' }
  ]

  const scanTypes = [
    { id: 'quick', name: 'Quick Scan', description: 'Common ports (15 ports)', icon: <Search className="w-4 h-4" /> },
    { id: 'full', name: 'Full Scan', description: 'All ports (1-65535)', icon: <Server className="w-4 h-4" /> },
    { id: 'stealth', name: 'Stealth Scan', description: 'Slow but undetectable', icon: <Shield className="w-4 h-4" /> }
  ]

  const simulateScan = async () => {
    if (!target) {
      alert('Please enter a target IP address or hostname')
      return
    }

    setIsScanning(true)
    setScanProgress(0)
    setResults([])

    // Simulate scanning progress
    const progressInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 10
      })
    }, 200)

    // Simulate scan results
    setTimeout(() => {
      const mockResults: ScanResult[] = [
        {
          ip: target,
          hostname: target.includes('.') ? target : `${target}.local`,
          ports: commonPorts.slice(0, 5).map(port => ({
            port: port.port,
            service: port.service,
            status: Math.random() > 0.7 ? 'open' : 'closed' as const
          })),
          status: 'open',
          lastSeen: new Date().toISOString()
        }
      ]

      setResults(mockResults)
      setIsScanning(false)
      setScanProgress(100)
    }, 3000)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-success-500'
      case 'closed': return 'text-gray-500'
      case 'filtered': return 'text-warning-500'
      default: return 'text-gray-400'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open': return <CheckCircle className="w-4 h-4 text-success-500" />
      case 'closed': return <AlertTriangle className="w-4 h-4 text-gray-500" />
      case 'filtered': return <Shield className="w-4 h-4 text-warning-500" />
      default: return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  return (
    <div className="cyber-card max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">Network Scanner</h3>
      
      {/* Scan Configuration */}
      <div className="mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Target Input */}
          <div>
            <label className="block text-sm font-medium mb-2">Target</label>
            <div className="relative">
              <input
                type="text"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                placeholder="Enter IP address or hostname (e.g., 192.168.1.1)"
                className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-cyber-500 focus:outline-none"
                disabled={isScanning}
              />
              <Wifi className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Scan Type */}
          <div>
            <label className="block text-sm font-medium mb-2">Scan Type</label>
            <select
              value={scanType}
              onChange={(e) => setScanType(e.target.value)}
              className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-cyber-500 focus:outline-none"
              disabled={isScanning}
            >
              {scanTypes.map(type => (
                <option key={type.id} value={type.id}>
                  {type.name} - {type.description}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Scan Button */}
        <div className="mt-6">
          <button
            onClick={simulateScan}
            disabled={isScanning || !target}
            className="w-full cyber-button flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isScanning ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Scanning...</span>
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                <span>Start Scan</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Scan Progress */}
      {isScanning && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Scan Progress</span>
            <span className="text-sm text-cyber-400">{Math.round(scanProgress)}%</span>
          </div>
          <div className="w-full bg-dark-700 rounded-full h-2">
            <div
              className="bg-cyber-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${scanProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Scan Results */}
      {results.length > 0 && (
        <div className="space-y-6">
          <h4 className="text-lg font-semibold">Scan Results</h4>
          
          {results.map((result, index) => (
            <div key={index} className="border border-dark-600 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h5 className="font-semibold text-lg">{result.ip}</h5>
                  {result.hostname && (
                    <p className="text-sm text-gray-400">{result.hostname}</p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(result.status)}
                  <span className={`text-sm font-medium ${getStatusColor(result.status)}`}>
                    {result.status.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Port Results */}
              <div className="space-y-2">
                <h6 className="text-sm font-medium text-gray-300">Open Ports:</h6>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {result.ports.map((port, portIndex) => (
                    <div
                      key={portIndex}
                      className={`flex items-center justify-between p-2 rounded ${
                        port.status === 'open' ? 'bg-success-900/20 border border-success-500/30' : 'bg-dark-700'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(port.status)}
                        <span className="text-sm font-mono">{port.port}</span>
                      </div>
                      <span className="text-xs text-gray-400">{port.service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-400">
                Last scanned: {new Date(result.lastSeen).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Security Notice */}
      <div className="mt-8 p-4 bg-warning-900/20 border border-warning-500/30 rounded-lg">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-warning-400 mt-0.5" />
          <div>
            <h4 className="font-semibold text-warning-400 mb-1">Security Notice</h4>
            <p className="text-sm text-gray-300">
              This tool is for educational purposes only. Only scan networks you own or have explicit permission to test. 
              Unauthorized scanning may be illegal in your jurisdiction.
            </p>
          </div>
        </div>
      </div>

      {/* Usage Tips */}
      <div className="mt-6 p-4 bg-cyber-900/20 border border-cyber-500/30 rounded-lg">
        <h4 className="font-semibold text-cyber-400 mb-2">Usage Tips</h4>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>• Use Quick Scan for initial reconnaissance</li>
          <li>• Full Scan takes longer but provides complete results</li>
          <li>• Stealth Scan is slower but less likely to be detected</li>
          <li>• Always obtain permission before scanning networks</li>
          <li>• Monitor for any unusual activity during scans</li>
        </ul>
      </div>
    </div>
  )
} 