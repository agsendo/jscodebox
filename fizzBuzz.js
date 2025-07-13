/*
TASK: The variables start and end are given. Return an array with the contents
of the individual numbers. Replace all numbers divisible by three with "Fizz"
and all numbers divisible by five with "Buzz". If a number is divisible by five and three replace it by "FizzBuzz".
*/

/*
SOLUTION: Check the numbers in the given interval (from 'start' to 'end').
Using modulo operator check divisibility by 3, 5, and both.
Replace the numbers with appropriate words using .push() on the empty array.
*/


function fizzBuzz(start, end) {
  let newArr = [];
  for (let i = start; i <= end; i+=1) {
      if ((i % 3 == 0) && (i % 5 == 0)) {
          newArr.push('FizzBuzz');
      } else {
          if (i % 3 == 0) {
              newArr.push('Fizz');
          } else if (i % 5 == 0) {
              newArr.push('Buzz');
          } else {
              newArr.push(i);
          }
      }
  }
  return newArr;
}


/*
TEST CASES:
fizzBuzz(1,5)
['1','2','Fizz','4','Buzz']

fizzBuzz(3,9)
['Fizz','4','Buzz','Fizz','7','8','Fizz']

fizzBuzz(3,16)
['Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz','16']

fizzBuzz(4,13)
['4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13']

fizzBuzz(49,53)
['49','Buzz','Fizz','52','53']
*/
