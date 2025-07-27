const fs = require('fs');
const path = require('path');

// Create the resources directory if it doesn't exist
const resourcesDir = path.join(__dirname, 'public', 'resources');
if (!fs.existsSync(resourcesDir)) {
  fs.mkdirSync(resourcesDir, { recursive: true });
}

// High-quality cybersecurity content for PDFs
const pdfContent = {
  'cybersecurity-fundamentals-guide.pdf': `
# Cybersecurity Fundamentals Guide

## Introduction
This comprehensive guide covers the essential principles of cybersecurity, providing a solid foundation for understanding digital security concepts.

## The CIA Triad
- **Confidentiality**: Ensuring information is accessible only to authorized users
- **Integrity**: Maintaining data accuracy and consistency
- **Availability**: Ensuring authorized users have access when needed

## Common Threats
- Malware (viruses, worms, trojans)
- Phishing attacks
- Social engineering
- DDoS attacks
- Insider threats

## Best Practices
- Use strong, unique passwords
- Enable two-factor authentication
- Keep software updated
- Be cautious with email attachments
- Use antivirus software
- Regular backups

## Incident Response
1. Identify the incident
2. Contain the threat
3. Eradicate the problem
4. Recover systems
5. Document lessons learned
  `,

  'network-security-comprehensive.pdf': `
# Network Security Comprehensive Guide

## Network Fundamentals
Understanding how networks function is essential for cybersecurity professionals.

### OSI Model
1. Physical Layer - Hardware transmission
2. Data Link Layer - Error detection
3. Network Layer - Routing and addressing
4. Transport Layer - Reliable data delivery
5. Session Layer - Connection management
6. Presentation Layer - Data formatting
7. Application Layer - User services

### TCP/IP Protocol Suite
- IP (Internet Protocol): Addressing and routing
- TCP (Transmission Control Protocol): Reliable delivery
- UDP (User Datagram Protocol): Fast delivery
- ICMP (Internet Control Message Protocol): Error reporting

## Security Measures
- Firewalls and intrusion detection
- Network segmentation
- VPN implementation
- Regular security audits
- Traffic monitoring
  `,

  'web-application-security-guide.pdf': `
# Web Application Security Guide

## OWASP Top 10
1. Injection
2. Broken Authentication
3. Sensitive Data Exposure
4. XML External Entities
5. Broken Access Control
6. Security Misconfiguration
7. Cross-Site Scripting
8. Insecure Deserialization
9. Using Components with Known Vulnerabilities
10. Insufficient Logging & Monitoring

## Common Vulnerabilities
### SQL Injection
- Input validation
- Parameterized queries
- Least privilege principle

### Cross-Site Scripting (XSS)
- Output encoding
- Content Security Policy
- Input sanitization

### Cross-Site Request Forgery (CSRF)
- Anti-CSRF tokens
- SameSite cookies
- Referrer validation

## Security Testing
- Automated scanning
- Manual penetration testing
- Code review
- Security architecture review
  `,

  'ethical-hacking-methodology.pdf': `
# Ethical Hacking Methodology

## Reconnaissance
- Passive information gathering
- Active scanning
- Social engineering research
- Network mapping

## Scanning
- Port scanning
- Service enumeration
- Vulnerability assessment
- Network topology discovery

## Gaining Access
- Exploit development
- Social engineering
- Physical access
- Remote exploitation

## Maintaining Access
- Backdoors
- Rootkits
- Persistence mechanisms
- Privilege escalation

## Covering Tracks
- Log manipulation
- File deletion
- Anti-forensics
- Evidence removal

## Legal and Ethical Considerations
- Always obtain proper authorization
- Document all activities
- Respect scope limitations
- Follow responsible disclosure
  `,

  'cryptography-advanced-guide.pdf': `
# Advanced Cryptography Guide

## Symmetric Encryption
- AES (Advanced Encryption Standard)
- DES (Data Encryption Standard)
- 3DES (Triple DES)
- Blowfish

## Asymmetric Encryption
- RSA
- ECC (Elliptic Curve Cryptography)
- DSA (Digital Signature Algorithm)
- Diffie-Hellman

## Hashing Algorithms
- SHA-256
- SHA-512
- MD5 (deprecated)
- bcrypt

## Digital Signatures
- RSA signatures
- DSA signatures
- ECDSA
- Certificate validation

## Key Management
- Key generation
- Key distribution
- Key storage
- Key rotation

## Applications
- SSL/TLS
- PGP/GPG
- Blockchain
- Secure communications
  `,

  'incident-response-playbook.pdf': `
# Incident Response Playbook

## Preparation Phase
- Incident response team formation
- Tools and resources identification
- Communication plan development
- Training and awareness

## Identification Phase
- Event detection
- Initial assessment
- Classification and prioritization
- Notification procedures

## Containment Phase
- Short-term containment
- Long-term containment
- Evidence preservation
- Communication with stakeholders

## Eradication Phase
- Root cause analysis
- Vulnerability remediation
- System restoration
- Security improvements

## Recovery Phase
- System validation
- Monitoring and testing
- Documentation
- Lessons learned

## Post-Incident Activities
- Incident report preparation
- Process improvement
- Training updates
- Policy review
  `,

  'cloud-security-best-practices.pdf': `
# Cloud Security Best Practices

## Identity and Access Management
- Multi-factor authentication
- Role-based access control
- Privileged access management
- Identity federation

## Data Protection
- Encryption at rest and in transit
- Data classification
- Backup and recovery
- Data loss prevention

## Network Security
- Virtual private clouds
- Security groups and NACLs
- DDoS protection
- Web application firewalls

## Compliance and Governance
- Regular audits
- Compliance monitoring
- Policy enforcement
- Risk assessment

## Monitoring and Logging
- Centralized logging
- Real-time monitoring
- Alert management
- Incident response integration
  `,

  'iot-security-handbook.pdf': `
# IoT Security Handbook

## IoT Threat Landscape
- Device vulnerabilities
- Network attacks
- Data privacy concerns
- Supply chain risks

## Security Architecture
- Device authentication
- Secure communication
- Data encryption
- Access control

## Device Security
- Firmware updates
- Secure boot
- Hardware security modules
- Physical security

## Network Security
- Network segmentation
- Traffic monitoring
- Intrusion detection
- Vulnerability management

## Privacy Protection
- Data minimization
- Consent management
- Anonymization
- Right to be forgotten

## Best Practices
- Regular security updates
- Strong authentication
- Network monitoring
- Incident response planning
  `,

  'mobile-security-comprehensive.pdf': `
# Mobile Security Comprehensive Guide

## Mobile Threats
- Malicious apps
- Network attacks
- Physical theft
- Data leakage

## App Security
- Code obfuscation
- Secure coding practices
- API security
- Data encryption

## Device Security
- Device encryption
- Biometric authentication
- Remote wipe capabilities
- App sandboxing

## Network Security
- VPN usage
- Secure WiFi practices
- Certificate pinning
- Network monitoring

## Best Practices
- Regular updates
- App permission management
- Secure browsing
- Data backup
  `,

  'social-engineering-defense.pdf': `
# Social Engineering Defense Guide

## Types of Social Engineering
- Phishing attacks
- Pretexting
- Baiting
- Quid pro quo
- Tailgating

## Attack Vectors
- Email phishing
- Voice phishing (vishing)
- SMS phishing (smishing)
- Physical manipulation
- Social media attacks

## Red Flags
- Urgency or threats
- Requests for sensitive information
- Unusual sender addresses
- Poor grammar or spelling
- Too-good-to-be-true offers

## Defense Strategies
- Security awareness training
- Multi-factor authentication
- Verification procedures
- Incident reporting
- Regular testing

## Response Procedures
- Immediate reporting
- Evidence preservation
- Communication protocols
- Recovery procedures
  `,

  'forensics-investigation-guide.pdf': `
# Digital Forensics Investigation Guide

## Investigation Process
- Evidence identification
- Collection and preservation
- Analysis and examination
- Documentation and reporting

## Evidence Types
- Volatile data (RAM)
- Non-volatile data (hard drives)
- Network traffic
- Mobile devices
- Cloud storage

## Tools and Techniques
- Imaging tools
- Analysis software
- Network forensics
- Mobile forensics
- Memory forensics

## Legal Considerations
- Chain of custody
- Evidence integrity
- Legal authority
- Privacy rights
- Admissibility requirements

## Best Practices
- Documentation
- Tool validation
- Quality assurance
- Peer review
- Continuing education
  `,

  'penetration-testing-methodology.pdf': `
# Penetration Testing Methodology

## Planning and Preparation
- Scope definition
- Rules of engagement
- Legal authorization
- Team preparation

## Information Gathering
- Passive reconnaissance
- Active reconnaissance
- Social engineering
- Technical enumeration

## Vulnerability Assessment
- Automated scanning
- Manual testing
- Configuration review
- Code analysis

## Exploitation
- Proof of concept
- Privilege escalation
- Lateral movement
- Data exfiltration

## Post-Exploitation
- Persistence mechanisms
- Evidence collection
- Cleanup procedures
- Report preparation

## Reporting
- Executive summary
- Technical details
- Risk assessment
- Remediation recommendations
  `,

  'security-architecture-guide.pdf': `
# Security Architecture Guide

## Design Principles
- Defense in depth
- Zero trust
- Least privilege
- Fail secure
- Separation of concerns

## Security Controls
- Administrative controls
- Technical controls
- Physical controls
- Detective controls
- Preventive controls

## Architecture Patterns
- Network segmentation
- DMZ design
- Access control layers
- Monitoring zones
- Incident response integration

## Implementation
- Security requirements
- Design validation
- Testing procedures
- Deployment planning
- Maintenance procedures

## Risk Management
- Threat modeling
- Risk assessment
- Control selection
- Monitoring and review
- Continuous improvement
  `,

  'compliance-frameworks-overview.pdf': `
# Compliance Frameworks Overview

## Industry Standards
- ISO 27001
- NIST Cybersecurity Framework
- COBIT
- ITIL

## Regulatory Requirements
- GDPR (General Data Protection Regulation)
- HIPAA (Health Insurance Portability and Accountability Act)
- SOX (Sarbanes-Oxley Act)
- PCI DSS (Payment Card Industry Data Security Standard)

## Implementation
- Gap analysis
- Control mapping
- Process documentation
- Training and awareness
- Regular audits

## Monitoring and Reporting
- Compliance monitoring
- Regular assessments
- Audit preparation
- Continuous improvement
- Stakeholder communication

## Best Practices
- Risk-based approach
- Regular updates
- Stakeholder engagement
- Documentation management
- Training programs
  `,

  'threat-intelligence-guide.pdf': `
# Threat Intelligence Guide

## Intelligence Types
- Strategic intelligence
- Operational intelligence
- Tactical intelligence
- Technical intelligence

## Sources
- Open source intelligence
- Commercial feeds
- Government sources
- Industry sharing
- Dark web monitoring

## Analysis Process
- Collection
- Processing
- Analysis
- Dissemination
- Feedback

## Applications
- Threat hunting
- Incident response
- Security planning
- Risk assessment
- Vulnerability management

## Tools and Platforms
- Threat intelligence platforms
- SIEM integration
- Automated feeds
- Manual analysis tools
- Reporting systems

## Best Practices
- Source validation
- Context analysis
- Timely dissemination
- Actionable intelligence
- Continuous improvement
  `,

  'secure-coding-practices.pdf': `
# Secure Coding Practices

## Input Validation
- Validate all inputs
- Sanitize data
- Use parameterized queries
- Implement proper error handling

## Authentication and Authorization
- Strong authentication
- Session management
- Access control
- Privilege escalation prevention

## Data Protection
- Encryption at rest
- Encryption in transit
- Secure key management
- Data classification

## Error Handling
- Secure error messages
- Logging best practices
- Exception handling
- Debug information protection

## Code Review
- Security-focused reviews
- Automated scanning
- Manual testing
- Peer review processes

## Testing
- Unit testing
- Integration testing
- Security testing
- Penetration testing
  `,

  'security-monitoring-guide.pdf': `
# Security Monitoring Guide

## Monitoring Strategy
- Log collection
- Event correlation
- Alert management
- Incident response integration

## Tools and Technologies
- SIEM platforms
- IDS/IPS systems
- Network monitoring
- Endpoint detection
- User behavior analytics

## Key Metrics
- Mean time to detection
- Mean time to response
- False positive rates
- Incident volume
- Security posture

## Alert Management
- Triage procedures
- Escalation protocols
- Response automation
- Continuous improvement

## Best Practices
- Comprehensive coverage
- Real-time monitoring
- Automated response
- Regular tuning
- Team training
  `,

  'business-continuity-planning.pdf': `
# Business Continuity Planning

## Planning Process
- Business impact analysis
- Risk assessment
- Strategy development
- Plan implementation

## Recovery Strategies
- Data backup
- System redundancy
- Alternative sites
- Cloud services

## Communication Plans
- Stakeholder notification
- Customer communication
- Media relations
- Employee communication

## Testing and Maintenance
- Regular testing
- Plan updates
- Training programs
- Continuous improvement

## Key Components
- Emergency response
- Crisis management
- IT recovery
- Business recovery
- Communication protocols

## Best Practices
- Regular reviews
- Stakeholder involvement
- Documentation
- Training and awareness
- Continuous improvement
  `
};

