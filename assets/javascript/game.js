var randomWordArr = ["Adult", "Aeroplane", "Air", "Aircraft Carrier", "Airforce", "Airport", "Album", "Alphabet", "Apple", "Arm", "Army", "Baby", "Baby", "Backpack"];
var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)].toLowerCase();
console.log(randomWord);
var wordLen = randomWord.length;
console.log(wordLen);
var displayLen = [wordLen];
var count = 0;
var output = "";
var userGuess = "";
var toWin = wordLen;
var letters = randomWord.split('');
var x = "X";

for (var i = 0; i < randomWord.length; i++) {
  displayLen[i] = "_ ";
  output = output + displayLen[i];
}
$("#answer").html(output);
output = "";




$(".container").on("click", ".btn-choice", function () {
  output = "";
  userGuess = this.value;
  this.value = "";
  count++;
  $("#counter").html("You have " + (10 - count) + " guesses remaining.");
  $(this).attr('disabled', true);

  
  for (var i = 0; i < wordLen; i++) {
    if (userGuess.toLowerCase() == letters[i]) {
      displayLen[i] = userGuess.toLowerCase();
    }
    output = output + displayLen[i] + " ";
  }

  $("#answer").html(output);
  output = "";

  if (count === 10) {
    alert("You Lose. Please Try Again.");
    location.reload();

  if (displayLen[i] == letters[i]){
    alert("You Win!");
  }
  }


});







// s = answerArray.join(" ");
// document.getElementById("answer").innerHTML = s;
// }

// function Letter(){
//   var letter = document.getElementById("letter").value;
//   if (letter.length > 0){
//     for (var i = 0; i < randomWord.length; i++){
//       if (randomWord[i] === letter){
//         answerArray[i] = letter;
//       }
//     }
//     count++;
//     document.getElementById("counter").innerHTML = "No of clicks: " + count;
//     document.getElementById("answer").innerHTML = answerArray.join(" ");
//   }
//   if(count > 5){
//     document.getElementById("stat").innerHTML = "Come on";
//   }
// }
