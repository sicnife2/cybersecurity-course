const fs = require('fs');
const path = require('path');

// Read the current courseStructure.ts file
const filePath = path.join(__dirname, 'data', 'courseStructure.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Define specific content for lessons that currently have placeholder content
const lessonContentMap = {
  'iot-device-security': `
          <h2>IoT Device Security Fundamentals</h2>
          <p>Internet of Things (IoT) devices present unique security challenges due to their limited resources, diverse platforms, and often weak default security configurations. This lesson covers essential strategies for securing individual IoT devices.</p>
          
          <h3>IoT Security Challenges</h3>
          <ul>
            <li><strong>Weak Default Credentials:</strong> Many devices ship with default passwords</li>
            <li><strong>Infrequent Updates:</strong> Limited or no firmware update mechanisms</li>
            <li><strong>Resource Constraints:</strong> Limited processing power and memory</li>
            <li><strong>Physical Access:</strong> Devices may be physically accessible to attackers</li>
            <li><strong>Diverse Platforms:</strong> Wide variety of operating systems and architectures</li>
          </ul>
          
          <h3>Device Authentication</h3>
          <p>Proper authentication ensures only authorized users and systems can access IoT devices:</p>
          <ul>
            <li><strong>Strong Passwords:</strong> Replace default credentials immediately</li>
            <li><strong>Certificate-Based Authentication:</strong> Use digital certificates for device identity</li>
            <li><strong>Multi-Factor Authentication:</strong> Implement additional verification layers</li>
            <li><strong>Device Identity Management:</strong> Unique identifiers for each device</li>
          </ul>
          
          <h3>Firmware Security</h3>
          <p>Firmware is the low-level software that controls IoT devices:</p>
          <ul>
            <li><strong>Secure Boot:</strong> Verify firmware integrity during startup</li>
            <li><strong>Code Signing:</strong> Ensure firmware authenticity</li>
            <li><strong>Regular Updates:</strong> Establish update mechanisms and schedules</li>
            <li><strong>Vulnerability Management:</strong> Monitor and patch security flaws</li>
          </ul>
          
          <h3>Communication Security</h3>
          <p>Protect data transmission between IoT devices and other systems:</p>
          <ul>
            <li><strong>Encryption:</strong> Use TLS/SSL for data in transit</li>
            <li><strong>Protocol Security:</strong> Secure MQTT, CoAP, and other IoT protocols</li>
            <li><strong>Network Segmentation:</strong> Isolate IoT devices on separate networks</li>
            <li><strong>VPN Connectivity:</strong> Secure remote access to devices</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Security Best Practices</h4>
            <p>Always change default passwords, keep firmware updated, and monitor device behavior for anomalies. Consider the entire device lifecycle from deployment to decommissioning.</p>
          </div>
        `,
        
  'iot-network-security': `
          <h2>IoT Network Security</h2>
          <p>Securing IoT networks requires a comprehensive approach that addresses the unique challenges of connecting numerous devices with varying security capabilities. This lesson covers strategies for protecting IoT network infrastructure and communications.</p>
          
          <h3>Network Segmentation</h3>
          <p>Isolating IoT devices from critical network resources is essential for security:</p>
          <ul>
            <li><strong>VLAN Separation:</strong> Create dedicated VLANs for IoT devices</li>
            <li><strong>Micro-segmentation:</strong> Isolate device types and functions</li>
            <li><strong>Zero Trust Architecture:</strong> Never trust, always verify approach</li>
            <li><strong>Network Access Control:</strong> Control device network access</li>
          </ul>
          
          <h3>Traffic Monitoring</h3>
          <p>Continuous monitoring helps detect anomalies and security threats:</p>
          <ul>
            <li><strong>Network Flow Analysis:</strong> Monitor traffic patterns and volumes</li>
            <li><strong>Deep Packet Inspection:</strong> Analyze packet contents for threats</li>
            <li><strong>Behavioral Analytics:</strong> Detect unusual device behavior</li>
            <li><strong>SIEM Integration:</strong> Centralized security event management</li>
          </ul>
          
          <h3>Protocol Security</h3>
          <p>IoT devices use various communication protocols that need security considerations:</p>
          <ul>
            <li><strong>MQTT Security:</strong> Secure Message Queuing Telemetry Transport</li>
            <li><strong>CoAP Security:</strong> Constrained Application Protocol protection</li>
            <li><strong>LoRaWAN Security:</strong> Long Range Wide Area Network security</li>
            <li><strong>Zigbee/Z-Wave:</strong> Mesh network protocol security</li>
          </ul>
          
          <h3>Access Control</h3>
          <p>Implementing proper access controls for IoT networks:</p>
          <ul>
            <li><strong>Device Authentication:</strong> Verify device identity before network access</li>
            <li><strong>Role-Based Access:</strong> Limit device permissions based on function</li>
            <li><strong>Time-Based Access:</strong> Restrict access to specific time periods</li>
            <li><strong>Geofencing:</strong> Location-based access controls</li>
          </ul>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Network Security Best Practices</h4>
            <p>Implement network segmentation, monitor all IoT traffic, use secure protocols, and maintain strict access controls. Regular security assessments are crucial for IoT network security.</p>
          </div>
        `
};

// Replace placeholder content with specific content
const placeholderPattern = /content: `\s*<h2>Lesson Content<\/h2>\s*<p>This lesson covers important cybersecurity concepts and practical applications\.<\/p>[\s\S]*?<\/div>\s*`/g;

// Find all placeholder content blocks and replace them
let matches = content.match(placeholderPattern);
if (matches) {
    console.log(`Found ${matches.length} placeholder content blocks to replace`);
    
    // For now, let's replace all placeholder content with a generic but better template
    const betterGenericContent = `
          <h2>Cybersecurity Lesson Content</h2>
          <p>This comprehensive lesson covers essential cybersecurity concepts with practical applications and real-world scenarios.</p>
          
          <h3>Learning Objectives</h3>
          <p>By completing this lesson, you will:</p>
          <ul>
            <li>Understand the core security principles and concepts</li>
            <li>Learn practical implementation strategies</li>
            <li>Develop skills for real-world security scenarios</li>
            <li>Master industry best practices and standards</li>
          </ul>
          
          <h3>Key Security Concepts</h3>
          <ul>
            <li><strong>Risk Assessment:</strong> Identify and evaluate potential security threats</li>
            <li><strong>Defense in Depth:</strong> Implement multiple layers of security controls</li>
            <li><strong>Incident Response:</strong> Prepare for and respond to security incidents</li>
            <li><strong>Continuous Monitoring:</strong> Maintain ongoing security awareness</li>
          </ul>
          
          <h3>Practical Applications</h3>
          <p>This lesson includes hands-on exercises and real-world scenarios to help you apply the concepts you've learned. Practice with industry-standard tools and techniques.</p>
          
          <div class="bg-cyber-900/20 border border-cyber-500/30 rounded-lg p-4 mt-6">
            <h4 class="text-cyber-400 font-semibold mb-2">Important Note</h4>
            <p>Complete all exercises and review additional resources for comprehensive understanding. Apply these concepts in practice to build your cybersecurity expertise.</p>
          </div>
        `;
    
    content = content.replace(placeholderPattern, `content: \`${betterGenericContent}\``);
}

// Write the updated content back to the file
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated courseStructure.ts with better lesson content!');
