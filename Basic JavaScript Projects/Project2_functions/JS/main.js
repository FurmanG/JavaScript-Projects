
// Returns the name of winner and prize amount.
function winnerName(){
  firstName = "Simba";
  lastName = "Happy";
  winigAmount = 9000000
  tax = 1000000
  winigAmount -= tax
  document.getElementById("winnerName").innerHTML = firstName + " " + lastName + " wins = $" + winigAmount;
}

// Returns the time and date.
function displayDate(){
  document.getElementById("time").innerHTML = Date();
}