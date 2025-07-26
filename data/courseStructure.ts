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
  content: string
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
        resources: ['NIST Framework', 'CISA Essentials', 'Security basics guide'],
        content: `
          <h2>What is Cybersecurity?</h2>
          <p>Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.</p>
          
          <h3>The CIA Triad</h3>
          <p>The CIA Triad is a fundamental concept in cybersecurity that represents three core principles:</p>
          <ul>
            <li><strong>Confidentiality:</strong> Ensuring that information is accessible only to those authorized to have access</li>
            <li><strong>Integrity:</strong> Maintaining and assuring the accuracy and completeness of data</li>
            <li><strong>Availability:</strong> Ensuring that authorized users have access to information when needed</li>
          </ul>
          
          <h3>Current Threat Landscape</h3>
          <p>Today's cybersecurity threats are more sophisticated than ever. Common threats include:</p>
          <ul>
            <li>Malware (viruses, worms, trojans)</li>
            <li>Phishing attacks</li>
            <li>Ransomware</li>
            <li>Social engineering</li>
            <li>DDoS attacks</li>
            <li>Insider threats</li>
          </ul>
          
          <h3>Why Cybersecurity Matters</h3>
          <p>In our interconnected world, cybersecurity is essential for:</p>
          <ul>
            <li>Protecting personal information</li>
            <li>Safeguarding business data</li>
            <li>Maintaining national security</li>
            <li>Ensuring privacy</li>
            <li>Preventing financial losses</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Key Takeaway</h4>
            <p>Cybersecurity is not just about technology—it's about protecting people, processes, and information in an increasingly digital world.</p>
          </div>
        `
      },
      {
        id: 'digital-threats',
        title: 'Understanding Digital Threats',
        description: 'Learn about malware, phishing, and social engineering',
        duration: '60 min',
        topics: ['Malware types', 'Phishing techniques', 'Social engineering', 'Attack vectors'],
        exercises: ['Threat analysis lab', 'Phishing simulation', 'Social engineering scenarios'],
        resources: ['Malware analysis guide', 'Phishing red flags', 'Social engineering defense'],
        content: `
          <h2>Types of Digital Threats</h2>
          <p>Digital threats come in many forms, each with unique characteristics and attack methods. Understanding these threats is the first step in defending against them.</p>
          
          <h3>Malware</h3>
          <p>Malware (malicious software) is any software intentionally designed to cause damage to a computer, server, client, or computer network.</p>
          
          <h4>Common Types of Malware:</h4>
          <ul>
            <li><strong>Viruses:</strong> Self-replicating programs that attach to legitimate files</li>
            <li><strong>Worms:</strong> Self-replicating programs that spread through networks</li>
            <li><strong>Trojans:</strong> Malicious programs disguised as legitimate software</li>
            <li><strong>Ransomware:</strong> Encrypts files and demands payment for decryption</li>
            <li><strong>Spyware:</strong> Secretly monitors user activity</li>
            <li><strong>Adware:</strong> Displays unwanted advertisements</li>
          </ul>
          
          <h3>Phishing Attacks</h3>
          <p>Phishing is a social engineering technique used to steal user data, including login credentials and credit card numbers.</p>
          
          <h4>Phishing Techniques:</h4>
          <ul>
            <li><strong>Email Phishing:</strong> Fraudulent emails pretending to be from legitimate sources</li>
            <li><strong>Spear Phishing:</strong> Targeted attacks against specific individuals or organizations</li>
            <li><strong>Whaling:</strong> Phishing attacks targeting high-level executives</li>
            <li><strong>Vishing:</strong> Voice-based phishing using phone calls</li>
            <li><strong>Smishing:</strong> SMS-based phishing attacks</li>
          </ul>
          
          <h3>Social Engineering</h3>
          <p>Social engineering manipulates people into performing actions or divulging confidential information.</p>
          
          <h4>Common Social Engineering Tactics:</h4>
          <ul>
            <li><strong>Pretexting:</strong> Creating a fabricated scenario to obtain information</li>
            <li><strong>Baiting:</strong> Using physical media to spread malware</li>
            <li><strong>Quid Pro Quo:</strong> Offering a service in exchange for information</li>
            <li><strong>Tailgating:</strong> Following authorized personnel into restricted areas</li>
          </ul>
          
          <div class="bg-danger-900/20 border border-danger-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-danger-400 font-semibold mb-2">Warning Signs</h4>
            <ul class="text-sm">
              <li>• Urgent requests for personal information</li>
              <li>• Suspicious email addresses or URLs</li>
              <li>• Requests for passwords or financial information</li>
              <li>• Offers that seem too good to be true</li>
              <li>• Threats or pressure to act quickly</li>
            </ul>
          </div>
        `
      },
      {
        id: 'password-security',
        title: 'Password Security & Authentication',
        description: 'Create and manage strong passwords and authentication methods',
        duration: '40 min',
        topics: ['Password creation', 'Password managers', '2FA/MFA', 'Biometric security'],
        exercises: ['Password strength test', '2FA setup lab', 'Password manager configuration'],
        resources: ['Password best practices', '2FA guide', 'Password manager comparison'],
        content: `
          <h2>Password Security Fundamentals</h2>
          <p>Passwords are the first line of defense for most online accounts. Creating strong passwords and using proper authentication methods is crucial for protecting your digital identity.</p>
          
          <h3>Creating Strong Passwords</h3>
          <p>A strong password should be:</p>
          <ul>
            <li><strong>Long:</strong> At least 12 characters (preferably 16+)</li>
            <li><strong>Complex:</strong> Mix of uppercase, lowercase, numbers, and symbols</li>
            <li><strong>Unique:</strong> Different for each account</li>
            <li><strong>Unpredictable:</strong> Avoid common words, names, or patterns</li>
          </ul>
          
          <h4>Password Creation Techniques:</h4>
          <ul>
            <li><strong>Passphrase Method:</strong> Use a memorable sentence with variations</li>
            <li><strong>Random Generation:</strong> Use password generators for maximum security</li>
            <li><strong>Substitution Method:</strong> Replace letters with numbers or symbols</li>
          </ul>
          
          <h3>Password Managers</h3>
          <p>Password managers are tools that help you create, store, and manage strong passwords securely.</p>
          
          <h4>Benefits of Password Managers:</h4>
          <ul>
            <li>Generate strong, unique passwords</li>
            <li>Store passwords securely with encryption</li>
            <li>Auto-fill login forms</li>
            <li>Sync across devices</li>
            <li>Monitor for compromised passwords</li>
          </ul>
          
          <h4>Popular Password Managers:</h4>
          <ul>
            <li>Bitwarden (Free and open-source)</li>
            <li>1Password</li>
            <li>LastPass</li>
            <li>Dashlane</li>
            <li>KeePass (Local storage)</li>
          </ul>
          
          <h3>Two-Factor Authentication (2FA)</h3>
          <p>2FA adds an extra layer of security by requiring a second form of verification beyond your password.</p>
          
          <h4>Types of 2FA:</h4>
          <ul>
            <li><strong>SMS/Text:</strong> Receive a code via text message</li>
            <li><strong>Authenticator Apps:</strong> Generate time-based codes (TOTP)</li>
            <li><strong>Hardware Tokens:</strong> Physical devices that generate codes</li>
            <li><strong>Biometric:</strong> Fingerprint, face recognition, etc.</li>
            <li><strong>Email:</strong> Receive codes via email</li>
          </ul>
          
          <h3>Biometric Security</h3>
          <p>Biometric authentication uses unique physical characteristics for identification.</p>
          
          <h4>Common Biometric Methods:</h4>
          <ul>
            <li><strong>Fingerprint Recognition:</strong> Most common on mobile devices</li>
            <li><strong>Facial Recognition:</strong> Uses camera to identify facial features</li>
            <li><strong>Iris Scanning:</strong> Scans the colored part of the eye</li>
            <li><strong>Voice Recognition:</strong> Analyzes voice patterns</li>
          </ul>
          
          <div class="bg-success-900/20 border border-success-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-success-400 font-semibold mb-2">Best Practices</h4>
            <ul class="text-sm">
              <li>• Use a password manager for all accounts</li>
              <li>• Enable 2FA wherever possible</li>
              <li>• Use authenticator apps instead of SMS when available</li>
              <li>• Regularly update passwords</li>
              <li>• Never share passwords or 2FA codes</li>
            </ul>
          </div>
        `
      },
      {
        id: 'email-security',
        title: 'Email Security & Phishing Defense',
        description: 'Protect yourself from email-based attacks and scams',
        duration: '50 min',
        topics: ['Email threats', 'Phishing detection', 'Email encryption', 'Safe email practices'],
        exercises: ['Phishing email analysis', 'Email security audit', 'Encryption setup'],
        resources: ['Phishing examples', 'Email security tools', 'Encryption guide'],
        content: `
          <h2>Email Security Essentials</h2>
          <p>Email remains one of the most common attack vectors for cybercriminals. Understanding email threats and implementing proper security measures is essential for protecting yourself and your organization.</p>
          
          <h3>Common Email Threats</h3>
          <p>Email-based attacks can take many forms, each designed to steal information, spread malware, or compromise systems.</p>
          
          <h4>Types of Email Threats:</h4>
          <ul>
            <li><strong>Phishing:</strong> Fraudulent emails designed to steal credentials</li>
            <li><strong>Spear Phishing:</strong> Targeted attacks against specific individuals</li>
            <li><strong>Whaling:</strong> Attacks targeting high-level executives</li>
            <li><strong>Business Email Compromise (BEC):</strong> Impersonating executives to authorize fraudulent transactions</li>
            <li><strong>Malware Distribution:</strong> Emails containing malicious attachments or links</li>
            <li><strong>Spam:</strong> Unsolicited bulk emails</li>
          </ul>
          
          <h3>Phishing Detection</h3>
          <p>Learning to identify phishing emails is crucial for email security.</p>
          
          <h4>Red Flags to Watch For:</h4>
          <ul>
            <li><strong>Suspicious Sender Address:</strong> Check for slight variations in domain names</li>
            <li><strong>Urgency:</strong> Threats of account suspension or immediate action required</li>
            <li><strong>Poor Grammar/Spelling:</strong> Professional organizations rarely send emails with errors</li>
            <li><strong>Generic Greetings:</strong> "Dear Customer" instead of your name</li>
            <li><strong>Suspicious Links:</strong> Hover over links to see the actual URL</li>
            <li><strong>Unexpected Attachments:</strong> Be wary of unexpected file attachments</li>
            <li><strong>Requests for Sensitive Information:</strong> Legitimate companies don't ask for passwords via email</li>
          </ul>
          
          <h3>Email Encryption</h3>
          <p>Email encryption protects the content of your emails from unauthorized access.</p>
          
          <h4>Types of Email Encryption:</h4>
          <ul>
            <li><strong>Transport Layer Security (TLS):</strong> Encrypts emails in transit</li>
            <li><strong>End-to-End Encryption:</strong> Encrypts emails from sender to recipient</li>
            <li><strong>Pretty Good Privacy (PGP):</strong> Advanced encryption for sensitive communications</li>
          </ul>
          
          <h3>Safe Email Practices</h3>
          <p>Implementing good email habits can significantly reduce your risk of falling victim to email-based attacks.</p>
          
          <h4>Best Practices:</h4>
          <ul>
            <li><strong>Verify Senders:</strong> Always verify the sender's email address</li>
            <li><strong>Think Before Clicking:</strong> Hover over links before clicking</li>
            <li><strong>Don't Trust Attachments:</strong> Scan attachments before opening</li>
            <li><strong>Use Strong Passwords:</strong> Protect your email account with a strong password</li>
            <li><strong>Enable 2FA:</strong> Use two-factor authentication for email accounts</li>
            <li><strong>Keep Software Updated:</strong> Regularly update email clients and security software</li>
            <li><strong>Be Cautious with Personal Information:</strong> Don't share sensitive information via email</li>
          </ul>
          
          <h3>Email Security Tools</h3>
          <p>Various tools can help enhance email security.</p>
          
          <h4>Recommended Tools:</h4>
          <ul>
            <li><strong>Email Security Gateways:</strong> Filter malicious emails before they reach users</li>
            <li><strong>Anti-Spam Software:</strong> Block unwanted emails</li>
            <li><strong>Email Encryption Services:</strong> Encrypt sensitive communications</li>
            <li><strong>Phishing Simulation Tools:</strong> Train employees to recognize phishing</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Quick Checklist</h4>
            <ul class="text-sm">
              <li>✓ Check sender email address carefully</li>
              <li>✓ Look for urgency or threats in the message</li>
              <li>✓ Hover over links before clicking</li>
              <li>✓ Don't open unexpected attachments</li>
              <li>✓ Never share passwords via email</li>
              <li>✓ Report suspicious emails to IT security</li>
            </ul>
          </div>
        `
      },
      {
        id: 'social-media-safety',
        title: 'Social Media Security',
        description: 'Protect your privacy and security on social platforms',
        duration: '35 min',
        topics: ['Privacy settings', 'Information sharing', 'Account security', 'Social engineering'],
        exercises: ['Privacy audit', 'Social media cleanup', 'Security settings configuration'],
        resources: ['Privacy guides', 'Social media security tips', 'Account protection'],
        content: `
          <h2>Social Media Security</h2>
          <p>Social media platforms have become integral parts of our daily lives, but they also present significant security and privacy risks. Understanding how to protect yourself on these platforms is essential.</p>
          
          <h3>Privacy Settings</h3>
          <p>Most social media platforms offer extensive privacy controls. Understanding and properly configuring these settings is crucial for protecting your personal information.</p>
          
          <h4>Key Privacy Settings to Configure:</h4>
          <ul>
            <li><strong>Profile Visibility:</strong> Control who can see your profile and posts</li>
            <li><strong>Friend/Follower Requests:</strong> Choose who can send you requests</li>
            <li><strong>Post Privacy:</strong> Set default privacy for new posts</li>
            <li><strong>Tagging Controls:</strong> Control who can tag you in posts</li>
            <li><strong>Search Visibility:</strong> Control if your profile appears in search results</li>
            <li><strong>Data Sharing:</strong> Limit how your data is shared with third parties</li>
          </ul>
          
          <h3>Information Sharing Risks</h3>
          <p>Oversharing on social media can lead to various security and privacy issues.</p>
          
          <h4>Information to Avoid Sharing:</h4>
          <ul>
            <li><strong>Personal Details:</strong> Full address, phone number, birth date</li>
            <li><strong>Financial Information:</strong> Credit card numbers, bank details</li>
            <li><strong>Travel Plans:</strong> Vacation dates and locations</li>
            <li><strong>Work Information:</strong> Sensitive business details</li>
            <li><strong>Location Data:</strong> Real-time location updates</li>
            <li><strong>Family Information:</strong> Details about children or family members</li>
          </ul>
          
          <h3>Account Security</h3>
          <p>Protecting your social media accounts from unauthorized access is essential.</p>
          
          <h4>Account Security Measures:</h4>
          <ul>
            <li><strong>Strong Passwords:</strong> Use unique, complex passwords for each platform</li>
            <li><strong>Two-Factor Authentication:</strong> Enable 2FA wherever available</li>
            <li><strong>Login Notifications:</strong> Get alerts for new login attempts</li>
            <li><strong>Trusted Devices:</strong> Review and remove unknown devices</li>
            <li><strong>App Permissions:</strong> Regularly review third-party app access</li>
            <li><strong>Account Recovery:</strong> Set up secure recovery options</li>
          </ul>
          
          <h3>Social Engineering on Social Media</h3>
          <p>Social media platforms are prime targets for social engineering attacks.</p>
          
          <h4>Common Social Media Attacks:</h4>
          <ul>
            <li><strong>Fake Profiles:</strong> Attackers create fake profiles to gather information</li>
            <li><strong>Impersonation:</strong> Pretending to be someone you know</li>
            <li><strong>Phishing Links:</strong> Malicious links shared through social media</li>
            <li><strong>Information Gathering:</strong> Collecting personal details for targeted attacks</li>
            <li><strong>Malware Distribution:</strong> Sharing malicious content or links</li>
          </ul>
          
          <h3>Platform-Specific Security</h3>
          <p>Different social media platforms have unique security features and risks.</p>
          
          <h4>Popular Platforms and Security Features:</h4>
          <ul>
            <li><strong>Facebook:</strong> Privacy checkup, login alerts, trusted contacts</li>
            <li><strong>Twitter:</strong> Login verification, privacy settings, muted accounts</li>
            <li><strong>Instagram:</strong> Two-factor authentication, account privacy, activity status</li>
            <li><strong>LinkedIn:</strong> Profile visibility, connection requests, activity broadcasts</li>
            <li><strong>TikTok:</strong> Privacy settings, family pairing, restricted mode</li>
          </ul>
          
          <div class="bg-warning-900/20 border border-warning-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-warning-400 font-semibold mb-2">Security Tips</h4>
            <ul class="text-sm">
              <li>• Regularly review and update privacy settings</li>
              <li>• Be cautious about what you share publicly</li>
              <li>• Verify friend requests from unknown people</li>
              <li>• Don't click on suspicious links</li>
              <li>• Use different passwords for each platform</li>
              <li>• Enable two-factor authentication</li>
            </ul>
          </div>
        `
      },
      {
        id: 'mobile-security',
        title: 'Mobile Device Security',
        description: 'Secure your smartphones and tablets',
        duration: '45 min',
        topics: ['Mobile threats', 'App security', 'Device encryption', 'Safe browsing'],
        exercises: ['Mobile security audit', 'App permission review', 'Encryption setup'],
        resources: ['Mobile security guide', 'App security checklist', 'Safe browsing tips'],
        content: `
          <h2>Mobile Device Security</h2>
          <p>Mobile devices have become essential tools in our daily lives, but they also present unique security challenges. Understanding mobile security threats and implementing proper protection measures is crucial.</p>
          
          <h3>Mobile Security Threats</h3>
          <p>Mobile devices face various security threats that differ from traditional computer threats.</p>
          
          <h4>Common Mobile Threats:</h4>
          <ul>
            <li><strong>Malicious Apps:</strong> Apps designed to steal data or damage devices</li>
            <li><strong>App Store Fraud:</strong> Fake apps that mimic legitimate applications</li>
            <li><strong>Network Attacks:</strong> Attacks on public WiFi networks</li>
            <li><strong>Physical Theft:</strong> Loss or theft of the device itself</li>
            <li><strong>Data Leakage:</strong> Apps sharing data without user consent</li>
            <li><strong>Jailbreaking/Rooting:</strong> Bypassing device security controls</li>
          </ul>
          
          <h3>App Security</h3>
          <p>Mobile apps can pose significant security risks if not properly managed.</p>
          
          <h4>App Security Best Practices:</h4>
          <ul>
            <li><strong>Download from Official Stores:</strong> Only download apps from official app stores</li>
            <li><strong>Check App Permissions:</strong> Review what data apps can access</li>
            <li><strong>Read Reviews:</strong> Check user reviews and ratings before downloading</li>
            <li><strong>Keep Apps Updated:</strong> Regularly update apps to patch security vulnerabilities</li>
            <li><strong>Remove Unused Apps:</strong> Delete apps you no longer use</li>
            <li><strong>Check App Privacy:</strong> Review app privacy policies</li>
          </ul>
          
          <h3>Device Encryption</h3>
          <p>Encrypting your mobile device protects your data if the device is lost or stolen.</p>
          
          <h4>Encryption Features:</h4>
          <ul>
            <li><strong>Full Disk Encryption:</strong> Encrypts all data on the device</li>
            <li><strong>File-Level Encryption:</strong> Encrypts individual files or folders</li>
            <li><strong>Secure Enclave:</strong> Hardware-based security for sensitive data</li>
          </ul>
          
          <h4>Enabling Encryption:</h4>
          <ul>
            <li><strong>iOS:</strong> Encryption is enabled by default when you set a passcode</li>
            <li><strong>Android:</strong> Enable encryption in Security settings</li>
            <li><strong>Set Strong Passcodes:</strong> Use complex passcodes or biometric authentication</li>
          </ul>
          
          <h3>Safe Browsing on Mobile</h3>
          <p>Mobile browsing presents unique security challenges compared to desktop browsing.</p>
          
          <h4>Mobile Browsing Security:</h4>
          <ul>
            <li><strong>Use Secure Browsers:</strong> Choose browsers with built-in security features</li>
            <li><strong>Enable HTTPS:</strong> Ensure websites use secure connections</li>
            <li><strong>Clear Browser Data:</strong> Regularly clear cookies and cache</li>
            <li><strong>Use Private Browsing:</strong> Use incognito/private browsing when appropriate</li>
            <li><strong>Be Cautious with Links:</strong> Verify links before clicking</li>
            <li><strong>Use VPN:</strong> Consider using a VPN for additional security</li>
          </ul>
          
          <h3>Network Security</h3>
          <p>Mobile devices often connect to various networks, each with different security levels.</p>
          
          <h4>Network Security Best Practices:</h4>
          <ul>
            <li><strong>Avoid Public WiFi:</strong> Be cautious when using public WiFi networks</li>
            <li><strong>Use VPN:</strong> Use a VPN when connecting to public networks</li>
            <li><strong>Disable Auto-Connect:</strong> Don't automatically connect to unknown networks</li>
            <li><strong>Use Mobile Data:</strong> Use cellular data for sensitive transactions</li>
            <li><strong>Check Network Security:</strong> Verify network security before connecting</li>
          </ul>
          
          <h3>Device Management</h3>
          <p>Proper device management is essential for maintaining mobile security.</p>
          
          <h4>Device Management Tips:</h4>
          <ul>
            <li><strong>Regular Updates:</strong> Keep operating system updated</li>
            <li><strong>Backup Data:</strong> Regularly backup important data</li>
            <li><strong>Remote Wipe:</strong> Enable remote wipe capabilities</li>
            <li><strong>Find My Device:</strong> Enable device location services</li>
            <li><strong>Screen Lock:</strong> Use automatic screen lock with short timeout</li>
            <li><strong>Disable Unnecessary Features:</strong> Turn off unused connectivity features</li>
          </ul>
          
          <div class="bg-success-900/20 border border-success-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-success-400 font-semibold mb-2">Mobile Security Checklist</h4>
            <ul class="text-sm">
              <li>✓ Enable device encryption</li>
              <li>✓ Set strong passcode or biometric lock</li>
              <li>✓ Enable two-factor authentication</li>
              <li>✓ Keep OS and apps updated</li>
              <li>✓ Review app permissions regularly</li>
              <li>✓ Use VPN on public networks</li>
              <li>✓ Enable remote wipe</li>
              <li>✓ Backup data regularly</li>
            </ul>
          </div>
        `
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
        resources: ['OSI Model guide', 'TCP/IP reference', 'Network protocols'],
        content: `
          <h2>Network Fundamentals</h2>
          <p>Understanding how networks function is essential for cybersecurity professionals. Networks are the backbone of modern communication, and securing them requires knowledge of their fundamental components and protocols.</p>
          
          <h3>The OSI Model</h3>
          <p>The Open Systems Interconnection (OSI) model is a conceptual framework used to describe network interactions in seven layers.</p>
          
          <h4>The Seven Layers:</h4>
          <ol>
            <li><strong>Physical Layer (Layer 1):</strong> Transmits raw bits over physical media (cables, wireless)</li>
            <li><strong>Data Link Layer (Layer 2):</strong> Provides error detection and correction (Ethernet, WiFi)</li>
            <li><strong>Network Layer (Layer 3):</strong> Handles routing and addressing (IP, ICMP)</li>
            <li><strong>Transport Layer (Layer 4):</strong> Ensures reliable data delivery (TCP, UDP)</li>
            <li><strong>Session Layer (Layer 5):</strong> Manages connections between applications</li>
            <li><strong>Presentation Layer (Layer 6):</strong> Handles data formatting and encryption</li>
            <li><strong>Application Layer (Layer 7):</strong> Provides network services to applications (HTTP, FTP, SMTP)</li>
          </ol>
          
          <h3>TCP/IP Protocol Suite</h3>
          <p>TCP/IP is the fundamental communication protocol of the internet.</p>
          
          <h4>Key TCP/IP Protocols:</h4>
          <ul>
            <li><strong>IP (Internet Protocol):</strong> Provides addressing and routing</li>
            <li><strong>TCP (Transmission Control Protocol):</strong> Provides reliable, ordered data delivery</li>
            <li><strong>UDP (User Datagram Protocol):</strong> Provides fast, unreliable data delivery</li>
            <li><strong>ICMP (Internet Control Message Protocol):</strong> Used for error reporting and diagnostics</li>
            <li><strong>ARP (Address Resolution Protocol):</strong> Maps IP addresses to MAC addresses</li>
          </ul>
          
          <h3>Network Addressing</h3>
          <p>Understanding network addressing is crucial for network security.</p>
          
          <h4>IP Addresses:</h4>
          <ul>
            <li><strong>IPv4:</strong> 32-bit addresses (e.g., 192.168.1.1)</li>
            <li><strong>IPv6:</strong> 128-bit addresses (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334)</li>
            <li><strong>Private IP Ranges:</strong> 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16</li>
            <li><strong>Public IP Addresses:</strong> Globally routable addresses</li>
          </ul>
          
          <h3>Network Architecture</h3>
          <p>Network architecture defines how network components are organized and connected.</p>
          
          <h4>Common Network Topologies:</h4>
          <ul>
            <li><strong>Star Topology:</strong> All devices connect to a central hub</li>
            <li><strong>Bus Topology:</strong> All devices share a common communication line</li>
            <li><strong>Ring Topology:</strong> Devices form a circular network</li>
            <li><strong>Mesh Topology:</strong> Each device connects to every other device</li>
            <li><strong>Tree Topology:</strong> Hierarchical structure with root and branches</li>
          </ul>
          
          <h3>Network Security Implications</h3>
          <p>Understanding network fundamentals helps identify security vulnerabilities and implement proper defenses.</p>
          
          <h4>Security Considerations:</h4>
          <ul>
            <li><strong>Protocol Vulnerabilities:</strong> Each protocol may have specific security weaknesses</li>
            <li><strong>Address Spoofing:</strong> Attackers can forge source addresses</li>
            <li><strong>Traffic Analysis:</strong> Network traffic can reveal sensitive information</li>
            <li><strong>Man-in-the-Middle Attacks:</strong> Intercepting and modifying network traffic</li>
            <li><strong>Denial of Service:</strong> Overwhelming network resources</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Key Concepts</h4>
            <ul class="text-sm">
              <li>• The OSI model provides a framework for understanding network communication</li>
              <li>• TCP/IP is the foundation of internet communication</li>
              <li>• Network addressing enables proper routing and communication</li>
              <li>• Understanding network architecture helps identify security weaknesses</li>
              <li>• Each network layer presents unique security challenges</li>
            </ul>
          </div>
        `
      },
      {
        id: 'wifi-security',
        title: 'WiFi Security',
        description: 'Secure your wireless networks and connections',
        duration: '50 min',
        topics: ['WiFi encryption', 'Rogue access points', 'WiFi attacks', 'Secure configuration'],
        exercises: ['WiFi security audit', 'Encryption setup', 'Attack simulation'],
        resources: ['WiFi security guide', 'Encryption standards', 'Configuration best practices'],
        content: `
          <h2>WiFi Security</h2>
          <p>Wireless networks are ubiquitous in modern environments, but they also present unique security challenges. Understanding WiFi security is essential for protecting network communications.</p>
          
          <h3>WiFi Encryption Standards</h3>
          <p>WiFi encryption protects wireless communications from unauthorized access.</p>
          
          <h4>Common Encryption Standards:</h4>
          <ul>
            <li><strong>WEP (Wired Equivalent Privacy):</strong> Legacy encryption, easily broken</li>
            <li><strong>WPA (WiFi Protected Access):</strong> Improved security over WEP</li>
            <li><strong>WPA2 (WiFi Protected Access 2):</strong> Current standard, uses AES encryption</li>
            <li><strong>WPA3 (WiFi Protected Access 3):</strong> Latest standard with enhanced security</li>
          </ul>
          
          <h3>WiFi Security Threats</h3>
          <p>Wireless networks face specific security threats that differ from wired networks.</p>
          
          <h4>Common WiFi Attacks:</h4>
          <ul>
            <li><strong>Rogue Access Points:</strong> Unauthorized WiFi networks that mimic legitimate ones</li>
            <li><strong>Man-in-the-Middle Attacks:</strong> Intercepting communications between devices and access points</li>
            <li><strong>Packet Sniffing:</strong> Capturing and analyzing wireless network traffic</li>
            <li><strong>Deauthentication Attacks:</strong> Forcing devices to disconnect from networks</li>
            <li><strong>Brute Force Attacks:</strong> Attempting to guess WiFi passwords</li>
            <li><strong>Evil Twin Attacks:</strong> Creating fake access points with similar names</li>
          </ul>
          
          <h3>Securing WiFi Networks</h3>
          <p>Implementing proper WiFi security measures is crucial for protecting network communications.</p>
          
          <h4>Security Best Practices:</h4>
          <ul>
            <li><strong>Use Strong Encryption:</strong> Always use WPA2 or WPA3 encryption</li>
            <li><strong>Strong Passwords:</strong> Use complex, unique passwords for WiFi networks</li>
            <li><strong>Change Default Settings:</strong> Modify default SSID names and admin credentials</li>
            <li><strong>Disable WPS:</strong> Turn off WiFi Protected Setup if not needed</li>
            <li><strong>MAC Address Filtering:</strong> Restrict access to known devices</li>
            <li><strong>Hide SSID Broadcasting:</strong> Don't broadcast network names publicly</li>
            <li><strong>Regular Updates:</strong> Keep router firmware updated</li>
          </ul>
          
          <h3>Public WiFi Security</h3>
          <p>Public WiFi networks present additional security risks that require special precautions.</p>
          
          <h4>Public WiFi Safety Tips:</h4>
          <ul>
            <li><strong>Use VPN:</strong> Always use a VPN when connecting to public WiFi</li>
            <li><strong>Verify Network Names:</strong> Confirm you're connecting to the correct network</li>
            <li><strong>Disable File Sharing:</strong> Turn off file sharing when on public networks</li>
            <li><strong>Use HTTPS:</strong> Only visit websites using HTTPS encryption</li>
            <li><strong>Avoid Sensitive Transactions:</strong> Don't perform banking or shopping on public WiFi</li>
            <li><strong>Forget Networks:</strong> Remove public networks from saved networks</li>
          </ul>
          
          <h3>WiFi Security Tools</h3>
          <p>Various tools can help assess and improve WiFi security.</p>
          
          <h4>Security Assessment Tools:</h4>
          <ul>
            <li><strong>Wireshark:</strong> Network protocol analyzer</li>
            <li><strong>Aircrack-ng:</strong> WiFi security assessment suite</li>
            <li><strong>Kismet:</strong> Wireless network detector and sniffer</li>
            <li><strong>inSSIDer:</strong> WiFi network discovery tool</li>
            <li><strong>WiFi Analyzer:</strong> Mobile app for network analysis</li>
          </ul>
          
          <div class="bg-warning-900/20 border border-warning-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-warning-400 font-semibold mb-2">Security Checklist</h4>
            <ul class="text-sm">
              <li>✓ Use WPA2 or WPA3 encryption</li>
              <li>✓ Set strong, unique passwords</li>
              <li>✓ Change default router settings</li>
              <li>✓ Keep firmware updated</li>
              <li>✓ Use VPN on public networks</li>
              <li>✓ Disable unnecessary features</li>
              <li>✓ Monitor for unauthorized devices</li>
            </ul>
          </div>
        `
      },
      {
        id: 'firewalls',
        title: 'Firewalls & Network Protection',
        description: 'Implement and configure firewalls for network security',
        duration: '70 min',
        topics: ['Firewall types', 'Rule configuration', 'Network segmentation', 'Intrusion detection'],
        exercises: ['Firewall configuration', 'Rule creation', 'Network monitoring'],
        resources: ['Firewall guide', 'Configuration examples', 'Best practices'],
        content: `
          <h2>Firewalls & Network Protection</h2>
          <p>Firewalls are essential network security devices that monitor and control incoming and outgoing network traffic based on predetermined security rules.</p>
          
          <h3>Types of Firewalls</h3>
          <ul>
            <li><strong>Packet Filtering Firewalls:</strong> Examine packets and block them based on source/destination IP, ports, and protocols</li>
            <li><strong>Stateful Inspection Firewalls:</strong> Track the state of network connections and make decisions based on context</li>
            <li><strong>Application Layer Firewalls:</strong> Filter traffic based on application-specific rules</li>
            <li><strong>Next-Generation Firewalls (NGFW):</strong> Advanced firewalls with deep packet inspection and application awareness</li>
          </ul>
          
          <h3>Firewall Configuration Best Practices</h3>
          <ul>
            <li>Follow the principle of least privilege</li>
            <li>Regularly review and update firewall rules</li>
            <li>Log all firewall activities for monitoring</li>
            <li>Use default deny policies</li>
            <li>Segment networks for better security</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Key Takeaway</h4>
            <p>Firewalls are the first line of defense in network security, but they must be properly configured and maintained to be effective.</p>
          </div>
        `
      },
      {
        id: 'vpn-security',
        title: 'VPNs & Secure Remote Access',
        description: 'Use VPNs for secure remote connections',
        duration: '55 min',
        topics: ['VPN protocols', 'VPN setup', 'Remote access security', 'Tunneling'],
        exercises: ['VPN configuration', 'Secure connection setup', 'Protocol comparison'],
        resources: ['VPN guide', 'Protocol comparison', 'Setup tutorials'],
        content: `
          <h2>VPNs & Secure Remote Access</h2>
          <p>Virtual Private Networks (VPNs) provide secure, encrypted connections over public networks, enabling safe remote access to private networks.</p>
          
          <h3>VPN Protocols</h3>
          <ul>
            <li><strong>OpenVPN:</strong> Open-source, highly secure protocol</li>
            <li><strong>IPSec:</strong> Industry standard for secure communications</li>
            <li><strong>L2TP/IPSec:</strong> Layer 2 Tunneling Protocol with IPSec</li>
            <li><strong>PPTP:</strong> Point-to-Point Tunneling Protocol (legacy)</li>
            <li><strong>WireGuard:</strong> Modern, fast VPN protocol</li>
          </ul>
          
          <h3>VPN Security Benefits</h3>
          <ul>
            <li>Encrypts all network traffic</li>
            <li>Hides your IP address</li>
            <li>Protects against man-in-the-middle attacks</li>
            <li>Enables secure remote access</li>
            <li>Bypasses geographic restrictions</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Best Practice</h4>
            <p>Always use VPNs when connecting to public WiFi networks to protect your data from potential eavesdropping.</p>
          </div>
        `
      },
      {
        id: 'network-monitoring',
        title: 'Network Monitoring & Detection',
        description: 'Monitor networks for suspicious activity',
        duration: '65 min',
        topics: ['Network monitoring tools', 'Traffic analysis', 'Anomaly detection', 'Log analysis'],
        exercises: ['Network monitoring setup', 'Traffic capture', 'Log analysis'],
        resources: ['Monitoring tools', 'Analysis techniques', 'Detection methods'],
        content: `
          <h2>Network Monitoring & Detection</h2>
          <p>Network monitoring is essential for detecting and responding to security threats in real-time.</p>
          
          <h3>Monitoring Tools</h3>
          <ul>
            <li><strong>Wireshark:</strong> Network protocol analyzer</li>
            <li><strong>Snort:</strong> Intrusion detection system</li>
            <li><strong>Nmap:</strong> Network discovery and security auditing</li>
            <li><strong>Nagios:</strong> Network monitoring system</li>
            <li><strong>SolarWinds:</strong> Network performance monitoring</li>
          </ul>
          
          <h3>Anomaly Detection</h3>
          <ul>
            <li>Unusual traffic patterns</li>
            <li>Unexpected data transfers</li>
            <li>Unauthorized access attempts</li>
            <li>Performance degradation</li>
            <li>Protocol violations</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Key Takeaway</h4>
            <p>Continuous monitoring and analysis of network traffic is crucial for early threat detection and response.</p>
          </div>
        `
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
        resources: ['OWASP guide', 'Vulnerability database', 'Security testing tools'],
        content: `
          <h2>Web Application Security</h2>
          <p>Web applications are prime targets for cyber attacks. Understanding common vulnerabilities and how to protect against them is essential.</p>
          
          <h3>OWASP Top 10</h3>
          <p>The OWASP Top 10 is a standard awareness document for developers and web application security.</p>
          
          <h3>Common Vulnerabilities</h3>
          <ul>
            <li><strong>SQL Injection:</strong> Inserting malicious SQL code</li>
            <li><strong>Cross-Site Scripting (XSS):</strong> Injecting malicious scripts</li>
            <li><strong>Cross-Site Request Forgery (CSRF):</strong> Unauthorized commands</li>
            <li><strong>Authentication Bypass:</strong> Circumventing login mechanisms</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Security Principle</h4>
            <p>Always validate and sanitize all user inputs to prevent injection attacks.</p>
          </div>
        `
      },
      {
        id: 'cryptography-basics',
        title: 'Cryptography Fundamentals',
        description: 'Understand encryption and cryptographic principles',
        duration: '90 min',
        topics: ['Symmetric encryption', 'Asymmetric encryption', 'Hashing', 'Digital signatures'],
        exercises: ['Encryption implementation', 'Hash analysis', 'Signature verification'],
        resources: ['Cryptography guide', 'Encryption algorithms', 'Implementation examples'],
        content: `
          <h2>Cryptography Fundamentals</h2>
          <p>Cryptography is the foundation of modern security, providing confidentiality, integrity, and authenticity.</p>
          
          <h3>Types of Encryption</h3>
          <ul>
            <li><strong>Symmetric Encryption:</strong> Same key for encryption and decryption</li>
            <li><strong>Asymmetric Encryption:</strong> Public/private key pairs</li>
            <li><strong>Hashing:</strong> One-way transformation of data</li>
            <li><strong>Digital Signatures:</strong> Verify authenticity and integrity</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Key Concept</h4>
            <p>Cryptography provides the mathematical foundation for secure communications and data protection.</p>
          </div>
        `
      },
      {
        id: 'secure-coding',
        title: 'Secure Coding Practices',
        description: 'Write secure code and avoid common vulnerabilities',
        duration: '75 min',
        topics: ['Input validation', 'Output encoding', 'Error handling', 'Secure design'],
        exercises: ['Code review', 'Vulnerability fixing', 'Secure coding practice'],
        resources: ['Secure coding guide', 'Best practices', 'Code examples'],
        content: `
          <h2>Secure Coding Practices</h2>
          <p>Writing secure code from the start is more effective than fixing vulnerabilities later.</p>
          
          <h3>Secure Development Principles</h3>
          <ul>
            <li><strong>Input Validation:</strong> Always validate and sanitize inputs</li>
            <li><strong>Output Encoding:</strong> Encode outputs to prevent injection</li>
            <li><strong>Error Handling:</strong> Don't expose sensitive information</li>
            <li><strong>Secure Design:</strong> Build security into the architecture</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Best Practice</h4>
            <p>Follow the principle of least privilege and never trust user input.</p>
          </div>
        `
      },
      {
        id: 'api-security',
        title: 'API Security',
        description: 'Secure application programming interfaces',
        duration: '70 min',
        topics: ['API authentication', 'Authorization', 'Rate limiting', 'Input validation'],
        exercises: ['API security audit', 'Authentication implementation', 'Security testing'],
        resources: ['API security guide', 'Authentication methods', 'Security standards'],
        content: `
          <h2>API Security</h2>
          <p>APIs are critical components that need robust security measures to protect data and services.</p>
          
          <h3>API Security Measures</h3>
          <ul>
            <li><strong>Authentication:</strong> Verify user identity</li>
            <li><strong>Authorization:</strong> Control access to resources</li>
            <li><strong>Rate Limiting:</strong> Prevent abuse and attacks</li>
            <li><strong>Input Validation:</strong> Sanitize all inputs</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Security Focus</h4>
            <p>APIs must be designed with security in mind from the beginning.</p>
          </div>
        `
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
      ,

        content: `
          <h2>Lesson Content</h2>
          <p>This lesson covers important cybersecurity concepts and practical applications.</p>
          
          <h3>Key Topics</h3>
          <ul>
            <li>Understanding fundamental concepts</li>
            <li>Practical implementation</li>
            <li>Security best practices</li>
            <li>Real-world applications</li>
          </ul>
          
          <h3>Learning Objectives</h3>
          <p>By the end of this lesson, you will understand:</p>
          <ul>
            <li>Core cybersecurity principles</li>
            <li>How to apply concepts in real scenarios</li>
            <li>Security implementation strategies</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Important Note</h4>
            <p>Complete all exercises and review additional resources for comprehensive understanding.</p>
          </div>
        `
      },
      {
        id: 'vulnerability-assessment',
        title: 'Vulnerability Assessment',
        description: 'Identify and assess security vulnerabilities',
        duration: '90 min',
        topics: ['Vulnerability scanning', 'Assessment methodologies', 'Risk analysis', 'Reporting'],
        exercises: ['Vulnerability scan', 'Risk assessment', 'Report writing'],
        resources: ['Vulnerability databases', 'Assessment tools', 'Reporting templates']
      ,

        content: `
          <h2>Lesson Content</h2>
          <p>This lesson covers important cybersecurity concepts and practical applications.</p>
          
          <h3>Key Topics</h3>
          <ul>
            <li>Understanding fundamental concepts</li>
            <li>Practical implementation</li>
            <li>Security best practices</li>
            <li>Real-world applications</li>
          </ul>
          
          <h3>Learning Objectives</h3>
          <p>By the end of this lesson, you will understand:</p>
          <ul>
            <li>Core cybersecurity principles</li>
            <li>How to apply concepts in real scenarios</li>
            <li>Security implementation strategies</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Important Note</h4>
            <p>Complete all exercises and review additional resources for comprehensive understanding.</p>
          </div>
        `
      },
      {
        id: 'exploitation',
        title: 'Exploitation Techniques',
        description: 'Learn how vulnerabilities are exploited',
        duration: '100 min',
        topics: ['Exploit development', 'Metasploit framework', 'Custom exploits', 'Post-exploitation'],
        exercises: ['Exploit development', 'Metasploit usage', 'Post-exploitation techniques'],
        resources: ['Exploit development guide', 'Metasploit documentation', 'Exploitation techniques']
      ,

        content: `
          <h2>Lesson Content</h2>
          <p>This lesson covers important cybersecurity concepts and practical applications.</p>
          
          <h3>Key Topics</h3>
          <ul>
            <li>Understanding fundamental concepts</li>
            <li>Practical implementation</li>
            <li>Security best practices</li>
            <li>Real-world applications</li>
          </ul>
          
          <h3>Learning Objectives</h3>
          <p>By the end of this lesson, you will understand:</p>
          <ul>
            <li>Core cybersecurity principles</li>
            <li>How to apply concepts in real scenarios</li>
            <li>Security implementation strategies</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Important Note</h4>
            <p>Complete all exercises and review additional resources for comprehensive understanding.</p>
          </div>
        `
      },
      {
        id: 'web-exploitation',
        title: 'Web Application Exploitation',
        description: 'Exploit web application vulnerabilities',
        duration: '95 min',
        topics: ['SQL injection', 'XSS exploitation', 'CSRF attacks', 'Authentication bypass'],
        exercises: ['Web application testing', 'Vulnerability exploitation', 'Security assessment'],
        resources: ['Web exploitation guide', 'Testing tools', 'Vulnerability examples']
      ,

        content: `
          <h2>Lesson Content</h2>
          <p>This lesson covers important cybersecurity concepts and practical applications.</p>
          
          <h3>Key Topics</h3>
          <ul>
            <li>Understanding fundamental concepts</li>
            <li>Practical implementation</li>
            <li>Security best practices</li>
            <li>Real-world applications</li>
          </ul>
          
          <h3>Learning Objectives</h3>
          <p>By the end of this lesson, you will understand:</p>
          <ul>
            <li>Core cybersecurity principles</li>
            <li>How to apply concepts in real scenarios</li>
            <li>Security implementation strategies</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Important Note</h4>
            <p>Complete all exercises and review additional resources for comprehensive understanding.</p>
          </div>
        `
      },
      {
        id: 'wireless-exploitation',
        title: 'Wireless Network Exploitation',
        description: 'Test wireless network security',
        duration: '80 min',
        topics: ['WiFi attacks', 'Bluetooth security', 'RFID security', 'Wireless monitoring'],
        exercises: ['WiFi penetration testing', 'Bluetooth security assessment', 'RFID analysis'],
        resources: ['Wireless security guide', 'Attack tools', 'Security assessment methods']
      ,

        content: `
          <h2>Lesson Content</h2>
          <p>This lesson covers important cybersecurity concepts and practical applications.</p>
          
          <h3>Key Topics</h3>
          <ul>
            <li>Understanding fundamental concepts</li>
            <li>Practical implementation</li>
            <li>Security best practices</li>
            <li>Real-world applications</li>
          </ul>
          
          <h3>Learning Objectives</h3>
          <p>By the end of this lesson, you will understand:</p>
          <ul>
            <li>Core cybersecurity principles</li>
            <li>How to apply concepts in real scenarios</li>
            <li>Security implementation strategies</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Important Note</h4>
            <p>Complete all exercises and review additional resources for comprehensive understanding.</p>
          </div>
        `
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
      ,

        content: `
          <h2>Lesson Content</h2>
          <p>This lesson covers important cybersecurity concepts and practical applications.</p>
          
          <h3>Key Topics</h3>
          <ul>
            <li>Understanding fundamental concepts</li>
            <li>Practical implementation</li>
            <li>Security best practices</li>
            <li>Real-world applications</li>
          </ul>
          
          <h3>Learning Objectives</h3>
          <p>By the end of this lesson, you will understand:</p>
          <ul>
            <li>Core cybersecurity principles</li>
            <li>How to apply concepts in real scenarios</li>
            <li>Security implementation strategies</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Important Note</h4>
            <p>Complete all exercises and review additional resources for comprehensive understanding.</p>
          </div>
        `
      },
      {
        id: 'digital-forensics',
        title: 'Digital Forensics',
        description: 'Investigate digital evidence and cybercrimes',
        duration: '90 min',
        topics: ['Forensic methodology', 'Evidence collection', 'Analysis techniques', 'Reporting'],
        exercises: ['Evidence collection', 'Forensic analysis', 'Report writing'],
        resources: ['Forensics guide', 'Analysis tools', 'Evidence handling procedures']
      ,

        content: `
          <h2>Lesson Content</h2>
          <p>This lesson covers important cybersecurity concepts and practical applications.</p>
          
          <h3>Key Topics</h3>
          <ul>
            <li>Understanding fundamental concepts</li>
            <li>Practical implementation</li>
            <li>Security best practices</li>
            <li>Real-world applications</li>
          </ul>
          
          <h3>Learning Objectives</h3>
          <p>By the end of this lesson, you will understand:</p>
          <ul>
            <li>Core cybersecurity principles</li>
            <li>How to apply concepts in real scenarios</li>
            <li>Security implementation strategies</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Important Note</h4>
            <p>Complete all exercises and review additional resources for comprehensive understanding.</p>
          </div>
        `
      },
      {
        id: 'malware-analysis',
        title: 'Malware Analysis',
        description: 'Analyze and understand malicious software',
        duration: '85 min',
        topics: ['Static analysis', 'Dynamic analysis', 'Behavioral analysis', 'Reverse engineering'],
        exercises: ['Malware analysis', 'Behavioral analysis', 'Reverse engineering'],
        resources: ['Malware analysis guide', 'Analysis tools', 'Reverse engineering techniques']
      ,

        content: `
          <h2>Lesson Content</h2>
          <p>This lesson covers important cybersecurity concepts and practical applications.</p>
          
          <h3>Key Topics</h3>
          <ul>
            <li>Understanding fundamental concepts</li>
            <li>Practical implementation</li>
            <li>Security best practices</li>
            <li>Real-world applications</li>
          </ul>
          
          <h3>Learning Objectives</h3>
          <p>By the end of this lesson, you will understand:</p>
          <ul>
            <li>Core cybersecurity principles</li>
            <li>How to apply concepts in real scenarios</li>
            <li>Security implementation strategies</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Important Note</h4>
            <p>Complete all exercises and review additional resources for comprehensive understanding.</p>
          </div>
        `
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
      ,

        content: `
          <h2>Lesson Content</h2>
          <p>This lesson covers important cybersecurity concepts and practical applications.</p>
          
          <h3>Key Topics</h3>
          <ul>
            <li>Understanding fundamental concepts</li>
            <li>Practical implementation</li>
            <li>Security best practices</li>
            <li>Real-world applications</li>
          </ul>
          
          <h3>Learning Objectives</h3>
          <p>By the end of this lesson, you will understand:</p>
          <ul>
            <li>Core cybersecurity principles</li>
            <li>How to apply concepts in real scenarios</li>
            <li>Security implementation strategies</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Important Note</h4>
            <p>Complete all exercises and review additional resources for comprehensive understanding.</p>
          </div>
        `
      },
      {
        id: 'aws-security',
        title: 'AWS Security',
        description: 'Secure Amazon Web Services environments',
        duration: '80 min',
        topics: ['IAM security', 'VPC configuration', 'Security groups', 'CloudTrail'],
        exercises: ['AWS security configuration', 'IAM setup', 'Security monitoring'],
        resources: ['AWS security guide', 'Configuration examples', 'Security tools']
      ,

        content: `
          <h2>Lesson Content</h2>
          <p>This lesson covers important cybersecurity concepts and practical applications.</p>
          
          <h3>Key Topics</h3>
          <ul>
            <li>Understanding fundamental concepts</li>
            <li>Practical implementation</li>
            <li>Security best practices</li>
            <li>Real-world applications</li>
          </ul>
          
          <h3>Learning Objectives</h3>
          <p>By the end of this lesson, you will understand:</p>
          <ul>
            <li>Core cybersecurity principles</li>
            <li>How to apply concepts in real scenarios</li>
            <li>Security implementation strategies</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Important Note</h4>
            <p>Complete all exercises and review additional resources for comprehensive understanding.</p>
          </div>
        `
      },
      {
        id: 'azure-security',
        title: 'Microsoft Azure Security',
        description: 'Secure Microsoft Azure cloud services',
        duration: '75 min',
        topics: ['Azure AD', 'Network security', 'Security center', 'Compliance'],
        exercises: ['Azure security setup', 'Security center configuration', 'Compliance assessment'],
        resources: ['Azure security guide', 'Security center docs', 'Compliance frameworks']
      ,

        content: `
          <h2>Lesson Content</h2>
          <p>This lesson covers important cybersecurity concepts and practical applications.</p>
          
          <h3>Key Topics</h3>
          <ul>
            <li>Understanding fundamental concepts</li>
            <li>Practical implementation</li>
            <li>Security best practices</li>
            <li>Real-world applications</li>
          </ul>
          
          <h3>Learning Objectives</h3>
          <p>By the end of this lesson, you will understand:</p>
          <ul>
            <li>Core cybersecurity principles</li>
            <li>How to apply concepts in real scenarios</li>
            <li>Security implementation strategies</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Important Note</h4>
            <p>Complete all exercises and review additional resources for comprehensive understanding.</p>
          </div>
        `
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
      ,

        content: `
          <h2>Lesson Content</h2>
          <p>This lesson covers important cybersecurity concepts and practical applications.</p>
          
          <h3>Key Topics</h3>
          <ul>
            <li>Understanding fundamental concepts</li>
            <li>Practical implementation</li>
            <li>Security best practices</li>
            <li>Real-world applications</li>
          </ul>
          
          <h3>Learning Objectives</h3>
          <p>By the end of this lesson, you will understand:</p>
          <ul>
            <li>Core cybersecurity principles</li>
            <li>How to apply concepts in real scenarios</li>
            <li>Security implementation strategies</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Important Note</h4>
            <p>Complete all exercises and review additional resources for comprehensive understanding.</p>
          </div>
        `
      },
      {
        id: 'iot-device-security',
        title: 'IoT Device Security',
        description: 'Secure individual IoT devices',
        duration: '70 min',
        topics: ['Device authentication', 'Firmware security', 'Communication security', 'Updates'],
        exercises: ['Device security audit', 'Firmware analysis', 'Security configuration'],
        resources: ['Device security guide', 'Firmware analysis tools', 'Configuration best practices']
      ,

        content: `
          <h2>Lesson Content</h2>
          <p>This lesson covers important cybersecurity concepts and practical applications.</p>
          
          <h3>Key Topics</h3>
          <ul>
            <li>Understanding fundamental concepts</li>
            <li>Practical implementation</li>
            <li>Security best practices</li>
            <li>Real-world applications</li>
          </ul>
          
          <h3>Learning Objectives</h3>
          <p>By the end of this lesson, you will understand:</p>
          <ul>
            <li>Core cybersecurity principles</li>
            <li>How to apply concepts in real scenarios</li>
            <li>Security implementation strategies</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Important Note</h4>
            <p>Complete all exercises and review additional resources for comprehensive understanding.</p>
          </div>
        `
      },
      {
        id: 'iot-network-security',
        title: 'IoT Network Security',
        description: 'Secure IoT networks and communications',
        duration: '65 min',
        topics: ['Network segmentation', 'Traffic monitoring', 'Protocol security', 'Access control'],
        exercises: ['Network security setup', 'Traffic analysis', 'Access control configuration'],
        resources: ['Network security guide', 'Monitoring tools', 'Protocol security']
      ,

        content: `
          <h2>Lesson Content</h2>
          <p>This lesson covers important cybersecurity concepts and practical applications.</p>
          
          <h3>Key Topics</h3>
          <ul>
            <li>Understanding fundamental concepts</li>
            <li>Practical implementation</li>
            <li>Security best practices</li>
            <li>Real-world applications</li>
          </ul>
          
          <h3>Learning Objectives</h3>
          <p>By the end of this lesson, you will understand:</p>
          <ul>
            <li>Core cybersecurity principles</li>
            <li>How to apply concepts in real scenarios</li>
            <li>Security implementation strategies</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Important Note</h4>
            <p>Complete all exercises and review additional resources for comprehensive understanding.</p>
          </div>
        `
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