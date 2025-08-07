cat <<EOF > script.js
const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const userGuess = parseInt(document.getElementById('guessInput').value);
  const message = document.getElementById('message');

  if (userGuess === randomNumber) {
    message.textContent = "🎉 Correct! You guessed the number!";
    message.style.color = "green";
  } else if (userGuess < randomNumber) {
    message.textContent = "📉 Too low! Try again.";
    message.style.color = "orange";
  } else {
    message.textContent = "📈 Too high! Try again.";
    message.style.color = "orange";
  }
}
EOF
