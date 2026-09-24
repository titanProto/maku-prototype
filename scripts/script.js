function logMeIn() {
  let usernameEntered = document.getElementById("username").value;
  let passwordEntered = document.getElementById("password").value;
  if (usernameEntered != "" && passwordEntered != "") {
    window.location.href = "./pages/home.html";
  } else {
    document.getElementById("loginError").innerHTML =
      "Error - Please enter a username and password!";
  }
}

function logAdminIn() {
  let usernameEntered = document.getElementById("username").value;
  let passwordEntered = document.getElementById("password").value;
  if (usernameEntered != "" && passwordEntered != "") {
    window.location.href = "./pages/admintools.html";
  } else {
    document.getElementById("loginError").innerHTML =
      "Error - Please enter a username and password!";
  }

}

let question = 1;
const questionList = [1, 2, 3];

const question1 = `
				<h1>Question 1</h1>
				<h2>&lt;insert question here&gt;</h2>
				<input type="radio">
				<label>yes</label><br>
				<input type="radio">
				<label>no</label><br>
				<input type="radio">
				<label>dunno</label><br><br>
				<button onclick="nextQuestion()">Next Question</button>`;
const question2 = `
				<h1>Question 2</h1>
				<h2>&lt;insert question here&gt;</h2>
				<label>Rate your agreement on the scale below</label><br>
				1 <input type="range" min="0" max="10"> 10<br><br>
				<button onclick="prevQuestion()">Previous Question</button>
				<button onclick="nextQuestion()">Next Question</button>
`;
const question3 = `
				<h1>Question 3</h1>
				<h2>&lt;insert question here&gt;</h2>
				<label>Your answer:</label><br>
				<input type="text"><br><br>
				<button onclick="prevQuestion()">Previous Question</button>
				<button onclick="nextQuestion()">Next Question</button>
`;
const question4 = `
				<h1>Audit Complete!</h1>
				<h2>&lt;thankyou message here&gt;</h2>
				<br><br>
				<button onclick="returnHome()">Return Home</button>
`;

function nextQuestion() {
  if (question == 1) {
    question = 2;
    document.getElementById("audit-text").innerHTML = question2;
  } else if (question == 2) {
    question = 3;
    document.getElementById("audit-text").innerHTML = question3;
  } else if (question == 3) {
    document.getElementById("audit-text").innerHTML = question4;
  }
  //document.getElementById("audit-text").innerHTML = "hello world";
}

function prevQuestion() {
  if (question == 2) {
    question = 1;
    document.getElementById("audit-text").innerHTML = question1;
  } else if (question == 3) {
    question = 2;
    document.getElementById("audit-text").innerHTML = question2;
  }
}

function returnHome() {
  window.location.href = "home2.html";
}
