/*
TASK: Given is a string hangmanString. Replace every second letter with an underscore
and return the result as a string. The first character must be an underscore.
*/

/*
SOLUTION: Iterate through the letters of the string. If the index is an even number (starting at 0),
then change the letter to underscore.
*/

function hangman(hangmanString) {
    let hangStr = '';
    for (let i = 0; i < hangmanString.length; i += 1) {
        if (i % 2 == 0) {
            hangStr += '_';
        } else {
              hangStr += hangmanString[i];
        }
    }
    return hangStr;
}

/*
Test Cases:

hangman('TestString')
'_e_t_t_i_g'

hangman('Foobar')
'_o_b_r'

hangman('Demo')
'_e_o'

hangman('JS is fancy')
'_S_i_ _a_c_'

hangman('ThisIsAnFancyString')
'_h_s_s_n_a_c_S_r_n_'
*/
