// TASK: Three positive numbers are given: a, b and c. Return true if at least two of the numbers have the same last digit.

/*
SOLUTION: Compare the remainders after dividing the numbers by 10.
*/


function lastButNotLeast(a, b, c) {
    let remA = a % 10;
    let remB = b % 10;
    let remC = c % 10;

    if ((remA == remB) || (remB == remC) || (remC == remA)) {
        return true;
    } else {
        return false;
    }
}


/*
TEST CASES:
lastButNotLeast(37, 17, 19)
true

lastButNotLeast(84, 23, 54)
true

lastButNotLeast(42, 19, 96)
false

lastButNotLeast(19, 17, 38)
false

lastButNotLeast(1, 51, 21)
true
*/
