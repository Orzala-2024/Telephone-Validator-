document.getElementById('check-btn').addEventListener('click', function() {
  const userInput = document.getElementById('user-input').value;
  const resultsDiv = document.getElementById('results-div');
  const validPatterns = [
    /^1?\s?\d{3}-\d{3}-\d{4}$/,
    /^1?\s?\(\d{3}\)\s?\d{3}-\d{4}$/,
    /^\d{10}$/,
    /^1?\s?\d{3}\s\d{3}\s\d{4}$/
];

if (!userInput) {
  alert("Please provide a phone number");
  return;
}

let isValid = validPatterns.some(pattern => pattern.test(userInput));

if (isValid) {
  resultsDiv.textContent = `Valid US number: ${userInput}`;
} else {
  resultsDiv.textContent = `Invalid US number: ${userInput}`;
}
});

document.getElementById('clear-btn').addEventListener('click', function() {
  document.getElementById('results-div').textContent = '';
  document.getElementById('user-input').value = '';
});