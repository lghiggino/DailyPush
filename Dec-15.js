/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */

function isPositive(a) {
    if(a > 0){
        return("YES")
    }
    if (a === 0){
        throw new Error("Zero Error")
    }
    if (a < 0) {
        throw new Error("Negative Error")
    }
}

module.exports = {isPositive}

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}



/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function() {
        return(this.w*this.h);
    };
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle{
    constructor(d){
        super(d, d)
    }
}
