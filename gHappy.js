// TASK: A small 'g' is 'happy', but only if a small 'g' follows before or after it. Return true if all g's are happy.

/*
SOLUTION: Iterate through string. If there is a 'g', check for the neighbouring letters.
If the index i is bigger than 0 (previous character exists) or the index i is smaller than length of string -1
(there is still at least 1 character), check a character before and after. If it is another 'g', it is 'happy'.
*/


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


/*
TEST CASES:
gHappy('xyggxyz')
true

gHappy('Huggy Wuggy')
true

gHappy('xxzzgxxzz')
false

gHappy('garage of eggs')
false

gHappy('yyzzgxxzzggzzy')
false

gHappy('Not bigGgame!')
false

gHappy('')
false

gHappy('g')
false

gHappy('gg')
true

gHappy('egg')
true

gHappy('BIGger!')
false

gHappy('The bigggest egggame!')
true

gHappy('garage')
false
*/
