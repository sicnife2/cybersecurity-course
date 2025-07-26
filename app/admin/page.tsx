'use client'

import { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
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
  Upload,
  Save,
  X,
  Check,
  Play,
  Pause,
  Lock,
  Unlock
} from 'lucide-react'
import { cybersecurityCourse, getModuleById, getAllModules } from '@/data/courseStructure'

const allowedEmails = [
  'sicnife04@gmail.com',
  'fordc15521@gmail.com',
]

interface ModuleStatus {
  id: string
  title: string
  difficulty: string
  isPublished: boolean
  isActive: boolean
  lessonCount: number
  lastModified: string
}

export default function AdminPanel() {
  const { data: session, status } = useSession()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchTerm, setSearchTerm] = useState('')
  const [modules, setModules] = useState<ModuleStatus[]>([])
  const [editingModule, setEditingModule] = useState<string | null>(null)
  const [showAddModule, setShowAddModule] = useState(false)

  useEffect(() => {
    // Convert course data to admin format
    const courseModules = getAllModules()
    const moduleStatus: ModuleStatus[] = courseModules.map(module => ({
      id: module.id,
      title: module.title,
      difficulty: module.difficulty,
      isPublished: true, // All modules are published by default
      isActive: true,
      lessonCount: module.lessons.length,
      lastModified: new Date().toLocaleDateString()
    }))
    setModules(moduleStatus)
  }, [])

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center text-xl">Loading...</div>
  }

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Shield className="w-12 h-12 text-cyber-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Admin Login</h2>
        <p className="mb-6 text-gray-400">Sign in with Google to access the admin panel.</p>
        <button className="cyber-button" onClick={() => signIn('google')}>Sign in with Google</button>
      </div>
    )
  }

  if (!allowedEmails.includes(session.user?.email || '')) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Shield className="w-12 h-12 text-danger-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2 text-danger-400">Access Denied</h2>
        <p className="mb-6 text-gray-400">You do not have permission to access this page.</p>
        <button className="cyber-button" onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }

  // Real stats based on actual course data
  const stats = {
    totalModules: modules.length,
    publishedModules: modules.filter(m => m.isPublished).length,
    activeModules: modules.filter(m => m.isActive).length,
    totalLessons: modules.reduce((sum, m) => sum + m.lessonCount, 0),
    beginnerModules: modules.filter(m => m.difficulty === 'Beginner').length,
    intermediateModules: modules.filter(m => m.difficulty === 'Intermediate').length,
    advancedModules: modules.filter(m => m.difficulty === 'Advanced').length,
    expertModules: modules.filter(m => m.difficulty === 'Expert').length
  }

  const handleToggleModule = (moduleId: string, field: 'isPublished' | 'isActive') => {
    setModules(prev => prev.map(module => 
      module.id === moduleId 
        ? { ...module, [field]: !module[field] }
        : module
    ))
  }

  const handleEditModule = (moduleId: string) => {
    setEditingModule(moduleId)
  }

  const handleSaveModule = (moduleId: string) => {
    setEditingModule(null)
    // Here you would typically save to a database
  }

  const handleDeleteModule = (moduleId: string) => {
    if (confirm('Are you sure you want to delete this module?')) {
      setModules(prev => prev.filter(module => module.id !== moduleId))
    }
  }

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'modules', name: 'Module Management', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'settings', name: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ]

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="cyber-card"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Modules</p>
              <p className="text-3xl font-bold text-cyber-500">{stats.totalModules}</p>
            </div>
            <BookOpen className="w-8 h-8 text-cyber-500" />
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
              <p className="text-gray-400 text-sm">Published</p>
              <p className="text-3xl font-bold text-success-500">{stats.publishedModules}</p>
            </div>
            <Check className="w-8 h-8 text-success-500" />
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
              <p className="text-gray-400 text-sm">Total Lessons</p>
              <p className="text-3xl font-bold text-warning-500">{stats.totalLessons}</p>
            </div>
            <BookOpen className="w-8 h-8 text-warning-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="cyber-card"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Modules</p>
              <p className="text-3xl font-bold text-danger-500">{stats.activeModules}</p>
            </div>
            <Play className="w-8 h-8 text-danger-500" />
          </div>
        </motion.div>
      </div>

      {/* Difficulty Distribution */}
      <div className="cyber-card">
        <h3 className="text-xl font-semibold mb-4">Module Distribution by Difficulty</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">{stats.beginnerModules}</div>
            <div className="text-sm text-gray-400">Beginner</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-500">{stats.intermediateModules}</div>
            <div className="text-sm text-gray-400">Intermediate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500">{stats.advancedModules}</div>
            <div className="text-sm text-gray-400">Advanced</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500">{stats.expertModules}</div>
            <div className="text-sm text-gray-400">Expert</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="cyber-card">
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => setActiveTab('modules')}
            className="cyber-button flex items-center justify-center space-x-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Manage Modules</span>
          </button>
          <button className="cyber-button flex items-center justify-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>Export Data</span>
          </button>
          <button className="cyber-button flex items-center justify-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Site Settings</span>
          </button>
        </div>
      </div>
    </div>
  )

  const renderModuleManagement = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Module Management</h2>
        <button 
          onClick={() => setShowAddModule(true)}
          className="cyber-button flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Module</span>
        </button>
      </div>

      {/* Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search modules..."
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

      {/* Modules Table */}
      <div className="cyber-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4">Module</th>
                <th className="text-left py-3 px-4">Difficulty</th>
                <th className="text-left py-3 px-4">Lessons</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Last Modified</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {modules
                .filter(module => 
                  module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  module.difficulty.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((module) => (
                <tr key={module.id} className="border-b border-gray-800">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium">{module.title}</p>
                      <p className="text-sm text-gray-400">ID: {module.id}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      module.difficulty === 'Beginner' ? 'bg-green-900 text-green-400' :
                      module.difficulty === 'Intermediate' ? 'bg-yellow-900 text-yellow-400' :
                      module.difficulty === 'Advanced' ? 'bg-orange-900 text-orange-400' :
                      'bg-red-900 text-red-400'
                    }`}>
                      {module.difficulty}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{module.lessonCount}</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleToggleModule(module.id, 'isPublished')}
                        className={`px-2 py-1 rounded text-xs ${
                          module.isPublished 
                            ? 'bg-success-900 text-success-400' 
                            : 'bg-gray-700 text-gray-400'
                        }`}
                      >
                        {module.isPublished ? 'Published' : 'Draft'}
                      </button>
                      <button
                        onClick={() => handleToggleModule(module.id, 'isActive')}
                        className={`px-2 py-1 rounded text-xs ${
                          module.isActive 
                            ? 'bg-cyber-900 text-cyber-400' 
                            : 'bg-gray-700 text-gray-400'
                        }`}
                      >
                        {module.isActive ? 'Active' : 'Inactive'}
                      </button>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{module.lastModified}</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleEditModule(module.id)}
                        className="text-cyber-500 hover:text-cyber-400"
                        title="Edit Module"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteModule(module.id)}
                        className="text-danger-500 hover:text-danger-400"
                        title="Delete Module"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <a 
                        href={`/course?difficulty=${module.difficulty.toLowerCase()}`}
                        target="_blank"
                        className="text-success-500 hover:text-success-400"
                        title="View Module"
                      >
                        <Eye className="w-4 h-4" />
                      </a>
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

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="cyber-card">
        <h3 className="text-xl font-semibold mb-4">Site Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Site Name</label>
            <input
              type="text"
              defaultValue="CyberGuard - Free Cybersecurity Course"
              className="w-full px-3 py-2 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-cyber-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Site Description</label>
            <textarea
              defaultValue="Complete cybersecurity course from beginner to expert level - 100% FREE"
              rows={3}
              className="w-full px-3 py-2 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-cyber-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Admin Email</label>
            <input
              type="email"
              defaultValue={session.user?.email || ''}
              className="w-full px-3 py-2 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-cyber-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Course Status</label>
            <select className="w-full px-3 py-2 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-cyber-500 focus:outline-none">
              <option>Active - Open for Learning</option>
              <option>Maintenance Mode</option>
              <option>Development Mode</option>
            </select>
          </div>
          <button className="cyber-button flex items-center space-x-2">
            <Save className="w-4 h-4" />
            <span>Save Settings</span>
          </button>
        </div>
      </div>

      <div className="cyber-card">
        <h3 className="text-xl font-semibold mb-4">Access Control</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Allowed Admin Emails</label>
            <div className="space-y-2">
              {allowedEmails.map((email, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="email"
                    value={email}
                    readOnly
                    className="flex-1 px-3 py-2 bg-dark-700 border border-gray-600 rounded-lg text-white"
                  />
                  <button className="text-danger-500 hover:text-danger-400">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button className="cyber-button flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Admin Email</span>
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
              <span className="text-gray-300">Welcome, {session.user?.name}</span>
              <button 
                onClick={() => signOut()}
                className="text-gray-300 hover:text-white transition-colors"
              >
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
        {activeTab === 'modules' && renderModuleManagement()}
        {activeTab === 'settings' && renderSettings()}
      </div>
    </div>
  )
} 