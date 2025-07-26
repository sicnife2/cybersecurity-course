'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Users, 
  Settings, 
  BarChart3, 
  BookOpen, 
  AlertTriangle,
  Ban,
  UserCheck,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Download,
  Upload
} from 'lucide-react'

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchTerm, setSearchTerm] = useState('')

  // Mock data for demonstration
  const stats = {
    totalUsers: 15420,
    activeUsers: 8920,
    totalCourses: 45,
    totalLessons: 320,
    threatsBlocked: 1250,
    reportsToday: 23
  }

  const recentUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', lastActive: '2 hours ago' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'banned', lastActive: '1 day ago' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'active', lastActive: '3 hours ago' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', status: 'pending', lastActive: '5 hours ago' }
  ]

  const recentThreats = [
    { id: 1, type: 'Phishing Attempt', severity: 'high', source: '192.168.1.100', time: '5 minutes ago' },
    { id: 2, type: 'Brute Force Attack', severity: 'medium', source: '10.0.0.50', time: '15 minutes ago' },
    { id: 3, type: 'SQL Injection', severity: 'high', source: '172.16.0.25', time: '1 hour ago' }
  ]

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'users', name: 'User Management', icon: <Users className="w-5 h-5" /> },
    { id: 'content', name: 'Content Management', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'threats', name: 'Threat Monitoring', icon: <AlertTriangle className="w-5 h-5" /> },
    { id: 'settings', name: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ]

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="cyber-card"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Users</p>
              <p className="text-3xl font-bold text-cyber-500">{stats.totalUsers.toLocaleString()}</p>
            </div>
            <Users className="w-8 h-8 text-cyber-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="cyber-card"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Users</p>
              <p className="text-3xl font-bold text-success-500">{stats.activeUsers.toLocaleString()}</p>
            </div>
            <UserCheck className="w-8 h-8 text-success-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="cyber-card"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Threats Blocked</p>
              <p className="text-3xl font-bold text-danger-500">{stats.threatsBlocked.toLocaleString()}</p>
            </div>
            <Shield className="w-8 h-8 text-danger-500" />
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="cyber-card">
          <h3 className="text-xl font-semibold mb-4">Recent Users</h3>
          <div className="space-y-3">
            {recentUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 bg-dark-700 rounded-lg">
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-400">{user.email}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    user.status === 'active' ? 'bg-success-900 text-success-400' :
                    user.status === 'banned' ? 'bg-danger-900 text-danger-400' :
                    'bg-warning-900 text-warning-400'
                  }`}>
                    {user.status}
                  </span>
                  <button className="text-cyber-500 hover:text-cyber-400">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cyber-card">
          <h3 className="text-xl font-semibold mb-4">Recent Threats</h3>
          <div className="space-y-3">
            {recentThreats.map((threat) => (
              <div key={threat.id} className="flex items-center justify-between p-3 bg-dark-700 rounded-lg">
                <div>
                  <p className="font-medium">{threat.type}</p>
                  <p className="text-sm text-gray-400">{threat.source}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    threat.severity === 'high' ? 'bg-danger-900 text-danger-400' :
                    'bg-warning-900 text-warning-400'
                  }`}>
                    {threat.severity}
                  </span>
                  <span className="text-xs text-gray-400">{threat.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderUserManagement = () => (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyber-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button className="cyber-button flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="px-4 py-2 border border-cyber-500 text-cyber-500 hover:bg-cyber-500 hover:text-white rounded-lg transition-colors">
            Export
          </button>
        </div>
      </div>

      {/* User Table */}
      <div className="cyber-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4">User</th>
                <th className="text-left py-3 px-4">Email</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Last Active</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-800">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-gray-400">ID: {user.id}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{user.email}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.status === 'active' ? 'bg-success-900 text-success-400' :
                      user.status === 'banned' ? 'bg-danger-900 text-danger-400' :
                      'bg-warning-900 text-warning-400'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{user.lastActive}</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-cyber-500 hover:text-cyber-400">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-warning-500 hover:text-warning-400">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-danger-500 hover:text-danger-400">
                        <Ban className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderContentManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Content Management</h2>
        <button className="cyber-button flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Content</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="cyber-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Courses</h3>
            <span className="text-2xl font-bold text-cyber-500">{stats.totalCourses}</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Published</span>
              <span className="text-success-500">42</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Draft</span>
              <span className="text-warning-500">3</span>
            </div>
          </div>
        </div>

        <div className="cyber-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Lessons</h3>
            <span className="text-2xl font-bold text-success-500">{stats.totalLessons}</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Completed</span>
              <span className="text-success-500">298</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>In Progress</span>
              <span className="text-warning-500">22</span>
            </div>
          </div>
        </div>

        <div className="cyber-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Tools</h3>
            <span className="text-2xl font-bold text-danger-500">15</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Active</span>
              <span className="text-success-500">12</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Maintenance</span>
              <span className="text-warning-500">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderThreatMonitoring = () => (
    <div className="space-y-6">
      <div className="cyber-card">
        <h3 className="text-xl font-semibold mb-4">Live Threat Feed</h3>
        <div className="space-y-3">
          {recentThreats.map((threat) => (
            <div key={threat.id} className="flex items-center justify-between p-4 bg-dark-700 rounded-lg border-l-4 border-danger-500">
              <div>
                <p className="font-medium text-danger-400">{threat.type}</p>
                <p className="text-sm text-gray-400">Source: {threat.source}</p>
                <p className="text-xs text-gray-500">{threat.time}</p>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-danger-900 text-danger-400 rounded text-sm">
                  Block
                </button>
                <button className="px-3 py-1 bg-cyber-900 text-cyber-400 rounded text-sm">
                  Investigate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="cyber-card">
        <h3 className="text-xl font-semibold mb-4">Admin Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Site Name</label>
            <input
              type="text"
              defaultValue="CyberGuard"
              className="w-full px-3 py-2 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-cyber-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Admin Email</label>
            <input
              type="email"
              defaultValue="admin@cyberguard.com"
              className="w-full px-3 py-2 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-cyber-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Security Level</label>
            <select className="w-full px-3 py-2 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-cyber-500 focus:outline-none">
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <button className="cyber-button">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="glass-effect border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-cyber-500" />
              <span className="text-xl font-bold text-white">CyberGuard Admin</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Admin Panel</span>
              <button className="text-gray-300 hover:text-white transition-colors">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-dark-800 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-cyber-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-dark-700'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'users' && renderUserManagement()}
        {activeTab === 'content' && renderContentManagement()}
        {activeTab === 'threats' && renderThreatMonitoring()}
        {activeTab === 'settings' && renderSettings()}
      </div>
    </div>
  )
} 