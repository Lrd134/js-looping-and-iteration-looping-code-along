// Code your solutions in this file
function writeCards(array, word){
  for (let i = 0; i < array.length; i++ ) {
    array[i] = `Thank you, ${array[i]}, for the wonderful ${word} gift!`;
  }
  return array;
}

function countDown(num){
  let counter = 0;
  while(num >= counter){
    console.log(num);
    num--;
  }
}