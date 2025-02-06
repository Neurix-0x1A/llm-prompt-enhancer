// script.js

// Function to generate prompt based on user input
function generatePrompt() {
  const userInput = document.getElementById('prompt-input').value;
  const complexity = document.getElementById('complexity').value;
  const tone = document.getElementById('tone').value;

  if (!userInput.trim()) {
    alert('Please enter a prompt!');
    return;
  }

  let enhancedPrompt = userInput;

  // Adjust complexity
  if (complexity === 'simple') {
    enhancedPrompt = `Explain this simply: ${userInput}`;
  } else if (complexity === 'intermediate') {
    enhancedPrompt = `Provide a detailed explanation: ${userInput}`;
  } else if (complexity === 'advanced') {
    enhancedPrompt = `Dive deeper into the topic: ${userInput}`;
  }

  // Adjust tone
  if (tone === 'formal') {
    enhancedPrompt = `Please provide a formal response: ${enhancedPrompt}`;
  } else if (tone === 'casual') {
    enhancedPrompt = `Can you explain this casually? ${enhancedPrompt}`;
  }

  // Display enhanced prompt
  document.getElementById('enhanced-prompt').innerText = enhancedPrompt;
}

