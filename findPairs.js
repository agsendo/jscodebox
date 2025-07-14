/*
TASK:
Given an array of integers arr and a target sum target, find all pairs of distinct integers
that add up to the target sum. Return an array of arrays containing these pairs sorted in ascending order.
If there are no such pairs, return an empty array. Your result array(s) must have the same sorting as the test cases.
*/

/*
SOLUTION: First sort the array. Next, iterate through it with index i, but also with index j, from the end towards the index i.
For each of the numbers in the array with index i, check the remaining part of the array (bigger numbers) with index j to find pairs that would give the target sum.
Push the pair that meets the conditions to another array with all of the pairs.
*/


function findPairs(arr, target) {
    let pairs = [];
    arr.sort();
    for (let i = 0; i < arr.length; i += 1) {
        let j = arr.length - 1;
        while (i < j) {
            if (arr[i] + arr[j] == target) {
                pairs.push([arr[i], arr[j]]);
            }
            j -= 1;
        }
    }
    return pairs;
}
