/*
TASK: Given are two variables child1 and child2 with a numeric value between 0 and 99.
Return true if a child is between 0 and 14 (0 and 14 inclusive).
Return false if both or none in between.
*/

/*
SOLUTION: This needs combined comparisons with logical conditions (&& and ||) to check
if only one child has a value in the given interval.
*/


function littleChild(child1, child2) {
    if ((child1 >= 0) && (child1 <= 14) && ((child2 < 0) || (child2 > 14))) {
      return true;
    }
    if ((child2 >= 0) && (child2 <= 14) && ((child1 < 0) || (child1 > 14))) {
      return true;
    }
    return false;
}

/*
TEST CASES:
littleChild(4,15)
true

littleChild(9,7)
false

littleChild(21,20)
false

littleChild(0,3)
false

littleChild(15,13)
true

littleChild(-3,11)
true

littleChild(-5,-11)
false
*/
