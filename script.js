document.getElementById('checkCodeButton').addEventListener('click', function() {
  const selectedSubject = document.querySelector('.subject-dropdown').value;
  const enteredCode = document.querySelector('.code-input').value;

  // Here's where you'll store your codes.  A good way is to use an object:
  const subjectCodes = {
    english: '12345',
    mathematics: '67890',
    biology: '54321',
    // ... add all your subjects and codes
  };

  if (subjectCodes.hasOwnProperty(selectedSubject) && subjectCodes[selectedSubject] === enteredCode) {
    // Correct code! Redirect to the subject's page.
    window.location.href = selectedSubject + '.html'; // e.g., english.html
  } else {
    // Incorrect code.  Show an error message.
    alert('Incorrect code. Please try again.');
  }
});