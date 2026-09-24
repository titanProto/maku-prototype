let question = 1;
const questionList = [1, 2, 3];

const question1 = `
					<form>
						<h1>Question 1</h1>
						<h2>&lt;insert question here&gt;</h2>
						<input type="radio" value="yes" name="q1" required>
						<label>yes</label><br>
						<input type="radio" value="no" name="q1">
						<label>no</label><br>
						<input type="radio" value="dunno" name="q1">
						<label>dunno</label><br><br>
						<button onclick="nextQuestion()">Next Question</button>
					</form>
`;
const question2 = `
				<h1>Question 2</h1>
				<h2>&lt;insert question here&gt;</h2>
				<label>Rate your agreement on the scale below</label><br>
				Disagree <input type="range" min="0" max="10"> Agree<br><br>
				<button onclick="prevQuestion()">Previous Question</button>
				<button onclick="nextQuestion()">Next Question</button>
`;
const question3 = `
				<h1>Question 3</h1>
				<h2>&lt;insert question here&gt;</h2>
				<label>Your answer:</label><br>
				<input type="text"><br><br>
				<button onclick="prevQuestion()">Previous Question</button>
				<button onclick="nextQuestion()">Complete Audit</button>
`;
const question4 = `
				<h1>Audit Complete!</h1>
				<h2>&lt;thankyou message here&gt;</h2>
				<br><br>
				<button onclick="returnHome()">Return Home</button>
`;

const auditText = document.getElementById("audit-text");

auditText.innerHTML = question1;

function nextQuestion() {
  if (question == 1) {
    question = 2;
    auditText.innerHTML = question2;
  } else if (question == 2) {
    question = 3;
    auditText.innerHTML = question3;
  } else if (question == 3) {
    auditText.innerHTML = question4;
  }
  //question-text = "hello world";
}

function prevQuestion() {
  if (question == 2) {
    question = 1;
    auditText.innerHTML = question1;
  } else if (question == 3) {
    question = 2;
    auditText.innerHTML = question2;
  }
}

function storeAnswers() {

}

function returnHome() {
  window.location.href = "home2.html";
}
