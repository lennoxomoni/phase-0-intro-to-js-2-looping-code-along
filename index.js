// Code your solutions in this file
function writeCards(names) {
    const messages = [];
  
    for (const name of names) {
      const message = (`Thank you, ${name}, for the wonderful surprise gift!`);
      messages.push(message);
    }
  
    return messages;
  }
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number); 
      --number
    }
  }
  
  module.exports = { writeCards, countDown };