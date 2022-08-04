// Code your solutions in this file



function writeCards(array,event) {
    let newArray = [];
   for(let i = 0; i < array.length; i++) {
   
     const gratitude = `Thank you, ${array[i]}, for the wonderful ${event} gift!`
     newArray.push(gratitude)
   
}
   return newArray
}
 
 function countDown(){
    let numCountdown = 11;
    while(numCountdown--){
        console.log(numCountdown)
    }
 }