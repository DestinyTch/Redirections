document.getElementById('checkCodeButton').addEventListener('click', function() {
 const selectedSubject = document.querySelector('.subject-dropdown').value;
 const enteredCode = document.querySelector('.code-input').value;

 // Here's where you'll store your codes.  A good way is to use an object:
 const subjectCodes = {

 english: '12345',
 mathematics: '67890',
 civic: '54321',
 physical: '98765',
 religious: '43210',
 computer: '09876',
 biology: '56789',
 chemistry: '23456',
 physics: '78901',
 agriculture: '34567',
 integrated: '89012',
 geography: '12345',
 furthermath: '67890',
 economics: '54321',
 commerce: '98765',
 government: '43210',
 accounting: '09876',
 literature: '56789',
 history: '23456',
 finearts: '78901',
 music: '34567',
 french: '89012',
 technical: '12345',
 woodwork: '67890',
 metalwork: '54321',
 homeconomics: '98765',
 food: '43210',
 clothing: '09876',
 building: '56789',
 arabic: '23456',
 shorthand: '78901',
 handwriting: '34567',
 homemanagement: '89012',
//...addallyoursubjectsandcodes
};
 if (subjectCodes.hasOwnProperty(selectedSubject) && subjectCodes[selectedSubject] === enteredCode) {
  // Correct code! Redirect to the subject's page.
  window.location.href = selectedSubject + '.html'; // e.g., english.html
 } else {
  // Incorrect code.  Show an error message.
  alert('Incorrect code. Please try again.');
 }
});