// Code your solutions in this file
function writeCards(names, eventName) {
  const messages = []; // Create an empty array to hold messages

  for (let i = 0; i < names.length; i++) {
    // Create a thank-you message for each name
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message); // Add the message to the array
  }

  return messages; // Return the array of messages
}

function countDown(n) {
  while (n >= 0) {
    console.log(n);
    n--;
  }
}






