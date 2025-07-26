import { useState } from 'react'
import { Copy } from 'lucide-react'

export default function Base64Tool() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState<'encode' | 'decode'>('encode')
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const handleConvert = () => {
    setError('')
    try {
      if (mode === 'encode') {
        setOutput(btoa(input))
      } else {
        setOutput(atob(input))
      }
    } catch (e) {
      setError('Invalid input for decoding!')
      setOutput('')
    }
    setCopied(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="cyber-card max-w-xl mx-auto">
      <h3 className="text-xl font-bold mb-4">Base64 Encoder / Decoder</h3>
      <div className="mb-4">
        <textarea
          className="w-full p-2 rounded bg-dark-700 border border-gray-600 text-white"
          rows={3}
          placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter Base64 to decode...'}
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </div>
      <div className="mb-4 flex gap-2">
        <select
          className="p-2 rounded bg-dark-700 border border-gray-600 text-white"
          value={mode}
          onChange={e => setMode(e.target.value as any)}
        >
          <option value="encode">Encode</option>
          <option value="decode">Decode</option>
        </select>
        <button className="cyber-button" onClick={handleConvert} disabled={!input}>
          {mode === 'encode' ? 'Encode' : 'Decode'}
        </button>
      </div>
      {error && <div className="text-danger-500 mb-2">{error}</div>}
      {output && (
        <div className="bg-dark-800 p-3 rounded flex items-center justify-between">
          <span className="break-all text-cyber-400">{output}</span>
          <button onClick={handleCopy} className="ml-2 text-cyber-500 hover:text-cyber-300">
            <Copy className="w-5 h-5" />
            {copied && <span className="ml-1 text-xs">Copied!</span>}
          </button>
        </div>
      )}
    </div>
  )
} 