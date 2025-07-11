/*
TASKS:
1 - Add a h1 to the body using a function that takes 'headline' text as argument
*/


function addHeadline(headline) {
    const h1 = document.createElement("h1");
    h1.textContent = headline;
    document.body.appendChild(h1);
}
