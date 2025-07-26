import { useState } from 'react'
import { Copy } from 'lucide-react'

function hashString(str: string, algorithm: 'MD5' | 'SHA-1' | 'SHA-256'): Promise<string> {
  if (algorithm === 'MD5') {
    // Use a simple JS implementation for MD5 (since SubtleCrypto does not support MD5)
    // For demo, use a placeholder (in real app, use a library like crypto-js)
    return Promise.resolve('MD5 not supported in browser, use SHA-1 or SHA-256')
  }
  const encoder = new TextEncoder()
  const data = encoder.encode(str)
  let algo = algorithm.replace('-', '')
  return window.crypto.subtle.digest(algo, data).then(buf => {
    return Array.from(new Uint8Array(buf)).map(x => x.toString(16).padStart(2, '0')).join('')
  })
}

export default function HashGenerator() {
  const [input, setInput] = useState('')
  const [algorithm, setAlgorithm] = useState<'MD5' | 'SHA-1' | 'SHA-256'>('SHA-256')
  const [hash, setHash] = useState('')
  const [copied, setCopied] = useState(false)

  const handleGenerate = async () => {
    const result = await hashString(input, algorithm)
    setHash(result)
    setCopied(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(hash)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="cyber-card max-w-xl mx-auto">
      <h3 className="text-xl font-bold mb-4">Hash Generator</h3>
      <div className="mb-4">
        <textarea
          className="w-full p-2 rounded bg-dark-700 border border-gray-600 text-white"
          rows={3}
          placeholder="Enter text to hash..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </div>
      <div className="mb-4 flex gap-2">
        <select
          className="p-2 rounded bg-dark-700 border border-gray-600 text-white"
          value={algorithm}
          onChange={e => setAlgorithm(e.target.value as any)}
        >
          <option value="MD5">MD5</option>
          <option value="SHA-1">SHA-1</option>
          <option value="SHA-256">SHA-256</option>
        </select>
        <button className="cyber-button" onClick={handleGenerate} disabled={!input}>
          Generate Hash
        </button>
      </div>
      {hash && (
        <div className="bg-dark-800 p-3 rounded flex items-center justify-between">
          <span className="break-all text-cyber-400">{hash}</span>
          <button onClick={handleCopy} className="ml-2 text-cyber-500 hover:text-cyber-300">
            <Copy className="w-5 h-5" />
            {copied && <span className="ml-1 text-xs">Copied!</span>}
          </button>
        </div>
      )}
    </div>
  )
} 