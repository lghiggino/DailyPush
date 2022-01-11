/**
Given an array of integers and a positive integer , determine the number of (i,j) pairs where i < j and ar[i] + ar[j] 
is divisible by k.

Example

ar= [1,2,3,4,5,6]
k = 5

Three pairs meet the criteria: [1,4], [2,3]  and [4,6].

Function Description

Complete the divisibleSumPairs function in the editor below.

divisibleSumPairs has the following parameter(s):

int n: the length of array 
int ar[n]: an array of integers
int k: the integer divisor
Returns
- int: the number of pairs

Input Format

The first line contains  space-separated integers,  and .
The second line contains  space-separated integers, each a value of .

Constraints

Sample Input

STDIN           Function
-----           --------
6 3             n = 6, k = 3
1 3 2 6 1 2     ar = [1, 3, 2, 6, 1, 2]
Sample Output

 5

*/

export function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    // Write your code here
    let count = 0
    for(let i = 0; i< n; i++){
        ar.slice(i+1, n).filter((item)=>{
            if((item + ar[i])%k === 0){
                count++
            }
        })
    }
    return count
}