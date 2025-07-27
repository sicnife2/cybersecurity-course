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
  exercises: Exercise[];
  resources: string[];
  content: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  type: 'quiz' | 'coding' | 'simulation' | 'practical' | 'analysis'; // Add other types as needed
  content: string;
  questions?: { question: string; options: string[]; correctAnswer: string; }[]; // Optional for quiz type
  // Add other properties relevant to different exercise types
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
        exercises: [
          {
            id: 'cybersecurity-quiz-1',
            title: 'Cybersecurity Fundamentals Quiz',
            description: 'Test your knowledge on the basics of cybersecurity.',
            type: 'quiz',
            content: 'Answer the following questions to test your understanding of cybersecurity fundamentals.',
            questions: [
              {
                question: 'What does the \'C\' in CIA Triad stand for?',
                options: ['Confidentiality', 'Control', 'Compliance', 'Cryptography'],
                correctAnswer: 'A',
              },
              {
                question: 'Which of the following is NOT a common type of malware?',
                options: ['Virus', 'Worm', 'Firewall', 'Ransomware'],
                correctAnswer: 'C',
              },
              {
                question: 'What is the primary goal of a phishing attack?',
                options: ['To spread viruses', 'To steal user data', 'To crash systems', 'To encrypt files'],
                correctAnswer: 'B',
              },
            ],
          },
          {
            id: 'threat-identification',
            title: 'Threat identification',
            description: 'Learn to identify various cybersecurity threats',
            type: 'practical',
            content: 'Practice identifying different types of cybersecurity threats.'
          },
          {
            id: 'security-assessment',
            title: 'Security assessment',
            description: 'Learn to perform basic security assessments',
            type: 'practical',
            content: 'Practice performing a basic security assessment.'
          }
        ],
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
        exercises: [
          {
            id: 'threat-analysis-lab',
            title: 'Threat analysis lab',
            description: 'Analyze different types of digital threats',
            type: 'practical',
            content: 'Practice analyzing various digital threats and identifying their characteristics.'
          },
          {
            id: 'phishing-simulation',
            title: 'Phishing simulation',
            description: 'Identify phishing attempts in emails',
            type: 'simulation',
            content: 'Practice identifying phishing attempts in sample emails.'
          },
          {
            id: 'social-engineering-scenarios',
            title: 'Social engineering scenarios',
            description: 'Recognize social engineering tactics',
            type: 'simulation',
            content: 'Practice recognizing social engineering tactics in various scenarios.'
          }
        ],
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
        exercises: [
          {
            id: 'password-strength-test',
            title: 'Password strength test',
            description: 'Test the strength of different passwords',
            type: 'practical',
            content: 'Practice testing the strength of different passwords using various criteria.'
          },
          {
            id: '2fa-setup-lab',
            title: '2FA setup lab',
            description: 'Set up two-factor authentication',
            type: 'practical',
            content: 'Practice setting up two-factor authentication for various accounts.'
          },
          {
            id: 'password-manager-configuration',
            title: 'Password manager configuration',
            description: 'Configure a password manager',
            type: 'practical',
            content: 'Practice configuring a password manager to securely store and generate passwords.'
          }
        ],
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
        exercises: [
          {
            id: 'phishing-email-analysis',
            title: 'Phishing email analysis',
            description: 'Analyze and identify phishing emails',
            type: 'practical',
            content: 'Practice analyzing and identifying phishing emails using various indicators.'
          },
          {
            id: 'email-security-audit',
            title: 'Email security audit',
            description: 'Audit email security settings',
            type: 'practical',
            content: 'Practice auditing email security settings and identifying potential vulnerabilities.'
          },
          {
            id: 'encryption-setup',
            title: 'Encryption setup',
            description: 'Set up email encryption',
            type: 'practical',
            content: 'Practice setting up email encryption to protect sensitive communications.'
          }
        ],
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
        exercises: [
          {
            id: 'privacy-audit',
            title: 'Privacy audit',
            description: 'Conduct a privacy audit of your social media accounts',
            type: 'practical',
            content: 'Review your social media accounts and identify privacy vulnerabilities.'
          },
          {
            id: 'social-media-cleanup',
            title: 'Social media cleanup',
            description: 'Clean up your social media presence',
            type: 'practical',
            content: 'Remove sensitive information and adjust privacy settings on your social media accounts.'
          },
          {
            id: 'security-settings-configuration',
            title: 'Security settings configuration',
            description: 'Configure security settings on social platforms',
            type: 'practical',
            content: 'Set up two-factor authentication and other security features on your social media accounts.'
          }
        ],
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
        exercises: [
          {
            id: 'mobile-security-audit',
            title: 'Mobile security audit',
            description: 'Conduct a security audit of your mobile device',
            type: 'practical',
            content: 'Evaluate your mobile device security settings and identify vulnerabilities.'
          },
          {
            id: 'app-permission-review',
            title: 'App permission review',
            description: 'Review app permissions on your mobile device',
            type: 'practical',
            content: 'Analyze the permissions granted to apps on your device and adjust as necessary.'
          },
          {
            id: 'encryption-setup-mobile',
            title: 'Encryption setup',
            description: 'Set up encryption on your mobile device',
            type: 'practical',
            content: 'Configure encryption settings on your mobile device to protect your data.'
          }
        ],
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
        exercises: [
          {
            id: 'network-diagram-creation',
            title: 'Network diagram creation',
            description: 'Create a network diagram',
            type: 'practical',
            content: 'Design and create a diagram of a secure network architecture.'
          },
          {
            id: 'protocol-analysis',
            title: 'Protocol analysis',
            description: 'Analyze network protocols',
            type: 'analysis',
            content: 'Examine different network protocols and their security implications.'
          },
          {
            id: 'network-simulation',
            title: 'Network simulation',
            description: 'Simulate a network environment',
            type: 'simulation',
            content: 'Use a network simulation tool to create and test a secure network.'
          }
        ],
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
        exercises: [
          {
            id: 'wifi-security-audit',
            title: 'WiFi security audit',
            description: 'Conduct a WiFi security audit',
            type: 'practical',
            content: 'Evaluate the security of a WiFi network and identify vulnerabilities.'
          },
          {
            id: 'wifi-encryption-setup',
            title: 'Encryption setup',
            description: 'Set up WiFi encryption',
            type: 'practical',
            content: 'Configure secure encryption settings for a WiFi network.'
          },
          {
            id: 'wifi-attack-simulation',
            title: 'Attack simulation',
            description: 'Simulate WiFi attacks',
            type: 'simulation',
            content: 'Use tools to simulate common WiFi attacks and understand their impact.'
          }
        ],
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
        exercises: [
          {
            id: 'firewall-configuration',
            title: 'Firewall configuration',
            description: 'Configure a firewall',
            type: 'practical',
            content: 'Set up and configure a firewall to protect a network.'
          },
          {
            id: 'rule-creation',
            title: 'Rule creation',
            description: 'Create firewall rules',
            type: 'practical',
            content: 'Develop and implement effective firewall rules for different scenarios.'
          },
          {
            id: 'network-monitoring',
            title: 'Network monitoring',
            description: 'Monitor network traffic',
            type: 'practical',
            content: 'Use tools to monitor network traffic and identify suspicious activity.'
          }
        ],
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
        exercises: [
          {
            id: 'vpn-configuration',
            title: 'VPN configuration',
            description: 'Configure a VPN',
            type: 'practical',
            content: 'Set up and configure a VPN for secure remote access.'
          },
          {
            id: 'secure-connection-setup',
            title: 'Secure connection setup',
            description: 'Set up a secure remote connection',
            type: 'practical',
            content: 'Configure a secure remote connection using best practices.'
          },
          {
            id: 'protocol-comparison',
            title: 'Protocol comparison',
            description: 'Compare VPN protocols',
            type: 'analysis',
            content: 'Analyze and compare different VPN protocols for security and performance.'
          }
        ],
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
        exercises: [
          {
            id: 'network-monitoring-setup',
            title: 'Network monitoring setup',
            description: 'Set up network monitoring tools',
            type: 'practical',
            content: 'Configure and deploy network monitoring tools to detect suspicious activity.'
          },
          {
            id: 'traffic-capture',
            title: 'Traffic capture',
            description: 'Capture and analyze network traffic',
            type: 'practical',
            content: 'Use packet capture tools to collect and analyze network traffic.'
          },
          {
            id: 'log-analysis',
            title: 'Log analysis',
            description: 'Analyze network logs',
            type: 'analysis',
            content: 'Review and analyze network logs to identify security incidents.'
          }
        ],
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
        exercises: [
          {
            id: 'vulnerability-assessment',
            title: 'Vulnerability assessment',
            description: 'Assess system vulnerabilities',
            type: 'practical',
            content: 'Practice assessing system vulnerabilities using various tools and techniques.'
          },
          {
            id: 'penetration-testing',
            title: 'Penetration testing',
            description: 'Perform basic penetration testing',
            type: 'practical',
            content: 'Practice performing basic penetration testing to identify security weaknesses.'
          },
          {
            id: 'code-review',
            title: 'Code review',
            description: 'Review code for security vulnerabilities',
            type: 'practical',
            content: 'Practice reviewing code to identify security vulnerabilities and weaknesses.'
          }
        ],
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
        exercises: [
          {
            id: 'encryption-implementation',
            title: 'Encryption implementation',
            description: 'Implement basic encryption',
            type: 'practical',
            content: 'Practice implementing basic encryption algorithms to protect data.'
          },
          {
            id: 'hash-analysis',
            title: 'Hash analysis',
            description: 'Analyze cryptographic hashes',
            type: 'practical',
            content: 'Practice analyzing cryptographic hashes and understanding their properties.'
          },
          {
            id: 'signature-verification',
            title: 'Signature verification',
            description: 'Verify digital signatures',
            type: 'practical',
            content: 'Practice verifying digital signatures to ensure data integrity and authenticity.'
          }
        ],
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
        exercises: [
          {
            id: 'code-review-secure',
            title: 'Code review',
            description: 'Review code for security issues',
            type: 'practical',
            content: 'Practice reviewing code to identify and address security issues.'
          },
          {
            id: 'vulnerability-fixing',
            title: 'Vulnerability fixing',
            description: 'Fix identified vulnerabilities',
            type: 'practical',
            content: 'Practice fixing identified vulnerabilities in code samples.'
          },
          {
            id: 'secure-coding-practice',
            title: 'Secure coding practice',
            description: 'Apply secure coding principles',
            type: 'practical',
            content: 'Practice applying secure coding principles to prevent common vulnerabilities.'
          }
        ],
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
        exercises: [
          {
            id: 'api-security-audit',
            title: 'API security audit',
            description: 'Audit API security',
            type: 'practical',
            content: 'Practice auditing API security to identify potential vulnerabilities.'
          },
          {
            id: 'authentication-implementation',
            title: 'Authentication implementation',
            description: 'Implement secure authentication',
            type: 'practical',
            content: 'Practice implementing secure authentication mechanisms for APIs.'
          },
          {
            id: 'security-testing',
            title: 'Security testing',
            description: 'Test API security',
            type: 'practical',
            content: 'Practice testing API security to ensure proper protection.'
          }
        ],
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
        exercises: [
          {
            id: 'osint-investigation',
            title: 'OSINT investigation',
            description: 'Conduct open-source intelligence gathering',
            type: 'practical',
            content: 'Practice gathering intelligence from open sources to understand potential security risks.'
          },
          {
            id: 'network-reconnaissance',
            title: 'Network reconnaissance',
            description: 'Perform network reconnaissance',
            type: 'practical',
            content: 'Practice performing network reconnaissance to identify potential entry points.'
          },
          {
            id: 'social-engineering-assessment',
            title: 'Social engineering assessment',
            description: 'Assess social engineering vulnerabilities',
            type: 'practical',
            content: 'Practice assessing social engineering vulnerabilities in an organization.'
          }
        ],
        resources: ['OSINT tools', 'Scanning techniques', 'Reconnaissance methods']
      ,

        content: `
          <h2>Information Gathering & Reconnaissance</h2>
          <p>Reconnaissance is the first phase of ethical hacking, involving the collection of information about target systems, networks, and organizations using legal methods. Effective reconnaissance provides the foundation for all subsequent penetration testing activities.</p>
          
          <h3>OSINT Techniques</h3>
          <p>Open Source Intelligence (OSINT) involves gathering information from publicly available sources:</p>
          <ul>
            <li><strong>Domain Research:</strong> WHOIS lookups, DNS records, subdomain enumeration</li>
            <li><strong>Search Engine Reconnaissance:</strong> Advanced search operators, cached content, metadata analysis</li>
            <li><strong>Social Media Intelligence:</strong> Employee information, organizational structure, technology stack details</li>
            <li><strong>Public Records:</strong> Business filings, legal documents, financial reports</li>
          </ul>
          
          <h3>Network Scanning</h3>
          <p>Identifying active hosts, open ports, and running services:</p>
          <ul>
            <li><strong>Host Discovery:</strong> ICMP scanning, ARP scanning, TCP/UDP scanning</li>
            <li><strong>Port Scanning:</strong> TCP SYN/FIN/ACK scanning, UDP scanning, version detection</li>
            <li><strong>Network Mapping:</strong> Topology discovery, routing information, network boundaries</li>
            <li><strong>OS Fingerprinting:</strong> Identifying operating systems through behavior analysis</li>
          </ul>
          
          <h3>Service Enumeration</h3>
          <p>Gathering detailed information about discovered services:</p>
          <ul>
            <li><strong>Web Server Enumeration:</strong> Server type, version, technologies used</li>
            <li><strong>Database Enumeration:</strong> Database type, version, accessible instances</li>
            <li><strong>Service Banners:</strong> Collecting service identification information</li>
            <li><strong>Authentication Mechanisms:</strong> Identifying login portals and authentication types</li>
          </ul>
          
          <h3>Social Engineering Reconnaissance</h3>
          <p>Understanding the human element of security:</p>
          <ul>
            <li><strong>Organizational Structure:</strong> Key personnel, departments, reporting lines</li>
            <li><strong>Employee Information:</strong> Contact details, roles, responsibilities</li>
            <li><strong>Physical Security:</strong> Building layouts, security measures, access controls</li>
            <li><strong>Psychological Profiling:</strong> Understanding potential targets for social engineering</li>
          </ul>
          
          <h3>Reconnaissance Tools</h3>
          <ul>
            <li><strong>Passive Tools:</strong> Shodan, TheHarvester, Maltego, Recon-ng</li>
            <li><strong>Active Tools:</strong> Nmap, Masscan, Netcat, Fierce</li>
            <li><strong>Web Reconnaissance:</strong> Gobuster, Nikto, Wappalyzer, Google Dorks</li>
            <li><strong>Social Engineering Tools:</strong> Social-Engineer Toolkit (SET), LinkedIn tools</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Ethical Considerations</h4>
            <p>Always obtain proper authorization before conducting reconnaissance activities. Even passive information gathering can violate laws and regulations if performed without permission. Document your scope and authorization carefully.</p>
          </div>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Professional Tip</h4>
            <p>Organize your reconnaissance findings methodically. Create detailed maps of discovered assets, document all findings, and maintain a clear chain of evidence. This information will be crucial for later phases of penetration testing.</p>
          </div>
        `
      },
      {
        id: 'vulnerability-assessment',
        title: 'Vulnerability Assessment',
        description: 'Identify and assess security vulnerabilities',
        duration: '90 min',
        topics: ['Vulnerability scanning', 'Assessment methodologies', 'Risk analysis', 'Reporting'],
        exercises: [
          {
            id: 'vulnerability-scan',
            title: 'Vulnerability scan',
            description: 'Conduct a vulnerability scan',
            type: 'practical',
            content: 'Use vulnerability scanning tools to identify security weaknesses.'
          },
          {
            id: 'risk-assessment',
            title: 'Risk assessment',
            description: 'Perform a risk assessment',
            type: 'analysis',
            content: 'Analyze identified vulnerabilities and assess their risk level.'
          },
          {
            id: 'report-writing',
            title: 'Report writing',
            description: 'Write a vulnerability assessment report',
            type: 'practical',
            content: 'Create a comprehensive report documenting findings and recommendations.'
          }
        ],
        resources: ['Vulnerability databases', 'Assessment tools', 'Reporting templates']
      ,

        content: `
          <h2>Vulnerability Assessment</h2>
          <p>Vulnerability assessment is a systematic process of identifying, classifying, and prioritizing security vulnerabilities in systems, applications, and networks. This critical phase follows reconnaissance and provides the foundation for targeted exploitation during penetration testing.</p>
          
          <h3>Vulnerability Scanning</h3>
          <p>Automated identification of potential security weaknesses:</p>
          <ul>
            <li><strong>Network Vulnerability Scanning:</strong> Identifying weaknesses in network devices, services, and protocols</li>
            <li><strong>Web Application Scanning:</strong> Detecting vulnerabilities in web applications, APIs, and services</li>
            <li><strong>Database Scanning:</strong> Finding security issues in database management systems</li>
            <li><strong>Configuration Scanning:</strong> Identifying misconfigurations and insecure settings</li>
          </ul>
          
          <h3>Assessment Methodologies</h3>
          <p>Structured approaches to vulnerability assessment:</p>
          <ul>
            <li><strong>Black Box Testing:</strong> Testing without prior knowledge of the target system</li>
            <li><strong>White Box Testing:</strong> Testing with complete knowledge of the target system</li>
            <li><strong>Gray Box Testing:</strong> Testing with partial knowledge of the target system</li>
            <li><strong>Credentialed vs. Non-Credentialed Scanning:</strong> Scanning with or without authentication</li>
          </ul>
          
          <h3>Risk Analysis</h3>
          <p>Evaluating the impact and likelihood of identified vulnerabilities:</p>
          <ul>
            <li><strong>Vulnerability Scoring:</strong> Using CVSS (Common Vulnerability Scoring System)</li>
            <li><strong>Threat Modeling:</strong> Identifying potential threats and attack vectors</li>
            <li><strong>Impact Assessment:</strong> Evaluating potential business impact of vulnerabilities</li>
            <li><strong>Prioritization:</strong> Ranking vulnerabilities based on risk level</li>
          </ul>
          
          <h3>Reporting</h3>
          <p>Documenting and communicating assessment findings:</p>
          <ul>
            <li><strong>Executive Summary:</strong> High-level overview for management</li>
            <li><strong>Technical Report:</strong> Detailed findings for technical teams</li>
            <li><strong>Remediation Recommendations:</strong> Specific actions to address vulnerabilities</li>
            <li><strong>Verification Planning:</strong> Strategies to verify successful remediation</li>
          </ul>
          
          <h3>Vulnerability Assessment Tools</h3>
          <ul>
            <li><strong>Network Scanners:</strong> Nessus, OpenVAS, Nexpose, Qualys</li>
            <li><strong>Web Application Scanners:</strong> OWASP ZAP, Burp Suite, Acunetix</li>
            <li><strong>Database Scanners:</strong> AppDetectivePro, DbProtect, Scuba</li>
            <li><strong>Configuration Analyzers:</strong> Microsoft Baseline Security Analyzer, Lynis</li>
          </ul>
          
          <h3>Common Vulnerability Categories</h3>
          <ul>
            <li><strong>Missing Patches:</strong> Unpatched software and systems</li>
            <li><strong>Misconfigurations:</strong> Insecure default settings, unnecessary services</li>
            <li><strong>Authentication Issues:</strong> Weak credentials, improper session management</li>
            <li><strong>Authorization Flaws:</strong> Insufficient access controls, privilege escalation paths</li>
            <li><strong>Input Validation:</strong> Injection vulnerabilities, cross-site scripting</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Best Practice</h4>
            <p>Establish a regular vulnerability assessment schedule. Systems should be scanned after significant changes, patch deployments, or at regular intervals (weekly, monthly, quarterly) depending on the criticality of the assets.</p>
          </div>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Industry Insight</h4>
            <p>False positives are common in automated vulnerability scanning. Always verify critical findings manually before reporting them or initiating remediation efforts. This verification step saves valuable time and resources.</p>
          </div>
        `
      },
      {
        id: 'exploitation',
        title: 'Exploitation Techniques',
        description: 'Learn how vulnerabilities are exploited',
        duration: '100 min',
        topics: ['Exploit development', 'Metasploit framework', 'Custom exploits', 'Post-exploitation'],
        exercises: [
          {
            id: 'exploit-development',
            title: 'Exploit development',
            description: 'Develop a basic exploit',
            type: 'coding',
            content: 'Create a simple exploit to understand vulnerability exploitation.'
          },
          {
            id: 'metasploit-usage',
            title: 'Metasploit usage',
            description: 'Use the Metasploit framework',
            type: 'practical',
            content: 'Practice using the Metasploit framework for vulnerability exploitation.'
          },
          {
            id: 'post-exploitation-techniques',
            title: 'Post-exploitation techniques',
            description: 'Learn post-exploitation techniques',
            type: 'practical',
            content: 'Practice techniques used after successful exploitation of a system.'
          }
        ],
        resources: ['Exploit development guide', 'Metasploit documentation', 'Exploitation techniques']
      ,

        content: `
          <h2>Exploitation Techniques</h2>
          <p>Exploitation is the process of leveraging identified vulnerabilities to gain unauthorized access to systems, applications, or data. This phase follows reconnaissance and vulnerability assessment in the ethical hacking methodology.</p>
          
          <h3>Exploit Development</h3>
          <p>Creating custom exploits to target specific vulnerabilities:</p>
          <ul>
            <li><strong>Buffer Overflow Exploitation:</strong> Manipulating memory to execute arbitrary code</li>
            <li><strong>Format String Attacks:</strong> Exploiting improper string formatting</li>
            <li><strong>Race Condition Exploitation:</strong> Taking advantage of timing issues in code execution</li>
            <li><strong>Shellcode Development:</strong> Creating payload code for execution after exploitation</li>
          </ul>
          
          <h3>Metasploit Framework</h3>
          <p>Using the industry-standard exploitation framework:</p>
          <ul>
            <li><strong>Exploit Modules:</strong> Pre-built exploits for known vulnerabilities</li>
            <li><strong>Payload Selection:</strong> Choosing appropriate code to execute after exploitation</li>
            <li><strong>Auxiliary Modules:</strong> Scanning, fuzzing, and information gathering tools</li>
            <li><strong>Post-Exploitation Modules:</strong> Tools for maintaining access and gathering information</li>
          </ul>
          
          <h3>Custom Exploits</h3>
          <p>Developing specialized exploits for unique scenarios:</p>
          <ul>
            <li><strong>Zero-Day Exploitation:</strong> Exploiting previously unknown vulnerabilities</li>
            <li><strong>Exploit Chaining:</strong> Combining multiple vulnerabilities for greater impact</li>
            <li><strong>Evasion Techniques:</strong> Bypassing security controls and detection mechanisms</li>
            <li><strong>Exploit Customization:</strong> Modifying existing exploits for specific targets</li>
          </ul>
          
          <h3>Post-Exploitation</h3>
          <p>Actions taken after successful exploitation:</p>
          <ul>
            <li><strong>Privilege Escalation:</strong> Gaining higher-level access rights</li>
            <li><strong>Persistence Mechanisms:</strong> Ensuring continued access to compromised systems</li>
            <li><strong>Lateral Movement:</strong> Expanding access to other systems in the network</li>
            <li><strong>Data Exfiltration:</strong> Extracting valuable information from compromised systems</li>
          </ul>
          
          <h3>Exploitation Tools</h3>
          <ul>
            <li><strong>Metasploit Framework:</strong> Comprehensive exploitation toolkit</li>
            <li><strong>PowerShell Empire:</strong> Post-exploitation framework</li>
            <li><strong>BeEF (Browser Exploitation Framework):</strong> Web browser exploitation</li>
            <li><strong>Immunity Debugger/IDA Pro:</strong> Tools for analyzing and developing exploits</li>
          </ul>
          
          <h3>Exploitation Methodology</h3>
          <ul>
            <li><strong>Information Gathering:</strong> Collecting target-specific details</li>
            <li><strong>Vulnerability Verification:</strong> Confirming the existence of vulnerabilities</li>
            <li><strong>Exploit Selection/Development:</strong> Choosing or creating appropriate exploits</li>
            <li><strong>Execution and Verification:</strong> Running exploits and confirming success</li>
            <li><strong>Post-Exploitation Activities:</strong> Actions after successful exploitation</li>
            <li><strong>Clean-up:</strong> Removing artifacts and evidence of exploitation</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Ethical Considerations</h4>
            <p>Exploitation techniques must only be used with explicit permission and within the defined scope of a penetration test or security assessment. Unauthorized exploitation is illegal and unethical. Always document all exploitation activities thoroughly.</p>
          </div>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Safety Precautions</h4>
            <p>Some exploits can cause system instability or service disruption. Always understand the potential impact of exploits before using them, especially in production environments. Consider using staging environments when possible, and always have rollback plans ready.</p>
          </div>
        `
      },
      {
        id: 'web-exploitation',
        title: 'Web Application Exploitation',
        description: 'Exploit web application vulnerabilities',
        duration: '95 min',
        topics: ['SQL injection', 'XSS exploitation', 'CSRF attacks', 'Authentication bypass'],
        exercises: [
          {
            id: 'web-application-testing',
            title: 'Web application testing',
            description: 'Test web applications for vulnerabilities',
            type: 'practical',
            content: 'Use tools and techniques to identify vulnerabilities in web applications.'
          },
          {
            id: 'vulnerability-exploitation-web',
            title: 'Vulnerability exploitation',
            description: 'Exploit web application vulnerabilities',
            type: 'practical',
            content: 'Practice exploiting common web application vulnerabilities in a controlled environment.'
          },
          {
            id: 'security-assessment-web',
            title: 'Security assessment',
            description: 'Conduct a web application security assessment',
            type: 'analysis',
            content: 'Perform a comprehensive security assessment of a web application.'
          }
        ],
        resources: ['Web exploitation guide', 'Testing tools', 'Vulnerability examples']
      ,

        content: `
          <h2>Web Application Exploitation</h2>
          <p>Web applications are prime targets for attackers due to their widespread use, complexity, and direct exposure to the internet. This lesson covers techniques for identifying and exploiting common web application vulnerabilities.</p>
          
          <h3>SQL Injection</h3>
          <p>Exploiting database query vulnerabilities:</p>
          <ul>
            <li><strong>Basic SQL Injection:</strong> Manipulating query logic with single quotes and comments</li>
            <li><strong>Union-Based Injection:</strong> Extracting data from different database tables</li>
            <li><strong>Error-Based Injection:</strong> Leveraging database error messages to extract information</li>
            <li><strong>Blind SQL Injection:</strong> Extracting data when no output is visible</li>
            <li><strong>Time-Based Injection:</strong> Using time delays to extract information</li>
          </ul>
          
          <h3>Cross-Site Scripting (XSS)</h3>
          <p>Injecting malicious scripts into web pages:</p>
          <ul>
            <li><strong>Reflected XSS:</strong> Non-persistent attacks requiring user interaction</li>
            <li><strong>Stored XSS:</strong> Persistent attacks affecting all visitors to a page</li>
            <li><strong>DOM-Based XSS:</strong> Exploiting client-side JavaScript vulnerabilities</li>
            <li><strong>XSS Payloads:</strong> Cookie theft, keylogging, phishing, session hijacking</li>
          </ul>
          
          <h3>Cross-Site Request Forgery (CSRF)</h3>
          <p>Tricking users into performing unwanted actions:</p>
          <ul>
            <li><strong>CSRF Attack Vectors:</strong> Image tags, hidden iframes, XHR requests</li>
            <li><strong>State-Changing Operations:</strong> Targeting account settings, financial transactions</li>
            <li><strong>CSRF Token Bypass:</strong> Methods to circumvent protection mechanisms</li>
            <li><strong>Same-Site Cookie Exploitation:</strong> Working around browser protections</li>
          </ul>
          
          <h3>Authentication Bypass</h3>
          <p>Circumventing login mechanisms:</p>
          <ul>
            <li><strong>Brute Force Attacks:</strong> Systematically trying username/password combinations</li>
            <li><strong>Credential Stuffing:</strong> Using leaked credentials from other breaches</li>
            <li><strong>Logic Flaws:</strong> Exploiting flaws in authentication workflows</li>
            <li><strong>Session Management Attacks:</strong> Session fixation, hijacking, and prediction</li>
          </ul>
          
          <h3>Other Common Web Vulnerabilities</h3>
          <ul>
            <li><strong>Server-Side Request Forgery (SSRF):</strong> Forcing the server to make unintended requests</li>
            <li><strong>XML External Entity (XXE):</strong> Exploiting XML parsers to access local files</li>
            <li><strong>Insecure Deserialization:</strong> Manipulating serialized objects to execute code</li>
            <li><strong>File Upload Vulnerabilities:</strong> Uploading malicious files for execution</li>
            <li><strong>API Vulnerabilities:</strong> Exploiting weaknesses in application programming interfaces</li>
          </ul>
          
          <h3>Web Exploitation Tools</h3>
          <ul>
            <li><strong>Burp Suite:</strong> Comprehensive web application security testing platform</li>
            <li><strong>OWASP ZAP:</strong> Open-source web application security scanner</li>
            <li><strong>SQLmap:</strong> Automated SQL injection tool</li>
            <li><strong>XSStrike:</strong> Advanced XSS detection and exploitation tool</li>
            <li><strong>Commix:</strong> Command injection exploitation tool</li>
          </ul>
          
          <h3>Exploitation Methodology</h3>
          <ul>
            <li><strong>Mapping the Application:</strong> Identifying entry points and functionality</li>
            <li><strong>Parameter Analysis:</strong> Testing all input parameters for vulnerabilities</li>
            <li><strong>Authentication Testing:</strong> Probing login mechanisms and session management</li>
            <li><strong>Business Logic Testing:</strong> Identifying flaws in application workflows</li>
            <li><strong>Exploitation:</strong> Leveraging identified vulnerabilities</li>
            <li><strong>Post-Exploitation:</strong> Expanding access and extracting data</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Defense Perspective</h4>
            <p>Understanding web application exploitation is crucial for developers and security professionals to implement effective defenses. Key protective measures include input validation, output encoding, parameterized queries, content security policies, and regular security testing.</p>
          </div>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">OWASP Resources</h4>
            <p>The Open Web Application Security Project (OWASP) provides extensive resources for web application security, including the OWASP Top 10, testing guides, and cheat sheets. These resources are invaluable for both attackers and defenders.</p>
          </div>
        `
      },
      {
        id: 'wireless-exploitation',
        title: 'Wireless Network Exploitation',
        description: 'Test wireless network security',
        duration: '80 min',
        topics: ['WiFi attacks', 'Bluetooth security', 'RFID security', 'Wireless monitoring'],
        exercises: [
          {
            id: 'wifi-penetration-testing',
            title: 'WiFi penetration testing',
            description: 'Conduct WiFi penetration testing',
            type: 'practical',
            content: 'Perform penetration testing on wireless networks to identify vulnerabilities.'
          },
          {
            id: 'bluetooth-security-assessment',
            title: 'Bluetooth security assessment',
            description: 'Assess Bluetooth security',
            type: 'analysis',
            content: 'Evaluate the security of Bluetooth devices and connections.'
          },
          {
            id: 'rfid-analysis',
            title: 'RFID analysis',
            description: 'Analyze RFID security',
            type: 'analysis',
            content: 'Examine RFID systems for security vulnerabilities.'
          }
        ],
        resources: ['Wireless security guide', 'Attack tools', 'Security assessment methods']
      ,

        content: `
          <h2>Wireless Network Exploitation</h2>
          <p>Wireless networks present unique security challenges due to their broadcast nature and various implementation vulnerabilities. This lesson covers techniques for testing and exploiting wireless network security.</p>
          
          <h3>WiFi Attacks</h3>
          <p>Exploiting vulnerabilities in wireless networks:</p>
          <ul>
            <li><strong>WEP Cracking:</strong> Exploiting weaknesses in the outdated WEP encryption</li>
            <li><strong>WPA/WPA2 Password Attacks:</strong> Dictionary attacks, brute force, and PMKID attacks</li>
            <li><strong>WPA3 Vulnerabilities:</strong> Dragonblood attacks and other emerging threats</li>
            <li><strong>Evil Twin Attacks:</strong> Creating rogue access points to intercept traffic</li>
            <li><strong>Deauthentication Attacks:</strong> Forcing clients to disconnect and reconnect</li>
          </ul>
          
          <h3>Wireless Reconnaissance</h3>
          <p>Gathering information about wireless networks:</p>
          <ul>
            <li><strong>Passive Scanning:</strong> Monitoring wireless traffic without transmitting</li>
            <li><strong>Active Scanning:</strong> Sending probe requests to discover networks</li>
            <li><strong>Client Device Discovery:</strong> Identifying connected devices</li>
            <li><strong>Traffic Analysis:</strong> Examining wireless frames and protocols</li>
            <li><strong>GPS Mapping:</strong> Creating maps of wireless networks (wardriving)</li>
          </ul>
          
          <h3>Bluetooth Security</h3>
          <p>Exploiting vulnerabilities in Bluetooth technology:</p>
          <ul>
            <li><strong>Bluejacking:</strong> Sending unsolicited messages to Bluetooth devices</li>
            <li><strong>Bluesnarfing:</strong> Unauthorized access to information on Bluetooth devices</li>
            <li><strong>Bluebugging:</strong> Taking control of Bluetooth-enabled devices</li>
            <li><strong>BIAS Attack:</strong> Bluetooth Impersonation AttackS on secure connections</li>
            <li><strong>Bluetooth Low Energy (BLE) Vulnerabilities:</strong> Exploiting IoT devices</li>
          </ul>
          
          <h3>RFID Security</h3>
          <p>Testing and exploiting Radio-Frequency Identification systems:</p>
          <ul>
            <li><strong>RFID Cloning:</strong> Duplicating RFID tags and cards</li>
            <li><strong>Relay Attacks:</strong> Extending the range of RFID communications</li>
            <li><strong>Side-Channel Attacks:</strong> Analyzing power consumption or electromagnetic emissions</li>
            <li><strong>Cryptographic Attacks:</strong> Exploiting weak encryption in RFID systems</li>
          </ul>
          
          <h3>Wireless Monitoring</h3>
          <p>Tools and techniques for wireless network analysis:</p>
          <ul>
            <li><strong>Packet Capture:</strong> Collecting and analyzing wireless traffic</li>
            <li><strong>Protocol Analysis:</strong> Examining wireless protocols for vulnerabilities</li>
            <li><strong>Signal Analysis:</strong> Measuring and mapping signal strength</li>
            <li><strong>Spectrum Analysis:</strong> Identifying interference and rogue devices</li>
          </ul>
          
          <h3>Wireless Exploitation Tools</h3>
          <ul>
            <li><strong>Aircrack-ng Suite:</strong> Comprehensive wireless security assessment toolkit</li>
            <li><strong>Kismet:</strong> Wireless network detector and sniffer</li>
            <li><strong>Wireshark:</strong> Network protocol analyzer with wireless capabilities</li>
            <li><strong>Wifite:</strong> Automated wireless attack tool</li>
            <li><strong>Bluetooth Tools:</strong> Bluelog, Bluesnarfer, Ubertooth</li>
            <li><strong>RFID Tools:</strong> Proxmark3, RFID Guardian</li>
          </ul>
          
          <h3>Countermeasures and Defenses</h3>
          <ul>
            <li><strong>Strong Encryption:</strong> Using WPA2/WPA3 with strong passwords</li>
            <li><strong>Network Segmentation:</strong> Separating guest and internal networks</li>
            <li><strong>MAC Filtering:</strong> Restricting access based on device identifiers</li>
            <li><strong>Wireless IDS/IPS:</strong> Detecting and preventing wireless attacks</li>
            <li><strong>Regular Security Assessments:</strong> Testing wireless security periodically</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Legal Considerations</h4>
            <p>Wireless network testing without explicit permission is illegal in most jurisdictions. Always obtain proper authorization before conducting any wireless security assessments. Be aware of local laws regarding radio frequency monitoring and transmission.</p>
          </div>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Equipment Recommendations</h4>
            <p>For effective wireless security testing, use wireless adapters that support monitor mode and packet injection. External antennas can improve range and signal quality. Consider specialized hardware like Ubertooth for Bluetooth testing and Proxmark3 for RFID analysis.</p>
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
        exercises: [
          {
            id: 'incident-simulation',
            title: 'Incident simulation',
            description: 'Simulate a security incident',
            type: 'simulation',
            content: 'Participate in a simulated security incident to practice response procedures.'
          },
          {
            id: 'response-planning',
            title: 'Response planning',
            description: 'Develop an incident response plan',
            type: 'practical',
            content: 'Create a comprehensive incident response plan for different types of security incidents.'
          },
          {
            id: 'recovery-procedures',
            title: 'Recovery procedures',
            description: 'Establish recovery procedures',
            type: 'practical',
            content: 'Develop procedures for recovering from security incidents and returning to normal operations.'
          }
        ],
        resources: ['Incident response guide', 'Procedures template', 'Recovery checklist']
      ,

        content: `
          <h2>Security Incident Handling</h2>
          <p>Security incident handling is the structured approach to addressing and managing the aftermath of a security breach or attack. A well-defined incident response process helps organizations minimize damage, reduce recovery time and costs, and prevent similar incidents in the future.</p>
          
          <h3>Incident Classification</h3>
          <p>Categorizing security incidents by type and severity:</p>
          <ul>
            <li><strong>Malware Incidents:</strong> Viruses, worms, ransomware, trojans</li>
            <li><strong>Network Intrusions:</strong> Unauthorized access, data breaches</li>
            <li><strong>Denial of Service:</strong> Disruption of services and availability</li>
            <li><strong>Social Engineering:</strong> Phishing, pretexting, baiting</li>
            <li><strong>Insider Threats:</strong> Malicious or negligent actions by authorized users</li>
          </ul>
          
          <h3>Incident Response Lifecycle</h3>
          <p>The NIST incident response process consists of four main phases:</p>
          <ul>
            <li><strong>Preparation:</strong> Developing incident response plans, policies, and capabilities</li>
            <li><strong>Detection & Analysis:</strong> Identifying and investigating potential incidents</li>
            <li><strong>Containment, Eradication & Recovery:</strong> Limiting damage and restoring systems</li>
            <li><strong>Post-Incident Activity:</strong> Learning from incidents and improving response</li>
          </ul>
          
          <h3>Response Procedures</h3>
          <p>Structured approaches to handling security incidents:</p>
          <ul>
            <li><strong>Initial Response:</strong> First actions upon incident detection</li>
            <li><strong>Incident Triage:</strong> Assessing severity and prioritizing response</li>
            <li><strong>Investigation Techniques:</strong> Gathering and analyzing evidence</li>
            <li><strong>Communication Protocols:</strong> Internal and external notification procedures</li>
            <li><strong>Documentation Requirements:</strong> Maintaining incident records</li>
          </ul>
          
          <h3>Containment Strategies</h3>
          <p>Methods to limit the impact of security incidents:</p>
          <ul>
            <li><strong>Short-term Containment:</strong> Immediate actions to limit damage</li>
            <li><strong>System Isolation:</strong> Disconnecting affected systems from networks</li>
            <li><strong>Credential Management:</strong> Changing passwords and access controls</li>
            <li><strong>Traffic Filtering:</strong> Blocking malicious network traffic</li>
            <li><strong>Long-term Containment:</strong> Temporary fixes to allow system operation</li>
          </ul>
          
          <h3>Recovery Procedures</h3>
          <p>Restoring systems and operations after an incident:</p>
          <ul>
            <li><strong>System Restoration:</strong> Rebuilding from clean backups</li>
            <li><strong>Malware Removal:</strong> Eliminating all traces of malicious code</li>
            <li><strong>Vulnerability Patching:</strong> Addressing exploited weaknesses</li>
            <li><strong>Service Restoration:</strong> Bringing systems back online securely</li>
            <li><strong>Monitoring:</strong> Watching for signs of recurring issues</li>
          </ul>
          
          <h3>Incident Response Team</h3>
          <p>Key roles and responsibilities in incident handling:</p>
          <ul>
            <li><strong>Incident Response Manager:</strong> Coordinates overall response</li>
            <li><strong>Technical Lead:</strong> Directs technical investigation and remediation</li>
            <li><strong>Communications Coordinator:</strong> Manages internal and external communications</li>
            <li><strong>Legal Counsel:</strong> Addresses legal and regulatory requirements</li>
            <li><strong>Executive Sponsor:</strong> Provides authority and resources</li>
          </ul>
          
          <h3>Incident Response Tools</h3>
          <ul>
            <li><strong>SIEM Systems:</strong> Security Information and Event Management tools</li>
            <li><strong>Forensic Tools:</strong> Disk imaging, memory analysis, network capture</li>
            <li><strong>Malware Analysis:</strong> Sandboxes, reverse engineering tools</li>
            <li><strong>Ticketing Systems:</strong> Incident tracking and management</li>
            <li><strong>Communication Platforms:</strong> Secure messaging and collaboration tools</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Regulatory Considerations</h4>
            <p>Many industries have specific requirements for incident reporting and handling. Be familiar with regulations like GDPR, HIPAA, PCI-DSS, and others that may apply to your organization. These regulations often specify timeframes for reporting breaches and requirements for customer notification.</p>
          </div>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Lessons Learned</h4>
            <p>The post-incident review is one of the most valuable parts of the incident response process. Conduct thorough reviews after each significant incident to identify what went well, what could be improved, and how to prevent similar incidents in the future. Document these lessons and update your incident response plan accordingly.</p>
          </div>
        `
      },
      {
        id: 'digital-forensics',
        title: 'Digital Forensics',
        description: 'Investigate digital evidence and cybercrimes',
        duration: '90 min',
        topics: ['Forensic methodology', 'Evidence collection', 'Analysis techniques', 'Reporting'],
        exercises: [
          {
            id: 'evidence-collection',
            title: 'Evidence collection',
            description: 'Collect digital evidence',
            type: 'practical',
            content: 'Practice proper techniques for collecting and preserving digital evidence.'
          },
          {
            id: 'forensic-analysis',
            title: 'Forensic analysis',
            description: 'Analyze digital evidence',
            type: 'analysis',
            content: 'Use forensic tools to analyze digital evidence and identify relevant information.'
          },
          {
            id: 'forensic-report-writing',
            title: 'Report writing',
            description: 'Write a forensic analysis report',
            type: 'practical',
            content: 'Create a detailed forensic analysis report documenting findings and conclusions.'
          }
        ],
        resources: ['Forensics guide', 'Analysis tools', 'Evidence handling procedures']
      ,

        content: `
          <h2>Digital Forensics</h2>
          <p>Digital forensics is the process of uncovering and interpreting electronic data to preserve evidence in its most original form while performing a structured investigation. It involves collecting, identifying, and validating digital information to reconstruct past events and is crucial for both criminal investigations and corporate incident response.</p>
          
          <h3>Forensic Principles</h3>
          <p>Core principles that guide digital forensic investigations:</p>
          <ul>
            <li><strong>Chain of Custody:</strong> Documenting how evidence was collected, analyzed, and preserved</li>
            <li><strong>Data Integrity:</strong> Ensuring evidence is not altered during collection and analysis</li>
            <li><strong>Documentation:</strong> Maintaining detailed records of all forensic processes</li>
            <li><strong>Repeatability:</strong> Ensuring forensic processes can be replicated by other investigators</li>
            <li><strong>Reliability:</strong> Using validated tools and methods for evidence collection</li>
          </ul>
          
          <h3>Evidence Collection</h3>
          <p>Methods and procedures for gathering digital evidence:</p>
          <ul>
            <li><strong>Live Acquisition:</strong> Collecting volatile data from running systems</li>
            <li><strong>Dead Acquisition:</strong> Creating forensic images of non-running systems</li>
            <li><strong>Network Capture:</strong> Recording network traffic for analysis</li>
            <li><strong>Memory Forensics:</strong> Extracting and analyzing system RAM</li>
            <li><strong>Mobile Device Acquisition:</strong> Specialized techniques for smartphones and tablets</li>
          </ul>
          
          <h3>Disk Forensics</h3>
          <p>Analyzing storage media for evidence:</p>
          <ul>
            <li><strong>File System Analysis:</strong> Examining file structures and metadata</li>
            <li><strong>Data Carving:</strong> Recovering deleted or fragmented files</li>
            <li><strong>Slack Space Analysis:</strong> Examining unused portions of allocated disk space</li>
            <li><strong>Partition Analysis:</strong> Investigating disk partitioning schemes</li>
            <li><strong>Timeline Analysis:</strong> Reconstructing the sequence of events on a system</li>
          </ul>
          
          <h3>Memory Forensics</h3>
          <p>Analyzing system RAM for volatile evidence:</p>
          <ul>
            <li><strong>Process Analysis:</strong> Examining running processes and their memory spaces</li>
            <li><strong>Network Connections:</strong> Identifying active network connections</li>
            <li><strong>Loaded Modules:</strong> Analyzing loaded drivers and DLLs</li>
            <li><strong>Registry Hives:</strong> Examining registry data in memory</li>
            <li><strong>Malware Detection:</strong> Identifying malicious code in memory</li>
          </ul>
          
          <h3>Network Forensics</h3>
          <p>Analyzing network traffic and logs for evidence:</p>
          <ul>
            <li><strong>Packet Analysis:</strong> Examining captured network packets</li>
            <li><strong>Log Analysis:</strong> Reviewing firewall, IDS, and server logs</li>
            <li><strong>Flow Analysis:</strong> Examining network flow data</li>
            <li><strong>Email Forensics:</strong> Investigating email headers and content</li>
            <li><strong>Web Forensics:</strong> Analyzing web server logs and browser artifacts</li>
          </ul>
          
          <h3>Mobile Forensics</h3>
          <p>Specialized techniques for mobile devices:</p>
          <ul>
            <li><strong>Data Extraction Methods:</strong> Logical, file system, and physical acquisition</li>
            <li><strong>App Analysis:</strong> Examining mobile application data</li>
            <li><strong>Call and Message Records:</strong> Recovering communication history</li>
            <li><strong>Location Data:</strong> Analyzing GPS and location information</li>
            <li><strong>Cloud Artifacts:</strong> Investigating cloud-synced mobile data</li>
          </ul>
          
          <h3>Forensic Tools</h3>
          <p>Essential tools for digital forensic investigations:</p>
          <ul>
            <li><strong>Disk Imaging:</strong> FTK Imager, dd, Guymager</li>
            <li><strong>Forensic Suites:</strong> EnCase, Autopsy, X-Ways Forensics</li>
            <li><strong>Memory Analysis:</strong> Volatility, Rekall, Memoryze</li>
            <li><strong>Network Analysis:</strong> Wireshark, NetworkMiner, Zeek</li>
            <li><strong>Mobile Forensics:</strong> Cellebrite, Oxygen Forensic, Magnet AXIOM</li>
          </ul>
          
          <h3>Forensic Analysis</h3>
          <p>Techniques for examining collected evidence:</p>
          <ul>
            <li><strong>Artifact Analysis:</strong> Examining system and application artifacts</li>
            <li><strong>Malware Analysis:</strong> Identifying and analyzing malicious code</li>
            <li><strong>Timeline Creation:</strong> Reconstructing the sequence of events</li>
            <li><strong>Data Correlation:</strong> Connecting evidence from multiple sources</li>
            <li><strong>Reporting:</strong> Documenting findings in a clear, concise manner</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Legal Considerations</h4>
            <p>Digital forensic investigations must adhere to legal requirements to ensure evidence admissibility in court. This includes proper search authorization, maintaining chain of custody, using validated tools and methods, and ensuring privacy laws are respected. Forensic investigators should work closely with legal counsel to ensure their processes meet all applicable legal standards.</p>
          </div>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Anti-Forensics Awareness</h4>
            <p>Be aware of anti-forensic techniques that may be used to hide evidence, such as data encryption, steganography, timestamp manipulation, secure deletion, and artifact wiping. Understanding these techniques helps forensic investigators develop countermeasures and adapt their investigation methods accordingly.</p>
          </div>
        `
      },
      {
        id: 'malware-analysis',
        title: 'Malware Analysis',
        description: 'Analyze and understand malicious software',
        duration: '85 min',
        topics: ['Static analysis', 'Dynamic analysis', 'Behavioral analysis', 'Reverse engineering'],
        exercises: [
          {
            id: 'malware-analysis',
            title: 'Malware analysis',
            description: 'Analyze malware samples',
            type: 'analysis',
            content: 'Examine malware samples to understand their functionality and impact.'
          },
          {
            id: 'behavioral-analysis',
            title: 'Behavioral analysis',
            description: 'Conduct behavioral analysis of malware',
            type: 'analysis',
            content: 'Observe and document the behavior of malware in a controlled environment.'
          },
          {
            id: 'reverse-engineering',
            title: 'Reverse engineering',
            description: 'Reverse engineer malware',
            type: 'coding',
            content: 'Use reverse engineering techniques to analyze malware code and functionality.'
          }
        ],
        resources: ['Malware analysis guide', 'Analysis tools', 'Reverse engineering techniques']
      ,

        content: `
          <h2>Malware Analysis</h2>
          <p>Malware analysis is the process of studying malicious software to understand its functionality, origin, and potential impact. This discipline combines reverse engineering, behavioral analysis, and threat intelligence to identify and mitigate malware threats effectively.</p>
          
          <h3>Types of Malware</h3>
          <p>Understanding different malware categories and their characteristics:</p>
          <ul>
            <li><strong>Viruses:</strong> Self-replicating code that attaches to legitimate programs</li>
            <li><strong>Worms:</strong> Self-propagating malware that spreads across networks</li>
            <li><strong>Trojans:</strong> Malware disguised as legitimate software</li>
            <li><strong>Ransomware:</strong> Encrypts data and demands payment for decryption</li>
            <li><strong>Rootkits:</strong> Conceals malicious activities by modifying operating system functions</li>
            <li><strong>Backdoors:</strong> Provides unauthorized remote access to systems</li>
            <li><strong>Spyware:</strong> Collects information without user consent</li>
            <li><strong>Botnets:</strong> Networks of compromised computers controlled remotely</li>
          </ul>
          
          <h3>Analysis Environment</h3>
          <p>Setting up secure environments for malware analysis:</p>
          <ul>
            <li><strong>Isolated Networks:</strong> Air-gapped or segregated network environments</li>
            <li><strong>Virtual Machines:</strong> Isolated and restorable analysis platforms</li>
            <li><strong>Sandboxes:</strong> Controlled execution environments for observing behavior</li>
            <li><strong>Hardware Considerations:</strong> Physical isolation and monitoring tools</li>
            <li><strong>Network Monitoring:</strong> Capturing and analyzing malware communications</li>
          </ul>
          
          <h3>Static Analysis</h3>
          <p>Examining malware without execution:</p>
          <ul>
            <li><strong>File Properties:</strong> Examining metadata, signatures, and hashes</li>
            <li><strong>String Analysis:</strong> Extracting readable text from binary files</li>
            <li><strong>Header Analysis:</strong> Examining file structure and format</li>
            <li><strong>Disassembly:</strong> Converting machine code to assembly language</li>
            <li><strong>Code Analysis:</strong> Identifying functions, algorithms, and logic</li>
            <li><strong>Packer Detection:</strong> Identifying obfuscation techniques</li>
          </ul>
          
          <h3>Dynamic Analysis</h3>
          <p>Observing malware behavior during execution:</p>
          <ul>
            <li><strong>Process Monitoring:</strong> Tracking created processes and their activities</li>
            <li><strong>File System Changes:</strong> Monitoring file creation, modification, and deletion</li>
            <li><strong>Registry Modifications:</strong> Tracking changes to the system registry</li>
            <li><strong>Network Activity:</strong> Capturing and analyzing network communications</li>
            <li><strong>API Calls:</strong> Monitoring interactions with operating system functions</li>
            <li><strong>Memory Analysis:</strong> Examining runtime memory for hidden components</li>
          </ul>
          
          <h3>Advanced Analysis Techniques</h3>
          <p>Specialized methods for complex malware:</p>
          <ul>
            <li><strong>Code Debugging:</strong> Step-by-step execution and state examination</li>
            <li><strong>Hooking:</strong> Intercepting API calls and system functions</li>
            <li><strong>Decryption:</strong> Revealing encrypted code and data</li>
            <li><strong>Unpacking:</strong> Extracting compressed or obfuscated code</li>
            <li><strong>Emulation:</strong> Simulating execution in controlled environments</li>
            <li><strong>Memory Forensics:</strong> In-depth analysis of memory dumps</li>
          </ul>
          
          <h3>Malware Evasion Techniques</h3>
          <p>Understanding how malware attempts to avoid detection:</p>
          <ul>
            <li><strong>Anti-VM Techniques:</strong> Detecting and evading virtual machines</li>
            <li><strong>Anti-Debugging:</strong> Preventing or detecting debugger presence</li>
            <li><strong>Code Obfuscation:</strong> Disguising code functionality</li>
            <li><strong>Polymorphism:</strong> Changing code structure while maintaining functionality</li>
            <li><strong>Encryption:</strong> Hiding code and data through encryption</li>
            <li><strong>Timing-Based Evasion:</strong> Delaying execution to evade sandboxes</li>
          </ul>
          
          <h3>Malware Analysis Tools</h3>
          <p>Essential tools for effective malware analysis:</p>
          <ul>
            <li><strong>Disassemblers:</strong> IDA Pro, Ghidra, Radare2</li>
            <li><strong>Debuggers:</strong> OllyDbg, x64dbg, WinDbg</li>
            <li><strong>Dynamic Analysis:</strong> Process Monitor, Process Explorer, Regshot</li>
            <li><strong>Network Analysis:</strong> Wireshark, NetworkMiner, INetSim</li>
            <li><strong>Sandboxes:</strong> Cuckoo Sandbox, ANY.RUN, Joe Sandbox</li>
            <li><strong>Memory Analysis:</strong> Volatility, Rekall, Redline</li>
            <li><strong>Static Analysis:</strong> PEiD, PEStudio, FLOSS</li>
          </ul>
          
          <h3>Malware Analysis Reporting</h3>
          <p>Documenting and communicating analysis findings:</p>
          <ul>
            <li><strong>Technical Indicators:</strong> Hashes, signatures, network indicators</li>
            <li><strong>Behavioral Analysis:</strong> Observed actions and their impact</li>
            <li><strong>Threat Assessment:</strong> Evaluating potential damage and targets</li>
            <li><strong>Mitigation Recommendations:</strong> Suggested countermeasures</li>
            <li><strong>Attribution Analysis:</strong> Potential sources and threat actors</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Safety Precautions</h4>
            <p>Always handle malware with extreme caution. Never analyze malware on production systems or networks. Ensure proper isolation of your analysis environment and follow strict safety protocols to prevent accidental infection or spread. Remember that some malware can detect and target analysis environments, potentially causing damage to your systems.</p>
          </div>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Legal and Ethical Considerations</h4>
            <p>Malware analysis must be conducted within legal and ethical boundaries. Ensure you have proper authorization to possess and analyze malware samples. Never deploy malware against systems without explicit permission, even for testing purposes. Be aware of relevant laws regarding computer fraud and abuse in your jurisdiction.</p>
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
        exercises: [
          {
            id: 'cloud-security-assessment',
            title: 'Cloud security assessment',
            description: 'Assess cloud security',
            type: 'analysis',
            content: 'Evaluate the security of cloud environments and identify vulnerabilities.'
          },
          {
            id: 'configuration-review',
            title: 'Configuration review',
            description: 'Review cloud configurations',
            type: 'analysis',
            content: 'Analyze cloud configurations for security issues and best practices.'
          },
          {
            id: 'security-planning-cloud',
            title: 'Security planning',
            description: 'Develop a cloud security plan',
            type: 'practical',
            content: 'Create a comprehensive security plan for cloud environments.'
          }
        ],
        resources: ['Cloud security guide', 'Best practices', 'Security frameworks']
      ,

        content: `
          <h2>Cloud Security Fundamentals</h2>
          <p>Cloud security encompasses the technologies, policies, controls, and services that protect cloud data, applications, and infrastructure from threats and data breaches. As organizations increasingly migrate to cloud environments, understanding cloud security principles becomes essential for maintaining a strong security posture.</p>
          
          <h3>Cloud Service Models</h3>
          <p>Understanding the different cloud service models and their security implications:</p>
          <ul>
            <li><strong>Infrastructure as a Service (IaaS):</strong> Provides virtualized computing resources over the internet</li>
            <li><strong>Platform as a Service (PaaS):</strong> Offers hardware and software tools over the internet</li>
            <li><strong>Software as a Service (SaaS):</strong> Delivers software applications over the internet</li>
            <li><strong>Function as a Service (FaaS):</strong> Enables serverless computing architectures</li>
            <li><strong>Security as a Service (SECaaS):</strong> Delivers security services through the cloud</li>
          </ul>
          
          <h3>Cloud Deployment Models</h3>
          <p>Different ways to deploy cloud services and their security considerations:</p>
          <ul>
            <li><strong>Public Cloud:</strong> Services offered over the public internet and shared across organizations</li>
            <li><strong>Private Cloud:</strong> Cloud infrastructure dedicated to a single organization</li>
            <li><strong>Hybrid Cloud:</strong> Combination of public and private cloud environments</li>
            <li><strong>Multi-Cloud:</strong> Using multiple cloud service providers for different functions</li>
            <li><strong>Community Cloud:</strong> Infrastructure shared by several organizations with common concerns</li>
          </ul>
          
          <h3>Shared Responsibility Model</h3>
          <p>Understanding security responsibilities in cloud environments:</p>
          <ul>
            <li><strong>Provider Responsibilities:</strong> Security of the cloud (infrastructure, hardware, software)</li>
            <li><strong>Customer Responsibilities:</strong> Security in the cloud (data, access management, network controls)</li>
            <li><strong>Model Variations:</strong> How responsibilities shift across IaaS, PaaS, and SaaS</li>
            <li><strong>Compliance Implications:</strong> How shared responsibility affects regulatory compliance</li>
            <li><strong>Documentation:</strong> Importance of clearly defined responsibilities</li>
          </ul>
          
          <h3>Cloud Security Threats</h3>
          <p>Common security challenges in cloud environments:</p>
          <ul>
            <li><strong>Data Breaches:</strong> Unauthorized access to sensitive information</li>
            <li><strong>Misconfiguration:</strong> Improperly configured cloud resources</li>
            <li><strong>Insufficient Identity Management:</strong> Weak authentication and authorization</li>
            <li><strong>Account Hijacking:</strong> Compromised credentials and account takeover</li>
            <li><strong>Insecure APIs:</strong> Vulnerabilities in application programming interfaces</li>
            <li><strong>Advanced Persistent Threats:</strong> Targeted attacks against cloud infrastructure</li>
            <li><strong>Denial of Service:</strong> Attacks that disrupt cloud service availability</li>
          </ul>
          
          <h3>Identity and Access Management</h3>
          <p>Controlling access to cloud resources:</p>
          <ul>
            <li><strong>Authentication Methods:</strong> Multi-factor authentication, single sign-on</li>
            <li><strong>Authorization Controls:</strong> Role-based access control, attribute-based access</li>
            <li><strong>Privileged Access Management:</strong> Controlling administrative access</li>
            <li><strong>Federation:</strong> Managing identities across multiple systems</li>
            <li><strong>Identity Governance:</strong> Policies for identity lifecycle management</li>
          </ul>
          
          <h3>Data Security in the Cloud</h3>
          <p>Protecting data throughout its lifecycle:</p>
          <ul>
            <li><strong>Encryption:</strong> Data-at-rest, data-in-transit, and data-in-use protection</li>
            <li><strong>Key Management:</strong> Secure creation, storage, and rotation of encryption keys</li>
            <li><strong>Data Classification:</strong> Identifying and categorizing sensitive information</li>
            <li><strong>Data Loss Prevention:</strong> Preventing unauthorized data exfiltration</li>
            <li><strong>Data Residency:</strong> Controlling where data is stored geographically</li>
          </ul>
          
          <h3>Network Security</h3>
          <p>Securing cloud network infrastructure:</p>
          <ul>
            <li><strong>Virtual Networks:</strong> Isolated network environments in the cloud</li>
            <li><strong>Network Segmentation:</strong> Dividing networks into security zones</li>
            <li><strong>Firewalls:</strong> Controlling traffic between network segments</li>
            <li><strong>Web Application Firewalls:</strong> Protecting web applications from attacks</li>
            <li><strong>DDoS Protection:</strong> Mitigating distributed denial of service attacks</li>
          </ul>
          
          <h3>Security Monitoring and Operations</h3>
          <p>Continuous monitoring of cloud environments:</p>
          <ul>
            <li><strong>Security Information and Event Management (SIEM):</strong> Collecting and analyzing security data</li>
            <li><strong>Cloud Security Posture Management:</strong> Assessing cloud configuration security</li>
            <li><strong>Threat Detection:</strong> Identifying potential security incidents</li>
            <li><strong>Incident Response:</strong> Reacting to and managing security events</li>
            <li><strong>Security Automation:</strong> Automating security processes and responses</li>
          </ul>
          
          <h3>Compliance and Governance</h3>
          <p>Meeting regulatory requirements in the cloud:</p>
          <ul>
            <li><strong>Regulatory Frameworks:</strong> GDPR, HIPAA, PCI DSS, and other standards</li>
            <li><strong>Compliance Monitoring:</strong> Continuous assessment of compliance status</li>
            <li><strong>Audit Logging:</strong> Recording activities for compliance verification</li>
            <li><strong>Risk Management:</strong> Identifying and mitigating security risks</li>
            <li><strong>Governance Frameworks:</strong> Establishing policies and procedures</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Cloud Security Best Practices</h4>
            <p>Implement a defense-in-depth strategy by combining multiple security controls. Use the principle of least privilege for access management. Regularly audit and assess your cloud environment for vulnerabilities and misconfigurations. Encrypt sensitive data both at rest and in transit. Implement comprehensive logging and monitoring. Develop and test incident response plans specifically for cloud environments. Stay informed about cloud provider security updates and new security features.</p>
          </div>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Cloud Security Alliance</h4>
            <p>The Cloud Security Alliance (CSA) is a nonprofit organization that promotes best practices for providing security assurance within cloud computing. The CSA offers resources like the Cloud Controls Matrix (CCM), Security Guidance for Critical Areas of Focus in Cloud Computing, and the Certificate of Cloud Security Knowledge (CCSK) certification. These resources provide valuable frameworks and knowledge for implementing effective cloud security measures.</p>
          </div>
        `
      },
      {
        id: 'aws-security',
        title: 'AWS Security',
        description: 'Secure Amazon Web Services environments',
        duration: '80 min',
        topics: ['IAM security', 'VPC configuration', 'Security groups', 'CloudTrail'],
        exercises: [
          {
            id: 'aws-security-configuration',
            title: 'AWS security configuration',
            description: 'Configure AWS security settings',
            type: 'practical',
            content: 'Set up and configure security settings in an AWS environment.'
          },
          {
            id: 'iam-setup',
            title: 'IAM setup',
            description: 'Configure AWS Identity and Access Management',
            type: 'practical',
            content: 'Set up and configure IAM roles, users, and permissions in AWS.'
          },
          {
            id: 'security-monitoring-aws',
            title: 'Security monitoring',
            description: 'Set up AWS security monitoring',
            type: 'practical',
            content: 'Configure security monitoring and alerting in an AWS environment.'
          }
        ],
        resources: ['AWS security guide', 'Configuration examples', 'Security tools']
      ,

        content: `
          <h2>AWS Security</h2>
          <p>Amazon Web Services (AWS) is a comprehensive cloud platform offering over 200 services globally. Securing AWS environments requires understanding AWS-specific security services, features, and best practices to protect your cloud infrastructure, applications, and data.</p>
          
          <h3>AWS Shared Responsibility Model</h3>
          <p>Understanding security responsibilities in AWS:</p>
          <ul>
            <li><strong>AWS Responsibility:</strong> Security "of" the cloud (infrastructure, hardware, software)</li>
            <li><strong>Customer Responsibility:</strong> Security "in" the cloud (data, configurations, access management)</li>
            <li><strong>Service-Specific Variations:</strong> How responsibilities shift across different AWS services</li>
            <li><strong>Compliance Boundaries:</strong> Where AWS and customer responsibilities meet</li>
            <li><strong>Documentation:</strong> AWS security documentation and compliance programs</li>
          </ul>
          
          <h3>Identity and Access Management (IAM)</h3>
          <p>Controlling access to AWS resources:</p>
          <ul>
            <li><strong>IAM Users:</strong> Individual identities for AWS access</li>
            <li><strong>IAM Groups:</strong> Collections of users with shared permissions</li>
            <li><strong>IAM Roles:</strong> Temporary permissions for users, applications, and services</li>
            <li><strong>IAM Policies:</strong> JSON documents defining permissions</li>
            <li><strong>Permission Boundaries:</strong> Limiting maximum permissions for IAM entities</li>
            <li><strong>AWS Organizations:</strong> Managing multiple AWS accounts</li>
            <li><strong>AWS Single Sign-On:</strong> Centralized access management</li>
          </ul>
          
          <h3>Network Security</h3>
          <p>Securing AWS network infrastructure:</p>
          <ul>
            <li><strong>Virtual Private Cloud (VPC):</strong> Isolated network environments</li>
            <li><strong>Subnets:</strong> Network segmentation within VPCs</li>
            <li><strong>Security Groups:</strong> Instance-level firewall controls</li>
            <li><strong>Network ACLs:</strong> Subnet-level network access controls</li>
            <li><strong>VPC Flow Logs:</strong> Network traffic logging</li>
            <li><strong>AWS Transit Gateway:</strong> Centralized network connectivity</li>
            <li><strong>AWS Shield:</strong> DDoS protection service</li>
            <li><strong>AWS WAF:</strong> Web application firewall</li>
          </ul>
          
          <h3>Data Protection</h3>
          <p>Securing data in AWS environments:</p>
          <ul>
            <li><strong>AWS KMS:</strong> Key Management Service for encryption</li>
            <li><strong>AWS CloudHSM:</strong> Hardware security modules for cryptographic operations</li>
            <li><strong>S3 Encryption:</strong> Server-side and client-side encryption options</li>
            <li><strong>EBS Encryption:</strong> Encrypted block storage volumes</li>
            <li><strong>RDS Encryption:</strong> Database encryption capabilities</li>
            <li><strong>Secrets Manager:</strong> Secure storage of secrets and credentials</li>
            <li><strong>Certificate Manager:</strong> SSL/TLS certificate provisioning and management</li>
          </ul>
          
          <h3>Detection and Monitoring</h3>
          <p>Monitoring AWS environments for security events:</p>
          <ul>
            <li><strong>CloudTrail:</strong> AWS API activity logging and monitoring</li>
            <li><strong>CloudWatch:</strong> Resource monitoring and operational data collection</li>
            <li><strong>Config:</strong> Resource configuration tracking and compliance</li>
            <li><strong>GuardDuty:</strong> Threat detection service</li>
            <li><strong>Security Hub:</strong> Centralized security and compliance management</li>
            <li><strong>Inspector:</strong> Automated security assessment service</li>
            <li><strong>Detective:</strong> Security investigation and analysis</li>
          </ul>
          
          <h3>Compliance and Governance</h3>
          <p>Meeting regulatory requirements in AWS:</p>
          <ul>
            <li><strong>AWS Artifact:</strong> Compliance documentation and agreements</li>
            <li><strong>AWS Audit Manager:</strong> Continuous audit evidence collection</li>
            <li><strong>Control Tower:</strong> Multi-account governance</li>
            <li><strong>Systems Manager:</strong> Operational management and automation</li>
            <li><strong>Trusted Advisor:</strong> Best practice recommendations</li>
            <li><strong>License Manager:</strong> Software license compliance</li>
          </ul>
          
          <h3>Incident Response</h3>
          <p>Responding to security incidents in AWS:</p>
          <ul>
            <li><strong>Preparation:</strong> AWS-specific incident response planning</li>
            <li><strong>Detection:</strong> Using AWS services for incident detection</li>
            <li><strong>Containment:</strong> Isolating affected resources</li>
            <li><strong>Eradication:</strong> Removing unauthorized access and malicious code</li>
            <li><strong>Recovery:</strong> Restoring systems using AWS backup and recovery services</li>
            <li><strong>Post-Incident:</strong> Learning and improving AWS security posture</li>
          </ul>
          
          <h3>AWS Security Services</h3>
          <p>Specialized security services in AWS:</p>
          <ul>
            <li><strong>Macie:</strong> Data security and privacy service</li>
            <li><strong>Firewall Manager:</strong> Centralized firewall rule management</li>
            <li><strong>Network Firewall:</strong> Network traffic filtering</li>
            <li><strong>AWS Backup:</strong> Centralized backup management</li>
            <li><strong>DDoS Response Team:</strong> Support during DDoS attacks</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">AWS Security Best Practices</h4>
            <p>Follow the principle of least privilege when granting permissions. Use IAM roles instead of long-term access keys. Enable multi-factor authentication for all users. Implement infrastructure as code for consistent security configurations. Regularly review and rotate credentials. Use VPC endpoints to access AWS services privately. Enable logging and monitoring across all AWS services. Implement automated compliance checks. Regularly test your incident response procedures in AWS environments.</p>
          </div>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">AWS Well-Architected Framework</h4>
            <p>The AWS Well-Architected Framework includes a Security Pillar that provides guidance for securing cloud workloads. It covers key areas such as identity and access management, detection, infrastructure protection, data protection, and incident response. The framework offers a set of design principles and best practices to help you build secure applications and environments in AWS.</p>
          </div>
        `
      },
      {
        id: 'azure-security',
        title: 'Microsoft Azure Security',
        description: 'Secure Microsoft Azure cloud services',
        duration: '75 min',
        topics: ['Azure AD', 'Network security', 'Security center', 'Compliance'],
        exercises: [
          {
            id: 'azure-security-setup',
            title: 'Azure security setup',
            description: 'Configure Azure security settings',
            type: 'practical',
            content: 'Set up and configure security settings in an Azure environment.'
          },
          {
            id: 'security-center-configuration',
            title: 'Security center configuration',
            description: 'Configure Azure Security Center',
            type: 'practical',
            content: 'Set up and configure Azure Security Center for monitoring and protection.'
          },
          {
            id: 'compliance-assessment',
            title: 'Compliance assessment',
            description: 'Assess Azure compliance',
            type: 'analysis',
            content: 'Evaluate Azure environment compliance with regulatory requirements.'
          }
        ],
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
        exercises: [
          {
            id: 'iot-security-assessment',
            title: 'IoT security assessment',
            description: 'Assess IoT device security',
            type: 'analysis',
            content: 'Evaluate the security of IoT devices and identify vulnerabilities.'
          },
          {
            id: 'threat-analysis-iot',
            title: 'Threat analysis',
            description: 'Analyze IoT security threats',
            type: 'analysis',
            content: 'Identify and analyze potential security threats to IoT devices and networks.'
          },
          {
            id: 'security-planning-iot',
            title: 'Security planning',
            description: 'Develop an IoT security plan',
            type: 'practical',
            content: 'Create a comprehensive security plan for IoT deployments.'
          }
        ],
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
        exercises: [
          {
            id: 'device-security-audit',
            title: 'Device security audit',
            description: 'Audit IoT device security',
            type: 'analysis',
            content: 'Conduct a comprehensive security audit of IoT devices.'
          },
          {
            id: 'firmware-analysis',
            title: 'Firmware analysis',
            description: 'Analyze IoT device firmware',
            type: 'analysis',
            content: 'Examine IoT device firmware for security vulnerabilities.'
          },
          {
            id: 'security-configuration-iot',
            title: 'Security configuration',
            description: 'Configure IoT device security',
            type: 'practical',
            content: 'Set up and configure security settings for IoT devices.'
          }
        ],
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
        exercises: [
          {
            id: 'network-security-setup-iot',
            title: 'Network security setup',
            description: 'Set up IoT network security',
            type: 'practical',
            content: 'Configure network security for IoT environments.'
          },
          {
            id: 'traffic-analysis-iot',
            title: 'Traffic analysis',
            description: 'Analyze IoT network traffic',
            type: 'analysis',
            content: 'Monitor and analyze network traffic in IoT environments.'
          },
          {
            id: 'access-control-configuration',
            title: 'Access control configuration',
            description: 'Configure IoT access controls',
            type: 'practical',
            content: 'Set up and configure access controls for IoT networks.'
          }
        ],
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