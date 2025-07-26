import { useState } from 'react'

function getStrength(password: string) {
  let score = 0
  if (password.length >= 8) score++
  if (/[A-Z]/.test(password)) score++
  if (/[a-z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++
  if (password.length >= 12) score++
  return score
}

function getStrengthLabel(score: number) {
  switch (score) {
    case 0:
    case 1:
      return { label: 'Very Weak', color: 'bg-danger-500' }
    case 2:
      return { label: 'Weak', color: 'bg-warning-500' }
    case 3:
      return { label: 'Moderate', color: 'bg-yellow-500' }
    case 4:
      return { label: 'Strong', color: 'bg-success-500' }
    case 5:
    case 6:
      return { label: 'Very Strong', color: 'bg-cyber-500' }
    default:
      return { label: 'Unknown', color: 'bg-gray-500' }
  }
}

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState('')
  const score = getStrength(password)
  const { label, color } = getStrengthLabel(score)

  return (
    <div className="cyber-card max-w-xl mx-auto">
      <h3 className="text-xl font-bold mb-4">Password Strength Checker</h3>
      <input
        type="password"
        className="w-full p-2 rounded bg-dark-700 border border-gray-600 text-white mb-4"
        placeholder="Enter your password..."
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {password && (
        <div className="mb-2">
          <div className="h-3 rounded-full mb-2" style={{ background: '#222' }}>
            <div
              className={`h-3 rounded-full transition-all duration-300 ${color}`}
              style={{ width: `${(score / 6) * 100}%` }}
            ></div>
          </div>
          <div className="text-sm font-semibold" style={{ color: 'white' }}>{label}</div>
        </div>
      )}
      <ul className="text-xs text-gray-400 mt-4 list-disc pl-5">
        <li>Use at least 8 characters</li>
        <li>Include uppercase and lowercase letters</li>
        <li>Include numbers and special characters</li>
        <li>Avoid common words or patterns</li>
        <li>Longer passwords are stronger</li>
      </ul>
    </div>
  )
} 