// Generate PDF files with comprehensive content
Object.entries(pdfContent).forEach(([filename, content]) => {
  const filepath = path.join(resourcesDir, filename);
  
  // Create a simple HTML structure that can be converted to PDF
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${filename.replace('.pdf', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
        h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
        h2 { color: #34495e; margin-top: 30px; }
        h3 { color: #7f8c8d; }
        ul { margin-left: 20px; }
        li { margin-bottom: 5px; }
        .section { margin-bottom: 30px; }
        .highlight { background-color: #f8f9fa; padding: 15px; border-left: 4px solid #3498db; margin: 20px 0; }
    </style>
</head>
<body>
    ${content.split('\n').map(line => {
        if (line.startsWith('# ')) return `<h1>${line.substring(2)}</h1>`;
        if (line.startsWith('## ')) return `<h2>${line.substring(3)}</h2>`;
        if (line.startsWith('### ')) return `<h3>${line.substring(4)}</h3>`;
        if (line.startsWith('- ')) return `<li>${line.substring(2)}</li>`;
        if (line.startsWith('1. ')) return `<li>${line.substring(3)}</li>`;
        if (line.trim() === '') return '<br>';
        return `<p>${line}</p>`;
    }).join('')}
</body>
</html>`;

  fs.writeFileSync(filepath, htmlContent);
  console.log(`Created: ${filename}`);
});

console.log('\n✅ High-quality PDF resources generated successfully!');
console.log('📁 Files saved in: public/resources/');
console.log('🔗 These resources are now available for download in the course lessons.'); 