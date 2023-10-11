function isPalindrome(word) {
  // Write your algorithm here

  const numberstr = String(word)
  const reversedStr =numberstr.split('').reverse().join('');
  return numberstr === reversedStr;
  
}

/* 
  Add your pseudocode here
*/
//input "word", a string to be checked for palindrome
//convert the word to a string 
///reverse the string 
//check whether original string is equal to reversed string 
       ///if numberstr is equal to reversedStr:
                //  return true
              // else:
                    // return false


/*
  Add written explanation of your solution here
*/
//isPalindrome function takes a 'word' as input and checks if its a palindrome.conerts the word to a string,reverses the string using the Reversestr function
//andthen compares the original string with the reversed to determine if its palindrome 

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
