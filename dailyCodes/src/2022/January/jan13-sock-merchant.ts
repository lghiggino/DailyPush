/**
 * There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example
n=7
array=[1,2,1,2,1,3,2]

There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns

int: the number of pairs
Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers, , the colors of the socks in the pile.

Constraints

 where 
Sample Input

STDIN                       Function
-----                       --------
9                           n = 9
10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
Sample Output

3
 */


export function sockMerchant(ar: number[]): number {
    // Write your code here
    const reducedPairs = ar.reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 0
        }
        obj[item]++

        return obj
    }, {})

    const amounts: number[] = []

    for (let key in reducedPairs) {
        amounts.push(reducedPairs[key])
    }

    let totalPairs = amounts.map(item => { return Math.floor(item / 2) })

    let reducedFloor = totalPairs.reduce((prev, curr) => {return prev + curr}, 0)

    return reducedFloor
}