const fs = require('fs');
const path = require('path');

// Comprehensive lesson content for each cybersecurity topic
const comprehensiveLessonContent = {
  'social-engineering': `
          <h2>Social Engineering: The Human Element of Cybersecurity</h2>
          <p>Social engineering exploits human psychology rather than technical vulnerabilities. It's often the most effective attack vector because it targets the weakest link in any security system: humans. This lesson covers the psychology, techniques, and defenses against social engineering attacks.</p>
          
          <h3>Understanding Social Engineering Psychology</h3>
          <p>Social engineers exploit fundamental human traits and cognitive biases:</p>
          <ul>
            <li><strong>Authority:</strong> People tend to comply with authority figures</li>
            <li><strong>Reciprocity:</strong> The desire to return favors</li>
            <li><strong>Social Proof:</strong> Following what others do</li>
            <li><strong>Scarcity:</strong> Fear of missing out on limited opportunities</li>
            <li><strong>Urgency:</strong> Pressure to act quickly without thinking</li>
            <li><strong>Trust:</strong> Exploiting established relationships</li>
          </ul>
          
          <h3>Common Social Engineering Techniques</h3>
          <div class="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
            <h4 class="text-red-400 font-semibold mb-2">Pretexting</h4>
            <p>Creating fabricated scenarios to engage victims and steal information:</p>
            <ul>
              <li>Impersonating IT support, bank employees, or government officials</li>
              <li>Creating fake emergencies requiring immediate action</li>
              <li>Building rapport through seemingly innocent conversations</li>
              <li>Researching targets through social media and public records</li>
            </ul>
          </div>
          
          <div class="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4 mb-4">
            <h4 class="text-orange-400 font-semibold mb-2">Baiting</h4>
            <p>Offering something enticing to spark curiosity and compromise security:</p>
            <ul>
              <li>USB drives left in parking lots or common areas</li>
              <li>Free software downloads containing malware</li>
              <li>Fake prize notifications and contests</li>
              <li>Malicious QR codes promising rewards</li>
            </ul>
          </div>
          
          <div class="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mb-4">
            <h4 class="text-yellow-400 font-semibold mb-2">Quid Pro Quo</h4>
            <p>Offering services in exchange for information or access:</p>
            <ul>
              <li>Fake tech support offering to fix computer problems</li>
              <li>Surveys offering rewards for personal information</li>
              <li>Free security scans that install malware</li>
              <li>Help desk impersonation for password resets</li>
            </ul>
          </div>
          
          <h3>Advanced Social Engineering Attacks</h3>
          <ul>
            <li><strong>Spear Phishing:</strong> Targeted phishing using personal information</li>
            <li><strong>Whaling:</strong> Targeting high-value individuals like executives</li>
            <li><strong>Business Email Compromise (BEC):</strong> Impersonating business partners</li>
            <li><strong>Watering Hole Attacks:</strong> Compromising websites frequented by targets</li>
            <li><strong>Tailgating/Piggybacking:</strong> Following authorized personnel into secure areas</li>
          </ul>
          
          <h3>Defense Strategies</h3>
          <div class="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-4">
            <h4 class="text-green-400 font-semibold mb-2">Personal Defense</h4>
            <ul>
              <li>Verify identities through independent channels</li>
              <li>Be skeptical of unsolicited contact</li>
              <li>Never provide sensitive information over the phone or email</li>
              <li>Use official websites and phone numbers</li>
              <li>Trust your instincts if something feels wrong</li>
            </ul>
          </div>
          
          <div class="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-4">
            <h4 class="text-blue-400 font-semibold mb-2">Organizational Defense</h4>
            <ul>
              <li>Regular security awareness training</li>
              <li>Simulated phishing exercises</li>
              <li>Clear reporting procedures for suspicious activities</li>
              <li>Verification protocols for sensitive requests</li>
              <li>Physical security measures and access controls</li>
            </ul>
          </div>
          
          <h3>Real-World Case Studies</h3>
          <p><strong>Case 1: The CEO Fraud</strong> - Attackers researched a company's hierarchy and impersonated the CEO to request urgent wire transfers from the CFO.</p>
          <p><strong>Case 2: The USB Drop</strong> - Malicious USB drives labeled "Employee Salary Information" were left in a company parking lot, leading to network compromise when curious employees plugged them in.</p>
          <p><strong>Case 3: The Fake IT Support</strong> - Attackers called employees claiming to be IT support, requesting passwords for "system maintenance," gaining access to multiple accounts.</p>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Key Takeaway</h4>
            <p>Social engineering attacks succeed because they exploit human nature, not technical vulnerabilities. The best defense is awareness, skepticism, and verification. Always remember: when in doubt, verify through independent means.</p>
          </div>
        `,

  'network-security-fundamentals': `
          <h2>Network Security Fundamentals</h2>
          <p>Network security forms the backbone of cybersecurity, protecting data as it travels between systems and defending network infrastructure from attacks. This comprehensive lesson covers essential network security concepts, technologies, and best practices.</p>
          
          <h3>Network Security Architecture</h3>
          <p>A robust network security architecture implements multiple layers of defense:</p>
          
          <div class="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-4">
            <h4 class="text-blue-400 font-semibold mb-2">Perimeter Security</h4>
            <ul>
              <li><strong>Firewalls:</strong> Control traffic flow based on predefined rules</li>
              <li><strong>Intrusion Detection Systems (IDS):</strong> Monitor for malicious activities</li>
              <li><strong>Intrusion Prevention Systems (IPS):</strong> Actively block detected threats</li>
              <li><strong>Web Application Firewalls (WAF):</strong> Protect web applications</li>
              <li><strong>DDoS Protection:</strong> Mitigate distributed denial of service attacks</li>
            </ul>
          </div>
          
          <div class="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-4">
            <h4 class="text-green-400 font-semibold mb-2">Internal Network Security</h4>
            <ul>
              <li><strong>Network Segmentation:</strong> Divide networks into security zones</li>
              <li><strong>VLANs:</strong> Virtual LANs for logical network separation</li>
              <li><strong>Network Access Control (NAC):</strong> Control device access to networks</li>
              <li><strong>Zero Trust Architecture:</strong> Never trust, always verify approach</li>
              <li><strong>Micro-segmentation:</strong> Granular network isolation</li>
            </ul>
          </div>
          
          <h3>Network Protocols and Security</h3>
          <p>Understanding protocol security is crucial for network protection:</p>
          
          <h4>Layer 2 Security (Data Link Layer)</h4>
          <ul>
            <li><strong>MAC Address Filtering:</strong> Control access based on hardware addresses</li>
            <li><strong>Port Security:</strong> Limit devices per switch port</li>
            <li><strong>VLAN Security:</strong> Proper VLAN configuration and management</li>
            <li><strong>STP Security:</strong> Spanning Tree Protocol attack prevention</li>
          </ul>
          
          <h4>Layer 3 Security (Network Layer)</h4>
          <ul>
            <li><strong>IP Security (IPSec):</strong> Encrypt and authenticate IP packets</li>
            <li><strong>Routing Security:</strong> Secure routing protocols (OSPF, BGP)</li>
            <li><strong>Access Control Lists (ACLs):</strong> Filter traffic based on IP addresses</li>
            <li><strong>Network Address Translation (NAT):</strong> Hide internal network structure</li>
          </ul>
          
          <h4>Layer 4 Security (Transport Layer)</h4>
          <ul>
            <li><strong>TCP Security:</strong> Prevent TCP hijacking and SYN flood attacks</li>
            <li><strong>UDP Security:</strong> Protect against UDP flood attacks</li>
            <li><strong>Port Filtering:</strong> Block unnecessary ports and services</li>
            <li><strong>Stateful Inspection:</strong> Track connection states</li>
          </ul>
          
          <h3>Wireless Network Security</h3>
          <div class="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 mb-4">
            <h4 class="text-purple-400 font-semibold mb-2">Wi-Fi Security Protocols</h4>
            <ul>
              <li><strong>WPA3:</strong> Latest and most secure Wi-Fi security protocol</li>
              <li><strong>WPA2:</strong> Still widely used, secure when properly configured</li>
              <li><strong>WEP:</strong> Deprecated and insecure, should never be used</li>
              <li><strong>Enterprise Authentication:</strong> 802.1X with RADIUS</li>
            </ul>
          </div>
          
          <h4>Wireless Security Best Practices</h4>
          <ul>
            <li>Use strong, unique passwords for Wi-Fi networks</li>
            <li>Disable WPS (Wi-Fi Protected Setup)</li>
            <li>Hide SSID when appropriate</li>
            <li>Regularly update router firmware</li>
            <li>Use guest networks for visitors</li>
            <li>Monitor for rogue access points</li>
          </ul>
          
          <h3>Network Monitoring and Analysis</h3>
          <p>Continuous monitoring is essential for network security:</p>
          
          <h4>Traffic Analysis</h4>
          <ul>
            <li><strong>Flow Analysis:</strong> Monitor network traffic patterns</li>
            <li><strong>Deep Packet Inspection (DPI):</strong> Analyze packet contents</li>
            <li><strong>Behavioral Analysis:</strong> Detect anomalous network behavior</li>
            <li><strong>Bandwidth Monitoring:</strong> Track network utilization</li>
          </ul>
          
          <h4>Security Information and Event Management (SIEM)</h4>
          <ul>
            <li>Centralized log collection and analysis</li>
            <li>Real-time security event correlation</li>
            <li>Automated threat detection and response</li>
            <li>Compliance reporting and forensics</li>
          </ul>
          
          <h3>Common Network Attacks</h3>
          <div class="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
            <h4 class="text-red-400 font-semibold mb-2">Attack Types</h4>
            <ul>
              <li><strong>Man-in-the-Middle (MITM):</strong> Intercepting communications</li>
              <li><strong>ARP Spoofing:</strong> Poisoning ARP tables</li>
              <li><strong>DNS Poisoning:</strong> Corrupting DNS responses</li>
              <li><strong>Session Hijacking:</strong> Stealing session tokens</li>
              <li><strong>Packet Sniffing:</strong> Capturing network traffic</li>
              <li><strong>Port Scanning:</strong> Discovering open ports and services</li>
            </ul>
          </div>
          
          <h3>VPN and Remote Access Security</h3>
          <p>Secure remote access is critical in modern networks:</p>
          <ul>
            <li><strong>IPSec VPNs:</strong> Site-to-site and remote access VPNs</li>
            <li><strong>SSL/TLS VPNs:</strong> Web-based VPN access</li>
            <li><strong>WireGuard:</strong> Modern, lightweight VPN protocol</li>
            <li><strong>Multi-Factor Authentication:</strong> Additional security for VPN access</li>
            <li><strong>Split Tunneling:</strong> Selective traffic routing</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Network Security Best Practices</h4>
            <p>Implement defense in depth, regularly update and patch network devices, monitor traffic continuously, use strong authentication, segment networks appropriately, and maintain an incident response plan. Network security is an ongoing process, not a one-time setup.</p>
          </div>
        `,

  'encryption-cryptography': `
          <h2>Encryption and Cryptography</h2>
          <p>Cryptography is the foundation of modern cybersecurity, protecting data confidentiality, integrity, and authenticity. This comprehensive lesson covers cryptographic principles, algorithms, implementations, and best practices for securing information.</p>
          
          <h3>Cryptographic Fundamentals</h3>
          <p>Understanding the core principles of cryptography:</p>
          
          <div class="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-4">
            <h4 class="text-blue-400 font-semibold mb-2">Core Security Goals</h4>
            <ul>
              <li><strong>Confidentiality:</strong> Ensuring data is only readable by authorized parties</li>
              <li><strong>Integrity:</strong> Detecting unauthorized changes to data</li>
              <li><strong>Authentication:</strong> Verifying the identity of communicating parties</li>
              <li><strong>Non-repudiation:</strong> Preventing denial of actions or communications</li>
            </ul>
          </div>
          
          <h3>Symmetric Encryption</h3>
          <p>Symmetric encryption uses the same key for both encryption and decryption:</p>
          
          <h4>Block Ciphers</h4>
          <ul>
            <li><strong>AES (Advanced Encryption Standard):</strong> Current standard, 128/192/256-bit keys</li>
            <li><strong>DES (Data Encryption Standard):</strong> Legacy, 56-bit key (insecure)</li>
            <li><strong>3DES (Triple DES):</strong> Enhanced DES, still used in legacy systems</li>
            <li><strong>Blowfish/Twofish:</strong> Alternative block ciphers</li>
          </ul>
          
          <h4>Stream Ciphers</h4>
          <ul>
            <li><strong>ChaCha20:</strong> Modern stream cipher, used in TLS 1.3</li>
            <li><strong>RC4:</strong> Legacy stream cipher (deprecated due to vulnerabilities)</li>
            <li><strong>Salsa20:</strong> High-speed stream cipher</li>
          </ul>
          
          <h4>Block Cipher Modes of Operation</h4>
          <div class="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-4">
            <ul>
              <li><strong>ECB (Electronic Codebook):</strong> Simple but insecure for most uses</li>
              <li><strong>CBC (Cipher Block Chaining):</strong> Each block depends on previous block</li>
              <li><strong>CTR (Counter Mode):</strong> Converts block cipher to stream cipher</li>
              <li><strong>GCM (Galois/Counter Mode):</strong> Provides both encryption and authentication</li>
              <li><strong>CCM (Counter with CBC-MAC):</strong> Alternative authenticated encryption</li>
            </ul>
          </div>
          
          <h3>Asymmetric Encryption (Public Key Cryptography)</h3>
          <p>Asymmetric encryption uses different keys for encryption and decryption:</p>
          
          <h4>RSA (Rivest-Shamir-Adleman)</h4>
          <ul>
            <li>Based on the difficulty of factoring large integers</li>
            <li>Key sizes: 2048-bit minimum, 4096-bit recommended</li>
            <li>Used for key exchange, digital signatures, and encryption</li>
            <li>Slower than symmetric encryption, used for small data</li>
          </ul>
          
          <h4>Elliptic Curve Cryptography (ECC)</h4>
          <ul>
            <li>Based on the discrete logarithm problem over elliptic curves</li>
            <li>Smaller key sizes with equivalent security to RSA</li>
            <li>More efficient for mobile and IoT devices</li>
            <li>Common curves: P-256, P-384, P-521, Curve25519</li>
          </ul>
          
          <h4>Diffie-Hellman Key Exchange</h4>
          <ul>
            <li>Allows secure key agreement over insecure channels</li>
            <li>Forms the basis for many key exchange protocols</li>
            <li>Vulnerable to man-in-the-middle attacks without authentication</li>
            <li>Enhanced versions: ECDH, DHE, ECDHE</li>
          </ul>
          
          <h3>Hash Functions and Message Authentication</h3>
          <div class="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 mb-4">
            <h4 class="text-purple-400 font-semibold mb-2">Cryptographic Hash Functions</h4>
            <ul>
              <li><strong>SHA-256/SHA-3:</strong> Secure Hash Algorithm, 256-bit output</li>
              <li><strong>SHA-1:</strong> Legacy, vulnerable to collision attacks</li>
              <li><strong>MD5:</strong> Completely broken, should never be used for security</li>
              <li><strong>BLAKE2:</strong> High-speed alternative to SHA-2</li>
            </ul>
          </div>
          
          <h4>Message Authentication Codes (MAC)</h4>
          <ul>
            <li><strong>HMAC:</strong> Hash-based MAC using cryptographic hash functions</li>
            <li><strong>CMAC:</strong> Cipher-based MAC using block ciphers</li>
            <li><strong>Poly1305:</strong> High-speed MAC often used with ChaCha20</li>
          </ul>
          
          <h3>Digital Signatures</h3>
          <p>Digital signatures provide authentication, integrity, and non-repudiation:</p>
          <ul>
            <li><strong>RSA Signatures:</strong> PKCS#1, PSS padding schemes</li>
            <li><strong>ECDSA:</strong> Elliptic Curve Digital Signature Algorithm</li>
            <li><strong>EdDSA:</strong> Edwards-curve Digital Signature Algorithm</li>
            <li><strong>DSA:</strong> Digital Signature Algorithm (legacy)</li>
          </ul>
          
          <h3>Key Management</h3>
          <div class="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4 mb-4">
            <h4 class="text-orange-400 font-semibold mb-2">Key Lifecycle Management</h4>
            <ul>
              <li><strong>Key Generation:</strong> Use cryptographically secure random number generators</li>
              <li><strong>Key Distribution:</strong> Secure methods for sharing keys</li>
              <li><strong>Key Storage:</strong> Hardware Security Modules (HSMs), secure enclaves</li>
              <li><strong>Key Rotation:</strong> Regular key updates and replacement</li>
              <li><strong>Key Revocation:</strong> Invalidating compromised keys</li>
              <li><strong>Key Destruction:</strong> Secure deletion of expired keys</li>
            </ul>
          </div>
          
          <h3>Practical Cryptography Applications</h3>
          
          <h4>Transport Layer Security (TLS)</h4>
          <ul>
            <li>Secures web traffic (HTTPS), email, and other protocols</li>
            <li>Uses hybrid cryptography: asymmetric for key exchange, symmetric for data</li>
            <li>TLS 1.3 improvements: reduced handshake, forward secrecy</li>
            <li>Certificate validation and Public Key Infrastructure (PKI)</li>
          </ul>
          
          <h4>File and Disk Encryption</h4>
          <ul>
            <li><strong>Full Disk Encryption:</strong> BitLocker, FileVault, LUKS</li>
            <li><strong>File-level Encryption:</strong> GPG, AxCrypt, 7-Zip</li>
            <li><strong>Database Encryption:</strong> Transparent Data Encryption (TDE)</li>
            <li><strong>Cloud Storage Encryption:</strong> Client-side encryption</li>
          </ul>
          
          <h4>Email Security</h4>
          <ul>
            <li><strong>S/MIME:</strong> Secure/Multipurpose Internet Mail Extensions</li>
            <li><strong>PGP/GPG:</strong> Pretty Good Privacy for email encryption</li>
            <li><strong>ProtonMail/Tutanota:</strong> End-to-end encrypted email services</li>
          </ul>
          
          <h3>Cryptographic Attacks and Vulnerabilities</h3>
          <div class="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
            <h4 class="text-red-400 font-semibold mb-2">Common Attack Types</h4>
            <ul>
              <li><strong>Brute Force:</strong> Trying all possible keys</li>
              <li><strong>Dictionary Attacks:</strong> Using common passwords/keys</li>
              <li><strong>Rainbow Tables:</strong> Precomputed hash lookups</li>
              <li><strong>Side-Channel Attacks:</strong> Timing, power analysis</li>
              <li><strong>Padding Oracle Attacks:</strong> Exploiting padding validation</li>
              <li><strong>Collision Attacks:</strong> Finding hash collisions</li>
            </ul>
          </div>
          
          <h3>Quantum Cryptography and Post-Quantum Cryptography</h3>
          <p>Preparing for the quantum computing era:</p>
          <ul>
            <li><strong>Quantum Key Distribution (QKD):</strong> Theoretically unbreakable key exchange</li>
            <li><strong>Post-Quantum Algorithms:</strong> Lattice-based, hash-based, code-based cryptography</li>
            <li><strong>NIST Post-Quantum Standardization:</strong> Ongoing standardization process</li>
            <li><strong>Crypto-Agility:</strong> Designing systems for easy algorithm updates</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Cryptography Best Practices</h4>
            <p>Never implement your own cryptography. Use well-established libraries and algorithms. Keep keys secure and rotate them regularly. Use authenticated encryption when possible. Stay updated on cryptographic vulnerabilities and migrate away from deprecated algorithms promptly.</p>
          </div>
        `
};

// Read the current courseStructure.ts file
const filePath = path.join(__dirname, 'data', 'courseStructure.ts');
let content = fs.readFileSync(filePath, 'utf8');

console.log('Starting comprehensive course content update...');

// Replace specific lesson content with comprehensive versions
Object.keys(comprehensiveLessonContent).forEach(lessonId => {
  const lessonContent = comprehensiveLessonContent[lessonId];
  
  // Create a more flexible pattern to match lesson content
  const lessonPattern = new RegExp(`(id: '${lessonId}'[\\s\\S]*?content: \`)([\\s\\S]*?)(\`[\\s\\S]*?(?=},|$))`, 'g');
  
  const match = content.match(lessonPattern);
  if (match) {
    content = content.replace(lessonPattern, `$1${lessonContent}$3`);
    console.log(`✅ Updated comprehensive content for lesson: ${lessonId}`);
  } else {
    console.log(`⚠️  Could not find lesson: ${lessonId}`);
  }
});

// Write the updated content back to the file
fs.writeFileSync(filePath, content, 'utf8');
console.log('🎉 Successfully created comprehensive course content for all lessons!');
