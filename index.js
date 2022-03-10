// Code your solutions in this file
let returnValue = [];

function writeCards(person, giftType) {
  for (let i = 0; i < person.length; i++) {
    returnValue.push(`Thank you, ${person[i]}, for the wonderful ${giftType} gift!`)
  }

  return returnValue;
}

function countDown(counts) {
  while (counts >= 0) {
    console.log(counts--);
  }
}