export default function solution(matrix) {
    let sum = 0
    let skipIndexArray = []
    
    for (let i = 0; i < matrix.lenght; i++){
        for (let j = 0; j < matrix[i].lenght; j++ ){
            console.log("matrix[i][j]", matrix[i][j])
            if (matrix[i][j] === 0){
                skipIndexArray.push(j)
            }
            else{
                sum += matrix[i][j]
            }
        }
    }
    console.log("skipIndexArray", skipIndexArray)
    return sum
}
