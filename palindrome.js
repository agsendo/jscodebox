/*
TASK: A variable pali is given. Return true if it is a palindrome. Otherwise false.
A palindrome is a word that is read forward and backward, resulting in the same word.
*/

/*
SOLUTION: Iterate through the string. Check if the letter with the given index i
is the same as the one with index length-1-i (symetrically).
*/


function palindrome(pali) {
    let isPali = false;
    let len = pali.length
  
    for (let i = 0; i < len; i += 1) {
        if (pali[i] == pali[len - 1 - i]) {
            isPali = true;
        } else {
            return false;
        }
    }
    if (isPali == true) {
        return true;
    }
}


/*
TEST CASES:
palindrome('racecar')
true

palindrome('eye')
true

palindrome('baseball')
false

palindrome('otto')
true

palindrome('rotators')
false
*/
