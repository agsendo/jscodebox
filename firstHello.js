// TASK: A string sentence is given. Return true if the block starts with "Hello".

/*
SOLUTION: Check the first 5 letters. If the string is 5+ characters long, use the substring method
to check if the first characters are equal to 'Hello'.
*/

function firstHello(sentence) {
    const hello = 'Hello';
    let firstFive = '';

    if (sentence.length < 5) {
         return false;
    } else {
        firstFive = sentence.substr(0,5);
        //console.log(firstFive);
        if (firstFive == hello) {
            return true;
        } else {
            return false;
        }
    }
}

/*
TEST CASES:
firstHello('Hello world!')
true

firstHello('Whats up?')
false

firstHello('Hello, how are you?')
true

firstHello('No.')
false

firstHello('Hell, yeah!')
false
*/
