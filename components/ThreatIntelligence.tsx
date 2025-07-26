'use client'

import { useState, useEffect } from 'react'
import { AlertTriangle, Globe, Clock, TrendingUp, Shield, Zap } from 'lucide-react'

interface Threat {
  id: string
  title: string
  description: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  category: string
  timestamp: string
  affected: string
  source: string
}

export default function ThreatIntelligence() {
  const [threats, setThreats] = useState<Threat[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'critical' | 'high' | 'medium' | 'low'>('all')

  // Simulated threat data - in a real app, this would come from APIs
  const mockThreats: Threat[] = [
    {
      id: '1',
      title: 'New Ransomware Variant Detected',
      description: 'A new strain of ransomware targeting healthcare systems has been identified. The malware uses sophisticated encryption and demands payment in cryptocurrency.',
      severity: 'critical',
      category: 'Ransomware',
      timestamp: '2024-01-15T10:30:00Z',
      affected: 'Healthcare, Financial Services',
      source: 'CISA'
    },
    {
      id: '2',
      title: 'Phishing Campaign Targeting Remote Workers',
      description: 'Large-scale phishing campaign using COVID-19 themed emails to steal credentials from remote workers.',
      severity: 'high',
      category: 'Phishing',
      timestamp: '2024-01-15T09:15:00Z',
      affected: 'Remote Workers, Corporate Networks',
      source: 'FBI'
    },
    {
      id: '3',
      title: 'Zero-Day Vulnerability in Popular CMS',
      description: 'Critical vulnerability discovered in widely-used content management system allowing remote code execution.',
      severity: 'high',
      category: 'Vulnerability',
      timestamp: '2024-01-15T08:45:00Z',
      affected: 'Web Applications',
      source: 'Security Researchers'
    },
    {
      id: '4',
      title: 'IoT Botnet Activity Increase',
      description: 'Significant increase in IoT device compromise attempts, with devices being recruited into DDoS botnets.',
      severity: 'medium',
      category: 'Botnet',
      timestamp: '2024-01-15T07:20:00Z',
      affected: 'IoT Devices, Home Networks',
      source: 'ISP Security Teams'
    },
    {
      id: '5',
      title: 'Social Engineering Attack on Social Media',
      description: 'New social engineering technique using fake celebrity accounts to spread malware through direct messages.',
      severity: 'medium',
      category: 'Social Engineering',
      timestamp: '2024-01-15T06:30:00Z',
      affected: 'Social Media Users',
      source: 'Social Media Platforms'
    }
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setThreats(mockThreats)
      setLoading(false)
    }, 1000)
  }, [])

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-danger-500 bg-danger-500/10 border-danger-500/30'
      case 'high': return 'text-orange-500 bg-orange-500/10 border-orange-500/30'
      case 'medium': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30'
      case 'low': return 'text-cyber-500 bg-cyber-500/10 border-cyber-500/30'
      default: return 'text-gray-500 bg-gray-500/10 border-gray-500/30'
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return <AlertTriangle className="w-5 h-5" />
      case 'high': return <TrendingUp className="w-5 h-5" />
      case 'medium': return <Shield className="w-5 h-5" />
      case 'low': return <Zap className="w-5 h-5" />
      default: return <Globe className="w-5 h-5" />
    }
  }

  const filteredThreats = threats.filter(threat => 
    filter === 'all' || threat.severity === filter
  )

  const stats = {
    total: threats.length,
    critical: threats.filter(t => t.severity === 'critical').length,
    high: threats.filter(t => t.severity === 'high').length,
    medium: threats.filter(t => t.severity === 'medium').length,
    low: threats.filter(t => t.severity === 'low').length,
  }

  if (loading) {
    return (
      <div className="cyber-card">
        <div className="animate-pulse">
          <div className="h-8 bg-dark-700 rounded mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-24 bg-dark-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cyber-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">Live Threat Intelligence</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Clock className="w-4 h-4" />
          <span>Updated {new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="text-center p-3 bg-dark-700 rounded-lg">
          <div className="text-2xl font-bold text-white">{stats.total}</div>
          <div className="text-xs text-gray-400">Total Threats</div>
        </div>
        <div className="text-center p-3 bg-danger-500/10 border border-danger-500/30 rounded-lg">
          <div className="text-2xl font-bold text-danger-500">{stats.critical}</div>
          <div className="text-xs text-gray-400">Critical</div>
        </div>
        <div className="text-center p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg">
          <div className="text-2xl font-bold text-orange-500">{stats.high}</div>
          <div className="text-xs text-gray-400">High</div>
        </div>
        <div className="text-center p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
          <div className="text-2xl font-bold text-yellow-500">{stats.medium}</div>
          <div className="text-xs text-gray-400">Medium</div>
        </div>
        <div className="text-center p-3 bg-cyber-500/10 border border-cyber-500/30 rounded-lg">
          <div className="text-2xl font-bold text-cyber-500">{stats.low}</div>
          <div className="text-xs text-gray-400">Low</div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(['all', 'critical', 'high', 'medium', 'low'] as const).map(level => (
          <button
            key={level}
            onClick={() => setFilter(level)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              filter === level
                ? 'bg-cyber-600 text-white'
                : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
            }`}
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>

      {/* Threats List */}
      <div className="space-y-4">
        {filteredThreats.map(threat => (
          <div
            key={threat.id}
            className={`p-4 rounded-lg border ${getSeverityColor(threat.severity)}`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                {getSeverityIcon(threat.severity)}
                <h4 className="font-semibold">{threat.title}</h4>
              </div>
              <span className="text-xs text-gray-400">
                {new Date(threat.timestamp).toLocaleString()}
              </span>
            </div>
            
            <p className="text-sm text-gray-300 mb-3">{threat.description}</p>
            
            <div className="flex flex-wrap gap-4 text-xs">
              <div>
                <span className="text-gray-400">Category:</span>
                <span className="ml-1 text-cyber-400">{threat.category}</span>
              </div>
              <div>
                <span className="text-gray-400">Affected:</span>
                <span className="ml-1 text-cyber-400">{threat.affected}</span>
              </div>
              <div>
                <span className="text-gray-400">Source:</span>
                <span className="ml-1 text-cyber-400">{threat.source}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredThreats.length === 0 && (
        <div className="text-center py-8 text-gray-400">
          No threats found for the selected filter.
        </div>
      )}

      {/* Security Recommendations */}
      <div className="mt-6 p-4 bg-cyber-900/20 border border-cyber-500/30 rounded-lg">
        <h4 className="font-semibold mb-2 text-cyber-400">Security Recommendations:</h4>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>• Keep all software and systems updated</li>
          <li>• Enable multi-factor authentication everywhere possible</li>
          <li>• Be cautious of suspicious emails and links</li>
          <li>• Use strong, unique passwords for each account</li>
          <li>• Regularly backup important data</li>
        </ul>
      </div>
    </div>
  )
} 