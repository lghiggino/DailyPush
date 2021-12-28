class Polygon {
	public dimentions: any;

    constructor(dimentions) {
        this.dimentions = [...dimentions];
    }
    perimeter() {
        let reducedDimentions = this.dimentions.reduce((prev, curr) => {
            return prev + curr
        }, 0)
        return reducedDimentions
    }
}

class Square extends Polygon{
	public width: any;
	public height: any;

    constructor(dimentions) {
        super(dimentions)
        this.dimentions = [...dimentions]
        this.width = this.dimentions[0]
        this.height = this.dimentions[1]
    }

    checkValidDimentions(){
        if (this.dimentions.length !== 2){
            throw new Error("Invalid dimentions length for Square")
        }
        if (this.width !== this.height){
            throw new Error(`Width: ${this.width}, Heigth: ${this.height}. Sides must match in size`)
        }
    }

    perimeter() {
        this.checkValidDimentions()
        return (this.width + this.height) * 2
    }

    area() {
        this.checkValidDimentions()
        console.log("dimentions", this.dimentions)
        if (this.width === 0 || this.height === 0) {
            return 0
        }
        return this.width * this.height
    }
}

module.exports = { Polygon, Square }