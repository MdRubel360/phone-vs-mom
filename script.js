document.getElementById('generate-btn').addEventListener('click', async function() {
  const situation = document.getElementById('situation').value;

  if (situation.trim() === '') {
    alert('Please enter a situation!');
    return;
  }

  // Show loading animation
  const resultDiv = document.getElementById('result');
  resultDiv.style.display = 'none';
  resultDiv.innerHTML = 'Generating response...';

  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ situation }),
    });

    const data = await response.json();
    resultDiv.innerHTML = `
      <strong>AI Logic:</strong> ${data.ai}<br>
      <strong>Mom Logic:</strong> ${data.mom}
    `;
    resultDiv.style.display = 'block';
  } catch (error) {
    resultDiv.innerHTML = 'Something went wrong!';
    resultDiv.style.display = 'block';
  }
});
