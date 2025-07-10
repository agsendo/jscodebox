//Given is a String string and a number n. Return a string with the section from 0 to n in a row. In each run n is to be decremented.

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
Test Cases:

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
