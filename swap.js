// TASK: Given is an array numbers with different numbers. Return an array in which the first entry is swapped with the last. The rest remains unchanged.

/*
SOLUTION: Swap, using a temp variable (helper) to store the first item, then change it to the last item, and the last item's to the temp variable.
*/


function swap(numbers) {
    if (numbers.length > 1) {
        let p = numbers[0];
        numbers[0] = numbers[numbers.length - 1];
        numbers[numbers.length - 1] = p;
    }
    return numbers;
}


/*
TEST CASES:
swap([1,5,3,7,2,7,3])
[3,5,3,7,2,7,1]

swap([1,6,2,7,9,3,4])
[4,6,2,7,9,3,1]

swap([1,0])
[0,1]

swap([1])
[1]

swap([])
[]
*/
