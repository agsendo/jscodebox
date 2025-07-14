// TASK: Given is a number price and a number discount. Return the calculated discounted price. Round to two decimal places.

/*
SOLUTION: Calculate the remaining % of the original price, after the discount.
Check if the result is an integer. If not, round to 2 decimal places.
*/


function getReducedPrice(price, discount) {
    let reduced = (100-discount)/100;
    let newPrice = reduced * price;

    if (newPrice % 1 !== 0) {
    }
    return +newPrice.toFixed(2);
}


/*
TEST CASES:
getReducedPrice(1000, 20)
800

getReducedPrice(99, 10)
89.1

getReducedPrice(42,3)
40.74

getReducedPrice(499.95, 15)
424.96

getReducedPrice(3.99, 80)
0.8
*/
