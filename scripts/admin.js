// names as keys, values be objects that has questions as keys and answers as values
const responses = [
    {
	name: "John Smith",
	response: {}
    },
    {
	name: "Jane Doe",
	response: {}
    },
    {
	name: "Ash Ketchum",
	response: {}
    },
    {
	name: "Clark Kent",
	response: {}
    },
];

const root = document.getElementById("responses");

responses.forEach(person => {
    const name = person.name
    const child_div = document.createElement("div");
    const name_tag = document.createElement("p");
    const view_button = document.createElement("button");
    child_div.classList.add("child__response");
    view_button.innerText = "View results";
    child_div.appendChild(name_tag);
    child_div.appendChild(view_button);
    name_tag.innerText = name;
    root.appendChild(child_div);
})
