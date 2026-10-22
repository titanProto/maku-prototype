// names as keys, values be objects that has questions as keys and answers as values
const responses = [
    {
	name: "John Smith",
	response: [
	    {
		question: "Test Question",
		answer: "Yes"
	    },
	    {
		question: "Test Question",
		answer: "No"
	    }
	]
    },
    {
	name: "Jane Doe",
	response: [
	    {
		question: "Test Question",
		answer: "No"
	    },
	    {
		question: "Test Question",
		answer: "No"
	    }
	]
    },
    {
	name: "Ash Ketchum",
	response: [
	    {
		question: "Test Question",
		answer: "No"
	    },
	    {
		question: "Test Question",
		answer: "Yes"
	    }
	]
    },
    {
	name: "Clark Kent",
	response: [
	    {
		question: "Test Question",
		answer: "Yes"
	    },
	    {
		question: "Test Question",
		answer: "No"
	    }
	]
    },
];

const root = document.getElementById("responses");

function clearRoot() {
    while (root.hasChildNodes()) {
	root.removeChild(root.firstChild);
    }
}

function renderResponse(idx) {
    clearRoot()
    const back_button = document.createElement("button");
    const heading = document.createElement("h2");
    heading.innerText = `Response of ${responses[idx].name}`
    back_button.innerText = "Back";
    back_button.addEventListener("click", () => {
	clearRoot();
	renderMain();
    })
    root.appendChild(heading);
    let i = 1;
    responses[idx].response.forEach(response => {
	const question_div = document.createElement("div");
	const question_heading = document.createElement("h3");
	const answer_text = document.createElement("p");
	question_heading.innerText = `Q${i}. ${response.question}`;
	answer_text.innerText = `ans: ${response.answer}`;
	question_div.appendChild(question_heading);
	question_div.appendChild(answer_text);
	root.appendChild(question_div);
	i++;
    })
    root.appendChild(back_button);
}

function renderMain() {
    let i = 0;
    const heading = document.createElement("h2");
    const two = document.createElement("h1");
    const three = document.createElement("h1");
    two.innerText = "Statistics";
    three.innerText = "Inconsistent Responses";
    heading.innerText = "Responses";
    root.appendChild(heading);
    responses.forEach(person => {
	const name = person.name
	const child_div = document.createElement("div");
	const name_tag = document.createElement("p");
	const view_button = document.createElement("button");
	view_button.addEventListener("click", e => {
	    const idx = e.target.id;
	    renderResponse(idx);
	})
	view_button.id = `${i}`;
	child_div.classList.add("child__response");
	view_button.innerText = "View results";
	child_div.appendChild(name_tag);
	child_div.appendChild(view_button);
	name_tag.innerText = name;
	root.appendChild(child_div);
	i++;
    })
    root.appendChild(two);
    root.appendChild(three);
}

renderMain()
