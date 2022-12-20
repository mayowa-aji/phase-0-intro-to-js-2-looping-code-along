// Code your solutions in this file



// create a new, empty array to hold the messages;
// iterate through the input array and, inside the loop, build out the 'thank you' message for each name using string interpolation, then add that message to the new array you created;
// after the loop finishes and all of the messages have been added to the new array, return the new array.


// [
//   "Thank you, Charlie, for the wonderful birthday gift!",
//   "Thank you, Samip, for the wonderful birthday gift!",
//   "Thank you, Ali, for the wonderful birthday gift!",
// ];



const firstName = ["Guadalupe", "Ollie", "Aki"]


function writeCards (firstName, event){
  let message = [];
  for(let i = 0; i< firstName.length; i++) {
    message.push (`Thank you, ${firstName[i]}, for the wonderful ${event} gift!`)
  }
  return message;
}
writeCards(firstName, 'surprise')


function countDown(){
  let countDown = 10;
while (countDown >= 0){
  console.log(countDown--)
}
}
