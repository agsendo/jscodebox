// TASK: A string url is given. It contains a URL with the HTTP protocol. Return this URL with the HTTPS protocol.

/*
SOLUTION: As each input string is the same, with 'http' at the beginning, we can divide the string into 'left' and 'right part.
The left part will have 4 characters ('http') and the right will be the remaining part of the url.
The final url will be a combination of the left part, addes 's' character and the right part.

Alternatively, we could use the 'indexOf' to find the colon ':' and then divide the given string.
*/


function http2https(url) {
    let left = url.substr(0, 4);
    let right = url.substr(4);

    let httpsUrl = left + 's' + right;
    return httpsUrl;
}


/*
TEST CASES:
http2https('http://jscodebox.com/')
'https://jscodebox.com/'

http2https('http://jscodebox.com/')
'https://jscodebox.com/'

http2https('http://jscodebox.com/index.php?id=2')
'https://jscodebox.com/index.php?id=2'

http2https('http://jscodebox.com:80/home')
'https://jscodebox.com:80/home'
*/
