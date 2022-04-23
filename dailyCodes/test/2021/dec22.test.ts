import { Queue } from "../src/Dec-22-Queue";

describe("checks if the Queue methods produce the expected results", () => {
    const animalQueue = new Queue()
    animalQueue.enqueue("abelha")
    animalQueue.enqueue("borboleta")
    animalQueue.enqueue("coelho")

    console.log(animalQueue)

    it("enqueue() should add a new animal to the start of the queue", () => {
        animalQueue.enqueue("dromedário")
        console.log(animalQueue.peek())
        expect(animalQueue.peek()).toBe("abelha")
    })
    it("dequeue() should add element in the Queue", () => {
        let animal = animalQueue.dequeue()
        expect(animal).toBe("abelha")
    })

})