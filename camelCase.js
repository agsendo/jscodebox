/*
TASK: Given is a string n. The task is to return the sentence in CamelCase notation.
This means that each new word is capitalized and immediately appended to the old word.
Start with a lowercase letter.
*/

/*
SOLUTION: First, split the string into an array with separate words (use space ' ' as a dividor).
Iterate through the words, changing the first letter to uppercase and leaving the rest of the word untouched.
Use tempString variable to remember it and add it to the variable camel.
Change the very first letter to lower case to obtain the final solution.
*/

function camelCase(n) {
    let arrWords = n.split(' ');
    let camel = '';
    let tempString = '';
  
    for (let i in arrWords) {
      if(arrWords[i]) {
         tempString = arrWords[i][0].toUpperCase() + arrWords[i].slice(1);
        //console.log(tempString);
        camel += tempString;
        //console.log(camel);
      }
    }
    if (camel.length > 0) {
       camel = camel[0].toLowerCase() + camel.slice(1);
    } 
    //console.log(camel);
    return camel;
}

/*
TEST CASES:

camelCase('Camel Case')
'camelCase'

camelCase('String not found')
'stringNotFound'

camelCase('Nice Challenge')
'niceChallenge'

camelCase(' Is not found ')
'isNotFound'

camelCase('CamelCase')
'camelCase'
*/
