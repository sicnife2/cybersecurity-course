const fs = require('fs');
const path = require('path');

// Read the current courseStructure.ts file
const filePath = path.join(__dirname, 'data', 'courseStructure.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Enhanced exercise content for different types
const enhanceExerciseContent = (exerciseType, lessonTopic) => {
  const baseContent = {
    quiz: `
      <h3>Knowledge Assessment Quiz</h3>
      <p>Test your understanding of ${lessonTopic} concepts with this comprehensive quiz.</p>
      <div class="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mt-4">
        <h4 class="text-blue-400 font-semibold mb-2">Quiz Instructions</h4>
        <ul class="list-disc list-inside space-y-1">
          <li>Read each question carefully</li>
          <li>Select the best answer from the options provided</li>
          <li>Review your answers before submitting</li>
          <li>You can retake the quiz to improve your score</li>
        </ul>
      </div>
    `,
    practical: `
      <h3>Hands-On Practical Exercise</h3>
      <p>Apply ${lessonTopic} concepts through this practical, hands-on exercise designed to build real-world skills.</p>
      <div class="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mt-4">
        <h4 class="text-green-400 font-semibold mb-2">Exercise Steps</h4>
        <ol class="list-decimal list-inside space-y-2">
          <li>Review the scenario and requirements carefully</li>
          <li>Set up your environment as instructed</li>
          <li>Follow the step-by-step implementation guide</li>
          <li>Test your implementation thoroughly</li>
          <li>Document your findings and results</li>
          <li>Submit your completed work for review</li>
        </ol>
      </div>
      <div class="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mt-4">
        <h4 class="text-yellow-400 font-semibold mb-2">Safety Note</h4>
        <p>Always practice in a controlled environment. Never test security techniques on systems you don't own or without proper authorization.</p>
      </div>
    `,
    analysis: `
      <h3>Security Analysis Exercise</h3>
      <p>Develop your analytical skills by examining ${lessonTopic} scenarios and identifying security implications.</p>
      <div class="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 mt-4">
        <h4 class="text-purple-400 font-semibold mb-2">Analysis Framework</h4>
        <ol class="list-decimal list-inside space-y-2">
          <li><strong>Identify:</strong> What are the key components and stakeholders?</li>
          <li><strong>Assess:</strong> What are the potential risks and vulnerabilities?</li>
          <li><strong>Evaluate:</strong> What is the impact and likelihood of threats?</li>
          <li><strong>Recommend:</strong> What security measures should be implemented?</li>
          <li><strong>Document:</strong> Prepare a comprehensive analysis report</li>
        </ol>
      </div>
    `,
    simulation: `
      <h3>Security Simulation Exercise</h3>
      <p>Experience realistic ${lessonTopic} scenarios through interactive simulations that mirror real-world situations.</p>
      <div class="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mt-4">
        <h4 class="text-red-400 font-semibold mb-2">Simulation Guidelines</h4>
        <ul class="list-disc list-inside space-y-1">
          <li>Treat the simulation as a real security incident</li>
          <li>Make decisions based on best practices and policies</li>
          <li>Consider time constraints and resource limitations</li>
          <li>Document all actions and decisions made</li>
          <li>Reflect on outcomes and lessons learned</li>
        </ul>
      </div>
    `
  };
  
  return baseContent[exerciseType] || baseContent.practical;
};

// Find and enhance generic exercise content
const genericExercisePattern = /content: 'Practice [^']*\./g;
const matches = content.match(genericExercisePattern);

if (matches) {
  console.log(`Found ${matches.length} generic exercise content blocks to enhance`);
  
  // Replace generic exercise content with enhanced versions
  content = content.replace(/content: 'Practice identifying different types of cybersecurity threats\.'/g, 
    `content: '${enhanceExerciseContent('practical', 'threat identification').replace(/'/g, "\\'")}'`);
    
  content = content.replace(/content: 'Practice performing a basic security assessment\.'/g, 
    `content: '${enhanceExerciseContent('analysis', 'security assessment').replace(/'/g, "\\'")}'`);
    
  content = content.replace(/content: 'Practice testing the strength of different passwords using various criteria\.'/g, 
    `content: '${enhanceExerciseContent('practical', 'password security').replace(/'/g, "\\'")}'`);
    
  content = content.replace(/content: 'Practice setting up two-factor authentication for various accounts\.'/g, 
    `content: '${enhanceExerciseContent('practical', 'two-factor authentication').replace(/'/g, "\\'")}'`);
    
  content = content.replace(/content: 'Practice configuring a password manager to securely store and generate passwords\.'/g, 
    `content: '${enhanceExerciseContent('practical', 'password management').replace(/'/g, "\\'")}'`);
}

// Also enhance other generic exercise patterns
const otherGenericPatterns = [
  { pattern: /content: 'Configure network security for IoT environments\.'/g, replacement: 'IoT network security' },
  { pattern: /content: 'Monitor and analyze network traffic in IoT environments\.'/g, replacement: 'network traffic analysis' },
  { pattern: /content: 'Set up and configure access controls for IoT networks\.'/g, replacement: 'access control configuration' },
  { pattern: /content: 'Conduct a comprehensive security audit of IoT devices\.'/g, replacement: 'IoT device security audit' },
  { pattern: /content: 'Examine IoT device firmware for security vulnerabilities\.'/g, replacement: 'firmware security analysis' },
  { pattern: /content: 'Set up and configure security settings for IoT devices\.'/g, replacement: 'IoT device security configuration' }
];

otherGenericPatterns.forEach(({ pattern, replacement }) => {
  content = content.replace(pattern, `content: '${enhanceExerciseContent('practical', replacement).replace(/'/g, "\\'")}'`);
});

// Write the updated content back to the file
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully enhanced exercise content in courseStructure.ts!');
