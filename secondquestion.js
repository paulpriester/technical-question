// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times.
//  Note: k is guaranteed to be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

var decodeString = function(s) {
    if (!s || s.length === 0) { return ''; }
    
    var digit = [];
    var strings = [];
    strings.push('');
    
    for (let i = 0; i < s.length; i++) {
        // is a number
        if (!isNaN(s.charAt(i))) {
            let number = '';
            while (!isNaN(s.charAt(i))) {
                number += s.charAt(i);
                i++;
            }
            i--;
            digit.push(parseInt(number));
        } else if (s.charAt(i) === '[') {
            strings.push('');
        } else if (s.charAt(i) === ']') {
            let k = digit.pop();
            let chars = strings.pop();
            let substring = '';
            for (let j = 0; j < k; j++) {
                substring += chars;
            }
            strings.push(strings.pop() + substring);
        } else {
            strings.push(strings.pop() + s.charAt(i));
        }
    }
    
    return strings[0];
};