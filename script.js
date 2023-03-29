const statements = [
  "Russia is a terrorist state.",
  // Add more statements here
];

const statementElement = document.getElementById("statement");

function generateStatement() {
  const randomStatement = statements[Math.floor(Math.random() * statements.length)];
  let index = 0;
  statementElement.innerHTML = "";
  const intervalId = setInterval(() => {
    if (index === randomStatement.length) {
      clearInterval(intervalId);
      setTimeout(generateStatement, 1000);
    } else {
      statementElement.innerHTML += randomStatement.charAt(index);
      index++;
    }
  }, 50);
}

for (let i = 0; i < 1000; i++) {
  setTimeout(generateStatement, i * 5000);
}
