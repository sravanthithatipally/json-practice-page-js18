let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];
let containerele = document.getElementById("jsonContainer");

let bikenames = document.createElement("p")
bikenames.classList.add("databg");
bikenames.textContent = (JSON.stringify(bikes));
containerele.appendChild(bikenames);

let persondetails = document.createElement("p")
persondetails.classList.add("databg");
persondetails.textContent = (JSON.stringify(person));
containerele.appendChild(persondetails);

let todosele = document.createElement("p")
todosele.classList.add("databg");
todosele.textContent = (JSON.stringify(todos));
containerele.appendChild(todosele);