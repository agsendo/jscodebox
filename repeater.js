/*
TASK: Given is a String string and a number n. Return a string with the section
from 0 to n in a row. In each run n is to be decremented.
*/

/*
SOLUTION: Loop with decrementing the number n (repeated letters) and iterate through
the section of the string, according to the number n. Each iteration adds a letter to the final string.
*/

function repeater(string, n) {
    let newString = '';
    while (n > 0) {
        for (let i = 0; i < n; i += 1) {
            if (i < string.length) {
                newString += string[i];
            } else {
                newString += '';
            }
        }
        n -= 1;
    }
    return newString;
}

/*
TEST CASES:

repeater('JSCodebox',6)
'JSCodeJSCodJSCoJSCJSJ'

repeater('Foobar',2)
'FoF'

repeater('',2)
''

repeater('Hello coder!',5)
'HelloHellHelHeH'

repeater('Hi',3)
'HiHiH'
*/
