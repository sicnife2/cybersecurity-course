export interface CourseModule {
  id: string
  title: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  duration: string
  lessons: CourseLesson[]
}

export interface CourseLesson {
  id: string
  title: string
  description: string
  duration: string
  topics: string[]
  exercises: string[]
  resources: string[]
}

export const cybersecurityCourse: CourseModule[] = [
  // BEGINNER LEVEL - FOUNDATIONS
  {
    id: 'cybersecurity-fundamentals',
    title: 'Cybersecurity Fundamentals',
    description: 'Master the basics of cybersecurity and digital safety',
    difficulty: 'Beginner',
    duration: '12 hours',
    lessons: [
      {
        id: 'intro-to-cybersecurity',
        title: 'Introduction to Cybersecurity',
        description: 'Understanding what cybersecurity is and why it matters',
        duration: '45 min',
        topics: ['CIA Triad', 'Threat landscape', 'Attack types', 'Security principles'],
        exercises: ['Cybersecurity quiz', 'Threat identification', 'Security assessment'],
        resources: ['NIST Framework', 'CISA Essentials', 'Security basics guide']
      },
      {
        id: 'digital-threats',
        title: 'Understanding Digital Threats',
        description: 'Learn about malware, phishing, and social engineering',
        duration: '60 min',
        topics: ['Malware types', 'Phishing techniques', 'Social engineering', 'Attack vectors'],
        exercises: ['Threat analysis lab', 'Phishing simulation', 'Social engineering scenarios'],
        resources: ['Malware analysis guide', 'Phishing red flags', 'Social engineering defense']
      },
      {
        id: 'password-security',
        title: 'Password Security & Authentication',
        description: 'Create and manage strong passwords and authentication methods',
        duration: '40 min',
        topics: ['Password creation', 'Password managers', '2FA/MFA', 'Biometric security'],
        exercises: ['Password strength test', '2FA setup lab', 'Password manager configuration'],
        resources: ['Password best practices', '2FA guide', 'Password manager comparison']
      },
      {
        id: 'email-security',
        title: 'Email Security & Phishing Defense',
        description: 'Protect yourself from email-based attacks and scams',
        duration: '50 min',
        topics: ['Email threats', 'Phishing detection', 'Email encryption', 'Safe email practices'],
        exercises: ['Phishing email analysis', 'Email security audit', 'Encryption setup'],
        resources: ['Phishing examples', 'Email security tools', 'Encryption guide']
      },
      {
        id: 'social-media-safety',
        title: 'Social Media Security',
        description: 'Protect your privacy and security on social platforms',
        duration: '35 min',
        topics: ['Privacy settings', 'Information sharing', 'Account security', 'Social engineering'],
        exercises: ['Privacy audit', 'Social media cleanup', 'Security settings configuration'],
        resources: ['Privacy guides', 'Social media security tips', 'Account protection']
      },
      {
        id: 'mobile-security',
        title: 'Mobile Device Security',
        description: 'Secure your smartphones and tablets',
        duration: '45 min',
        topics: ['Mobile threats', 'App security', 'Device encryption', 'Safe browsing'],
        exercises: ['Mobile security audit', 'App permission review', 'Encryption setup'],
        resources: ['Mobile security guide', 'App security checklist', 'Safe browsing tips']
      }
    ]
  },

  // INTERMEDIATE LEVEL - NETWORK & SYSTEM SECURITY
  {
    id: 'network-security',
    title: 'Network Security',
    description: 'Understand and secure network communications',
    difficulty: 'Intermediate',
    duration: '15 hours',
    lessons: [
      {
        id: 'network-fundamentals',
        title: 'Network Fundamentals',
        description: 'Understanding how networks work and basic protocols',
        duration: '60 min',
        topics: ['OSI Model', 'TCP/IP', 'Network protocols', 'Network architecture'],
        exercises: ['Network diagram creation', 'Protocol analysis', 'Network simulation'],
        resources: ['OSI Model guide', 'TCP/IP reference', 'Network protocols']
      },
      {
        id: 'wifi-security',
        title: 'WiFi Security',
        description: 'Secure your wireless networks and connections',
        duration: '50 min',
        topics: ['WiFi encryption', 'Rogue access points', 'WiFi attacks', 'Secure configuration'],
        exercises: ['WiFi security audit', 'Encryption setup', 'Attack simulation'],
        resources: ['WiFi security guide', 'Encryption standards', 'Configuration best practices']
      },
      {
        id: 'firewalls',
        title: 'Firewalls & Network Protection',
        description: 'Implement and configure firewalls for network security',
        duration: '70 min',
        topics: ['Firewall types', 'Rule configuration', 'Network segmentation', 'Intrusion detection'],
        exercises: ['Firewall configuration', 'Rule creation', 'Network monitoring'],
        resources: ['Firewall guide', 'Configuration examples', 'Best practices']
      },
      {
        id: 'vpn-security',
        title: 'VPNs & Secure Remote Access',
        description: 'Use VPNs for secure remote connections',
        duration: '55 min',
        topics: ['VPN protocols', 'VPN setup', 'Remote access security', 'Tunneling'],
        exercises: ['VPN configuration', 'Secure connection setup', 'Protocol comparison'],
        resources: ['VPN guide', 'Protocol comparison', 'Setup tutorials']
      },
      {
        id: 'network-monitoring',
        title: 'Network Monitoring & Detection',
        description: 'Monitor networks for suspicious activity',
        duration: '65 min',
        topics: ['Network monitoring tools', 'Traffic analysis', 'Anomaly detection', 'Log analysis'],
        exercises: ['Network monitoring setup', 'Traffic capture', 'Log analysis'],
        resources: ['Monitoring tools', 'Analysis techniques', 'Detection methods']
      }
    ]
  },

  // ADVANCED LEVEL - APPLICATION & CRYPTOGRAPHY
  {
    id: 'application-security',
    title: 'Application Security',
    description: 'Secure software applications and web services',
    difficulty: 'Advanced',
    duration: '20 hours',
    lessons: [
      {
        id: 'web-security',
        title: 'Web Application Security',
        description: 'Protect web applications from common attacks',
        duration: '80 min',
        topics: ['OWASP Top 10', 'SQL Injection', 'XSS', 'CSRF', 'Authentication'],
        exercises: ['Vulnerability assessment', 'Penetration testing', 'Code review'],
        resources: ['OWASP guide', 'Vulnerability database', 'Security testing tools']
      },
      {
        id: 'cryptography-basics',
        title: 'Cryptography Fundamentals',
        description: 'Understand encryption and cryptographic principles',
        duration: '90 min',
        topics: ['Symmetric encryption', 'Asymmetric encryption', 'Hashing', 'Digital signatures'],
        exercises: ['Encryption implementation', 'Hash analysis', 'Signature verification'],
        resources: ['Cryptography guide', 'Encryption algorithms', 'Implementation examples']
      },
      {
        id: 'secure-coding',
        title: 'Secure Coding Practices',
        description: 'Write secure code and avoid common vulnerabilities',
        duration: '75 min',
        topics: ['Input validation', 'Output encoding', 'Error handling', 'Secure design'],
        exercises: ['Code review', 'Vulnerability fixing', 'Secure coding practice'],
        resources: ['Secure coding guide', 'Best practices', 'Code examples']
      },
      {
        id: 'api-security',
        title: 'API Security',
        description: 'Secure application programming interfaces',
        duration: '70 min',
        topics: ['API authentication', 'Authorization', 'Rate limiting', 'Input validation'],
        exercises: ['API security audit', 'Authentication implementation', 'Security testing'],
        resources: ['API security guide', 'Authentication methods', 'Security standards']
      }
    ]
  },

  // EXPERT LEVEL - ETHICAL HACKING & ADVANCED TOPICS
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking & Penetration Testing',
    description: 'Learn offensive security techniques for defensive purposes',
    difficulty: 'Expert',
    duration: '25 hours',
    lessons: [
      {
        id: 'reconnaissance',
        title: 'Information Gathering & Reconnaissance',
        description: 'Collect information about targets using legal methods',
        duration: '85 min',
        topics: ['OSINT techniques', 'Network scanning', 'Service enumeration', 'Social engineering'],
        exercises: ['OSINT investigation', 'Network reconnaissance', 'Social engineering assessment'],
        resources: ['OSINT tools', 'Scanning techniques', 'Reconnaissance methods']
      },
      {
        id: 'vulnerability-assessment',
        title: 'Vulnerability Assessment',
        description: 'Identify and assess security vulnerabilities',
        duration: '90 min',
        topics: ['Vulnerability scanning', 'Assessment methodologies', 'Risk analysis', 'Reporting'],
        exercises: ['Vulnerability scan', 'Risk assessment', 'Report writing'],
        resources: ['Vulnerability databases', 'Assessment tools', 'Reporting templates']
      },
      {
        id: 'exploitation',
        title: 'Exploitation Techniques',
        description: 'Learn how vulnerabilities are exploited',
        duration: '100 min',
        topics: ['Exploit development', 'Metasploit framework', 'Custom exploits', 'Post-exploitation'],
        exercises: ['Exploit development', 'Metasploit usage', 'Post-exploitation techniques'],
        resources: ['Exploit development guide', 'Metasploit documentation', 'Exploitation techniques']
      },
      {
        id: 'web-exploitation',
        title: 'Web Application Exploitation',
        description: 'Exploit web application vulnerabilities',
        duration: '95 min',
        topics: ['SQL injection', 'XSS exploitation', 'CSRF attacks', 'Authentication bypass'],
        exercises: ['Web application testing', 'Vulnerability exploitation', 'Security assessment'],
        resources: ['Web exploitation guide', 'Testing tools', 'Vulnerability examples']
      },
      {
        id: 'wireless-exploitation',
        title: 'Wireless Network Exploitation',
        description: 'Test wireless network security',
        duration: '80 min',
        topics: ['WiFi attacks', 'Bluetooth security', 'RFID security', 'Wireless monitoring'],
        exercises: ['WiFi penetration testing', 'Bluetooth security assessment', 'RFID analysis'],
        resources: ['Wireless security guide', 'Attack tools', 'Security assessment methods']
      }
    ]
  },

  // SPECIALIZED TOPICS
  {
    id: 'incident-response',
    title: 'Incident Response & Forensics',
    description: 'Handle security incidents and conduct digital forensics',
    difficulty: 'Advanced',
    duration: '18 hours',
    lessons: [
      {
        id: 'incident-handling',
        title: 'Security Incident Handling',
        description: 'Respond to and manage security incidents',
        duration: '75 min',
        topics: ['Incident classification', 'Response procedures', 'Containment strategies', 'Recovery'],
        exercises: ['Incident simulation', 'Response planning', 'Recovery procedures'],
        resources: ['Incident response guide', 'Procedures template', 'Recovery checklist']
      },
      {
        id: 'digital-forensics',
        title: 'Digital Forensics',
        description: 'Investigate digital evidence and cybercrimes',
        duration: '90 min',
        topics: ['Forensic methodology', 'Evidence collection', 'Analysis techniques', 'Reporting'],
        exercises: ['Evidence collection', 'Forensic analysis', 'Report writing'],
        resources: ['Forensics guide', 'Analysis tools', 'Evidence handling procedures']
      },
      {
        id: 'malware-analysis',
        title: 'Malware Analysis',
        description: 'Analyze and understand malicious software',
        duration: '85 min',
        topics: ['Static analysis', 'Dynamic analysis', 'Behavioral analysis', 'Reverse engineering'],
        exercises: ['Malware analysis', 'Behavioral analysis', 'Reverse engineering'],
        resources: ['Malware analysis guide', 'Analysis tools', 'Reverse engineering techniques']
      }
    ]
  },

  {
    id: 'cloud-security',
    title: 'Cloud Security',
    description: 'Secure cloud environments and services',
    difficulty: 'Advanced',
    duration: '16 hours',
    lessons: [
      {
        id: 'cloud-fundamentals',
        title: 'Cloud Security Fundamentals',
        description: 'Understand cloud security challenges and solutions',
        duration: '60 min',
        topics: ['Cloud models', 'Shared responsibility', 'Cloud threats', 'Security controls'],
        exercises: ['Cloud security assessment', 'Configuration review', 'Security planning'],
        resources: ['Cloud security guide', 'Best practices', 'Security frameworks']
      },
      {
        id: 'aws-security',
        title: 'AWS Security',
        description: 'Secure Amazon Web Services environments',
        duration: '80 min',
        topics: ['IAM security', 'VPC configuration', 'Security groups', 'CloudTrail'],
        exercises: ['AWS security configuration', 'IAM setup', 'Security monitoring'],
        resources: ['AWS security guide', 'Configuration examples', 'Security tools']
      },
      {
        id: 'azure-security',
        title: 'Microsoft Azure Security',
        description: 'Secure Microsoft Azure cloud services',
        duration: '75 min',
        topics: ['Azure AD', 'Network security', 'Security center', 'Compliance'],
        exercises: ['Azure security setup', 'Security center configuration', 'Compliance assessment'],
        resources: ['Azure security guide', 'Security center docs', 'Compliance frameworks']
      }
    ]
  },

  {
    id: 'iot-security',
    title: 'IoT Security',
    description: 'Secure Internet of Things devices and networks',
    difficulty: 'Advanced',
    duration: '14 hours',
    lessons: [
      {
        id: 'iot-fundamentals',
        title: 'IoT Security Fundamentals',
        description: 'Understand IoT security challenges and threats',
        duration: '55 min',
        topics: ['IoT architecture', 'Security challenges', 'Threat landscape', 'Vulnerabilities'],
        exercises: ['IoT security assessment', 'Threat analysis', 'Security planning'],
        resources: ['IoT security guide', 'Threat reports', 'Security frameworks']
      },
      {
        id: 'iot-device-security',
        title: 'IoT Device Security',
        description: 'Secure individual IoT devices',
        duration: '70 min',
        topics: ['Device authentication', 'Firmware security', 'Communication security', 'Updates'],
        exercises: ['Device security audit', 'Firmware analysis', 'Security configuration'],
        resources: ['Device security guide', 'Firmware analysis tools', 'Configuration best practices']
      },
      {
        id: 'iot-network-security',
        title: 'IoT Network Security',
        description: 'Secure IoT networks and communications',
        duration: '65 min',
        topics: ['Network segmentation', 'Traffic monitoring', 'Protocol security', 'Access control'],
        exercises: ['Network security setup', 'Traffic analysis', 'Access control configuration'],
        resources: ['Network security guide', 'Monitoring tools', 'Protocol security']
      }
    ]
  }
]

export const getModuleById = (id: string) => {
  return cybersecurityCourse.find(module => module.id === id)
}

export const getModulesByDifficulty = (difficulty: string) => {
  return cybersecurityCourse.filter(module => module.difficulty === difficulty)
}

export const getAllModules = () => {
  return cybersecurityCourse
} 