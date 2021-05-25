// Recursion

/* To Do 4: Telephone Words
Nikki has a new phone number (304-5083) and wants to create a clever way for everyone to remember it. On older telephones, the keypad associates letters with each numeral. Given a seven-digit telephone number, return an array of all possible strings that equate to that phone number. For reference, here is the mapping: [2:ABC; 3:DEF; 4:GHI; 5:JKL; 6:MNO; 7:PQRS; 8:TUV; 9:WXYZ] – for completeness, map 1 to I and zero to O. 

For example, given a phone number 818-2612, return an array of 243 different strings, including “vitamic” and “titania”.
*/

// Function that will be called
function telephoneWords(phoneStr) {
    var phoneLetterObj = {
        '1': ['I'],
        '2': ['A','B','C'],
        '3': ['D','E','F'],
        '4': ['G','H','I'],
        '5': ['J','K','L'],
        '6': ['M','N','O'],
        '7': ['P','Q','R','S'],
        '8': ['T','U','V'],
        '9': ['W','X','Y','Z'],
        '0': ['O']
    }
    var allWordsArr = []; // Array holding all the combinations for this phone number
    rRecursivePhoneNumber(phoneStr,"",0,phoneLetterObj,allWordsArr);
    return allWordsArr;
}

// builtStr = String built so far
// phoneIndex = index where we are so far in phoneStr (phone number)
// allCombosArr = all possible string possibilities for the given phoneStr (phone number)

// Memoization utilized - we need to hold what we've built so far (builtStr), where we are in terms of the original string
// (phoneIndex), and finally all the possibilities we will eventually have (allCombosArr) - these are our "memos"
function rRecursivePhoneNumber(phoneStr, builtStr, phoneIndex, phoneLetterObj, allCombosArr) { 
    // Base case - we stop when we are past the last character in the phone number string
    if (phoneIndex > phoneStr.length - 1) {
        allCombosArr.push(builtStr);
        return; // Finish the recursion
    }
    var curDigit = phoneStr[phoneIndex];
    // Edge case; current character is NOT a digit - in other words, if we access that object
    // with that character, we get undefined
    if (phoneLetterObj[curDigit] == undefined) {
        rRecursivePhoneNumber(phoneStr, builtStr, phoneIndex+1, phoneLetterObj, allCombosArr);
    } else {
        // Build our string as we go
        for (var k = 0; k < phoneLetterObj[curDigit].length; k++) {
            rRecursivePhoneNumber(phoneStr,builtStr+phoneLetterObj[curDigit][k],phoneIndex+1,phoneLetterObj,allCombosArr);
        }
    }
}

console.log(telephoneWords("23"));
console.log(telephoneWords("238"));

// console.log(telephoneWords("867-5309"));
