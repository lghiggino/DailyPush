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
//https://www.youtube.com/watch?v=1AJ4ldcH2t4

function checkPalindrome(word) {
    // let reverseWord = word.split("").reverse().join("")
    //using the stack
    let letters = []
    let reverseWord = ""

    for (let i = 0; i < word.length; i++){
        letters.push(word[i])
    }

    for (let i = 0; i < word.length; i++){
        reverseWord += letters.pop()
    }

    if (reverseWord === word) {
        return true
    } else {
        return false
    }
}

class Stack{
    constructor(){
        this.storage = {}
        this.size = 0
    }

    push(element){
        this.size++
        this.storage[this.size] = element
    }

    pop(){
        let removed = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        return removed
        
    }

    peek(){
        return this.storage[this.size]
    }

    length(){
        return this.size
    }
}

module.exports = { checkPalindrome, Stack }