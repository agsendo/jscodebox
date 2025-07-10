/*
Given is a string n. The task is to return the sentence in CamelCase notation.
This means that each new word is capitalized and immediately appended to the old word.
Start with a lowercase letter.
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
Test Cases:

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
