// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById("submitBtn").addEventListener("click", function () {
  const guess = parseInt(document.getElementById("guessInput").value);
  const result = document.getElementById("result");

  if (isNaN(guess)) {
    result.textContent = "⛔ Please enter a valid number!";
    result.style.color = "red";
  } else if (guess < 1 || guess > 100) {
    result.textContent = "⚠️ Number must be between 1 and 100.";
    result.style.color = "orange";
  } else if (guess === secretNumber) {
    result.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    result.style.color = "green";
  } else if (guess < secretNumber) {
    result.textContent = "📉 Too low! Try again.";
    result.style.color = "blue";
  } else {
    result.textContent = "📈 Too high! Try again.";
    result.style.color = "blue";
  }
});
