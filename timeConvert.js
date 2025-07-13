// TASK: Input with minutes is given. Return a string with the converted time in the format hh:mm.

/*
SOLUTION:  Math.floor() method to calculate the hours by dividing by 60, and the remainder will give the minutes.
Simple adjustments (adding 0 in front) to make sure that the numbers have 2 digits.
*/


function timeConvert(minutes) {
    let h;
    let min;

    h = Math.floor(minutes / 60);
    min = minutes % 60;

    if (h < 10) {
        h = '0' + h;
    }
    if (min < 10) {
        min = '0' + min;
    }
    return (h + ':' + min);
}


/*
TEST CASES:
timeConvert(1000)
'16:40'

timeConvert(59)
'00:59'

timeConvert(61)
'01:01'

timeConvert(1440)
'24:00'

timeConvert(0)
'00:00'

timeConvert(34303)
'571:43'
*/
