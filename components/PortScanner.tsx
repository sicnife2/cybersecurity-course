'use client'

import { useState } from 'react'
import { Search, Target, Lock, Unlock, Clock, AlertTriangle } from 'lucide-react'

interface PortScanResult {
  port: number
  service: string
  status: 'open' | 'closed' | 'filtered'
  responseTime?: number
  banner?: string
}

export default function PortScanner() {
  const [target, setTarget] = useState('')
  const [portRange, setPortRange] = useState('common')
  const [customPorts, setCustomPorts] = useState('')
  const [isScanning, setIsScanning] = useState(false)
  const [results, setResults] = useState<PortScanResult[]>([])
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

  const wellKnownPorts = [
    { port: 20, service: 'FTP-DATA' },
    { port: 21, service: 'FTP' },
    { port: 22, service: 'SSH' },
    { port: 23, service: 'Telnet' },
    { port: 25, service: 'SMTP' },
    { port: 53, service: 'DNS' },
    { port: 67, service: 'DHCP' },
    { port: 68, service: 'DHCP' },
    { port: 69, service: 'TFTP' },
    { port: 80, service: 'HTTP' },
    { port: 110, service: 'POP3' },
    { port: 123, service: 'NTP' },
    { port: 143, service: 'IMAP' },
    { port: 161, service: 'SNMP' },
    { port: 162, service: 'SNMP-TRAP' },
    { port: 389, service: 'LDAP' },
    { port: 443, service: 'HTTPS' },
    { port: 445, service: 'SMB' },
    { port: 993, service: 'IMAPS' },
    { port: 995, service: 'POP3S' },
    { port: 1433, service: 'MSSQL' },
    { port: 1521, service: 'Oracle' },
    { port: 3306, service: 'MySQL' },
    { port: 3389, service: 'RDP' },
    { port: 5432, service: 'PostgreSQL' },
    { port: 5900, service: 'VNC' },
    { port: 6379, service: 'Redis' },
    { port: 8080, service: 'HTTP-Alt' },
    { port: 8443, service: 'HTTPS-Alt' }
  ]

  const getPortsToScan = () => {
    switch (portRange) {
      case 'common':
        return commonPorts
      case 'well-known':
        return wellKnownPorts
      case 'custom':
        return customPorts.split(',').map(p => ({
          port: parseInt(p.trim()),
          service: 'Unknown'
        })).filter(p => !isNaN(p.port))
      default:
        return commonPorts
    }
  }

  const simulatePortScan = async () => {
    if (!target) {
      alert('Please enter a target IP address or hostname')
      return
    }

    const portsToScan = getPortsToScan()
    if (portsToScan.length === 0) {
      alert('Please specify ports to scan')
      return
    }

    setIsScanning(true)
    setScanProgress(0)
    setResults([])

    const mockResults: PortScanResult[] = []

    for (let i = 0; i < portsToScan.length; i++) {
      const port = portsToScan[i]
      
      // Simulate scanning delay
      await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200))

      // Simulate port status (randomly open some ports)
      const isOpen = Math.random() > 0.7
      const status = isOpen ? 'open' : (Math.random() > 0.5 ? 'filtered' : 'closed')

      mockResults.push({
        port: port.port,
        service: port.service,
        status,
        responseTime: isOpen ? Math.floor(Math.random() * 100) + 10 : undefined,
        banner: isOpen ? `Mock ${port.service} Server v1.0` : undefined
      })

      setScanProgress(((i + 1) / portsToScan.length) * 100)
      setResults([...mockResults])
    }

    setIsScanning(false)
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
      case 'open': return <Unlock className="w-4 h-4 text-success-500" />
      case 'closed': return <Lock className="w-4 h-4 text-gray-500" />
      case 'filtered': return <AlertTriangle className="w-4 h-4 text-warning-500" />
      default: return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  return (
    <div className="cyber-card max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">Port Scanner</h3>
      
      {/* Configuration */}
      <div className="mb-8 space-y-6">
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
            <Target className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Port Range Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Port Range</label>
          <div className="grid md:grid-cols-3 gap-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                value="common"
                checked={portRange === 'common'}
                onChange={(e) => setPortRange(e.target.value)}
                className="w-4 h-4 text-cyber-600 bg-dark-700 border-dark-600 focus:ring-cyber-500"
                disabled={isScanning}
              />
              <div>
                <span className="font-medium">Common Ports</span>
                <p className="text-sm text-gray-400">15 most common ports</p>
              </div>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                value="well-known"
                checked={portRange === 'well-known'}
                onChange={(e) => setPortRange(e.target.value)}
                className="w-4 h-4 text-cyber-600 bg-dark-700 border-dark-600 focus:ring-cyber-500"
                disabled={isScanning}
              />
              <div>
                <span className="font-medium">Well-Known</span>
                <p className="text-sm text-gray-400">Standard ports (1-1024)</p>
              </div>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                value="custom"
                checked={portRange === 'custom'}
                onChange={(e) => setPortRange(e.target.value)}
                className="w-4 h-4 text-cyber-600 bg-dark-700 border-dark-600 focus:ring-cyber-500"
                disabled={isScanning}
              />
              <div>
                <span className="font-medium">Custom</span>
                <p className="text-sm text-gray-400">Specific ports</p>
              </div>
            </label>
          </div>
        </div>

        {/* Custom Ports Input */}
        {portRange === 'custom' && (
          <div>
            <label className="block text-sm font-medium mb-2">Custom Ports</label>
            <input
              type="text"
              value={customPorts}
              onChange={(e) => setCustomPorts(e.target.value)}
              placeholder="Enter ports separated by commas (e.g., 80,443,8080)"
              className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-cyber-500 focus:outline-none"
              disabled={isScanning}
            />
          </div>
        )}

        {/* Scan Button */}
        <button
          onClick={simulatePortScan}
          disabled={isScanning || !target}
          className="w-full cyber-button flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isScanning ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Scanning Ports...</span>
            </>
          ) : (
            <>
              <Search className="w-5 h-5" />
              <span>Start Port Scan</span>
            </>
          )}
        </button>
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

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold">Scan Results</h4>
            <div className="text-sm text-gray-400">
              {results.filter(r => r.status === 'open').length} open, {results.filter(r => r.status === 'filtered').length} filtered
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-600">
                  <th className="text-left py-2 px-3">Port</th>
                  <th className="text-left py-2 px-3">Service</th>
                  <th className="text-left py-2 px-3">Status</th>
                  <th className="text-left py-2 px-3">Response Time</th>
                  <th className="text-left py-2 px-3">Banner</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr key={index} className="border-b border-dark-700">
                    <td className="py-2 px-3 font-mono">{result.port}</td>
                    <td className="py-2 px-3">{result.service}</td>
                    <td className="py-2 px-3">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(result.status)}
                        <span className={`text-sm font-medium ${getStatusColor(result.status)}`}>
                          {result.status.toUpperCase()}
                        </span>
                      </div>
                    </td>
                    <td className="py-2 px-3 text-sm">
                      {result.responseTime ? `${result.responseTime}ms` : '-'}
                    </td>
                    <td className="py-2 px-3 text-sm text-gray-400 max-w-xs truncate">
                      {result.banner || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Security Notice */}
      <div className="mt-8 p-4 bg-warning-900/20 border border-warning-500/30 rounded-lg">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-warning-400 mt-0.5" />
          <div>
            <h4 className="font-semibold text-warning-400 mb-1">Legal Notice</h4>
            <p className="text-sm text-gray-300">
              Port scanning should only be performed on systems you own or have explicit permission to test. 
              Unauthorized port scanning may violate computer crime laws.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 