/*Queue - FIFO
we build the queue by adding items to the end of it.
we deconstruct the queue by removing items from the start of it

commom methods are:
  enqueue() -- adding to the queue
  dequeue() -- removing from the queu
*/

//https://www.youtube.com/watch?v=1AJ4ldcH2t4


class Queue {
	public storage: any;
	public head: any;
	public tail: any;

    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }

    enqueue(element) {
        this.storage[this.tail] = element
        this.tail++
    }

    dequeue() {
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }

    peek(){
        let head = this.storage[this.head]
        return head
    }

}

module.exports = { Queue }






function modifyArray(nums) {
    const mapped = nums.map((item) => {
        if (item % 2 === 0) {
            return item * 2
        } else {
            return item * 3
        }
    })
    console.log("log", mapped)
    return mapped

}

// modifyArray([1, 2, 3, 4, 5])