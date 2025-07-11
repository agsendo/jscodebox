/*
TASKS:
1 - Add a h1 to the body using a function that takes 'headline' text as argument
2 - Change the background color of .bg element to blue
3 - Set the checkbox with given id to checked
4 - Read the first nad last name from the inputs (#firstname and #lastname) and write the full name into the #fullname input. If an input is empty, use '#' as its value.
*/


// -- 1 --
function addHeadline(headline) {
    const h1 = document.createElement("h1");
    h1.textContent = headline;
    document.body.appendChild(h1);
}


// -- 2 --
let bgElements = document.getElementsByClassName("bg");
bgElements[0].style.backgroundColor = "blue";


// -- 3 --
function checkMe() {
    document.getElementById("my-checkbox").checked = true;
}


// -- 4 --
function whatIsMyName() {
    const firstNameInput = document.getElementById("firstname");
    const lastNameInput = document.getElementById("lastname");
    const fullNameInput = document.getElementById("fullname");

    let firstName;
    if (firstNameInput.value.trim() !== '') {
        firstName = firstNameInput.value;
    } else {
        firstName = '#';
    }

    let lastName;
    if (lastNameInput.value.trim() !== '') {
        lastName = lastNameInput.value;
    } else {
        lastName = '#';
    }

    fullNameInput.value = firstName + ' ' + lastName;
}
