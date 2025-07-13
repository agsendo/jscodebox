// TASK: A string 'string' is given. Return the number of the longest block. A block means a multiple occurrence of a letter in a row.

/*
SOLUTION: Iterate through the string. Keep track of the last character, as well as max. The variable 'counter' keeps track of the current streak.
If the counter is bigger than max, when the streak ends, max will take the value of the counter.
*/


function longest(string) {
  let max = 0;
  let counter = 0;
  let lastLetter = '';

  if (string.length !== 0) {
      lastLetter = string[0];
      counter = 1;
      max = 1;
  }
  for (let i = 1 ; i < string.length; i += 1) {
      if (string[i] == lastLetter) {
          counter += 1;
      } else {
          if (counter > max) {
              max = counter;
          }
          counter = 1;
          lastLetter = string[i];
      }
  }
  return max;
}


/*
TEST CASES:
longest('aaBBBBcDDee')
4

longest('')
0

longest('aaBBcDDDDDDeeFFFFFFFFg')
8

longest('a')
1

longest('aBBBccD')
3
*/
