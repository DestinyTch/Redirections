document.getElementById('checkCodeButton').addEventListener('click', function() {
 const checkButton = document.getElementById('checkCodeButton'); // Get the button element
 const originalText = checkButton.textContent; // Store the original text

 checkButton.textContent = 'Loading...'; // Change button text to "Loading..."
 checkButton.disabled = true; // Disable the button to prevent multiple clicks

 const selectedSubject = document.querySelector('.subject-dropdown').value;
 const enteredCode = document.querySelector('.code-input').value;

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
  // ... (your subject codes)
 };

 const popup = document.createElement('div');
 popup.classList.add('popup');

 const popupContent = document.createElement('div');
 popupContent.classList.add('popup-content');
 popup.appendChild(popupContent);

 const message = document.createElement('p');
 popupContent.appendChild(message);

 const closeButton = document.createElement('button');
 closeButton.textContent = 'Close';
 closeButton.addEventListener('click', () => {
  document.body.removeChild(popup);
  checkButton.textContent = originalText; // Restore original button text
  checkButton.disabled = false; // Enable the button
 });
 popupContent.appendChild(closeButton);

 document.body.appendChild(popup);

 if (subjectCodes.hasOwnProperty(selectedSubject) && subjectCodes[selectedSubject] === enteredCode) {
  message.textContent = 'Success!';
  setTimeout(() => {
   window.location.href = selectedSubject + '.html';
  }, 1500);
 } else {
  message.textContent = 'Select the correct subject and input the correct code';
  setTimeout(() => {
   document.body.removeChild(popup);
   checkButton.textContent = originalText; // Restore original button text
   checkButton.disabled = false; // Enable the button
  }, 3000);
 }
});