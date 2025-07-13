/*
TASK: Given is an array times and a number totalTime. The array times contains the time
taken by a candidate to solve each question in an imaginary coding interview, and totalTime
is the total time taken by the candidate to complete the interview.

The interview has the following criteria:

The interview contains 8 questions in the order: easy, easy, easy, medium, medium, medium, hard, hard.
The maximum allowed time for the entire interview, including a buffer time, is 140 minutes.
The maximum time allowed for each question is as follows:

Easy questions: 10 minutes each.
Medium questions: 15 minutes each.
Hard questions: 20 minutes each.
The function should return "qualified" if the candidate meets all the criteria.
Otherwise, it should return "disqualified".
*/

/*
SOLUTION: Iterate through the times for each question. Check if it doesn't exceed the
time limit for the specified difficulty of the question. Also check if the total time doesn't exceed the limit.
Keep the results in an array of booleans.
If the array is full of 'true' values at the end, it means that the candidate was qualified.
*/


function isQualified(times, totalTime) {
    let isOkArray = [];
    for (let digit in times) {
        if ((((digit<3)&&(times[digit]<=10)) || ((digit>=3)&&(digit<6)&&(times[digit]<=15)) || ((digit>=6)&&(times[digit]<=20)) && (totalTime<=140))) {
            isOkArray[digit] = true;
        } else {
            isOkArray[digit]= false;
        }
    }
    for (let i in isOkArray) {
        if (isOkArray[i] == false) {
           return 'disqualified';
        }
    }
    return 'qualified';
}


/*
TEST CASES:
isQualified([8,9,10,13,14,15,18,19], 110)
'qualified'

isQualified([8,11,10,13,14,15,18,19], 110)
'disqualified'

isQualified([9,10,8,14,15,13,19,20], 108)
'qualified'

isQualified([9,10,8,14,15,13,19,20], 141)
'disqualified'

isQualified([9,11,7,14,15,16,18,19], 109)
'disqualified'

isQualified([10,10,10,15,15,15,20,20], 140)
'qualified'

isQualified([8,9,9,14,15,14,19,21], 109)
'disqualified'

isQualified([8,7,10,14,13,15,18,19], 104)
'qualified'
*/
