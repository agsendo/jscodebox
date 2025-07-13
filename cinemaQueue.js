/*
TASK: Given is a number max representing the maximum number of groups in the queue. You also have an array visitors of people,
where 'X' stands for one person and 'O' for one companion. A group is minimum one 'X' and any number of 'O's.
Check if all groups fit into the queue. Return 'full' if all fit. Otherwise, return the number of groups that are too many or not full.
*/

/*
SOLUTION: Iterate through the array. Count the number of 'X's (the condition to have a group).
*/


function cinemaQueue(max, visitors) {
    let counterGroups = 0;
    let areO = false;
    let message = '';

    for (let i = 0; i < visitors.length; i += 1) {
        if (visitors[i] == 'O') {
            areO = true;
        } else if (visitors[i] == 'X') {
            counterGroups += 1;
        }
    }
    if (counterGroups == max) {
        message = 'full';
    } else if (counterGroups < max) {
        message = 'not full: ' + (max - counterGroups);
    } else {
        message = 'too much: ' + (counterGroups - max);
    }
    return message;
}

/*
TEST CASES:

cinemaQueue(6, ['X','O','X','O','O','X','X','X','O','X'])
'full'

cinemaQueue(6, ['X','O','X','O','O','X','X','X','O','X','X','X'])
'too much: 2'

cinemaQueue(4, ['X','O','X'])
'not full: 2'

cinemaQueue(8, ['X','O','X','X'])
'not full: 5'

cinemaQueue(5, ['X','O','X','O','O','X','X','O','X'])
'full'
*/
