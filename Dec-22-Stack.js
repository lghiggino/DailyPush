/*Stack - LIFO
we build the stack adding blocks on TOP of it, and deconstruct it by poping items from the top (lifo)

commom methods are:
  push(), 
  pop(), 
  peek() - displays the top element of the stack, 
  length() - displays the amount of items on the stack
  arrayLike
*/

//Palindrome checker with stack

function checkPalindrome(word) {
    let reverseWord = word.split("").reverse().join("")
    if (reverseWord === word) {
        return true
    } else {
        return false
    }
}

module.exports = { checkPalindrome }