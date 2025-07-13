// TASK: A small 'g' is 'happy', but only if a small 'g' follows before or after it. Return true if all g's are happy.

// SOLUTION:


function gHappy(string) {
    let ok = false;

    for (let i = 0; i < string.length; i += 1) {
        if (string[i] == 'g') {
            if (((i > 0)&&(string[i-1] == 'g')) || ((i < (string.length - 1))&&(string[i+1] == 'g'))) {
               ok = true;
            } else {
                ok = false;
                return ok;
            }
        }
    }
    return ok;
}
