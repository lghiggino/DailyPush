function solution(sequence: number[]) {
    let counter = 0
    for (let i = 1; i < sequence.length; i++){
        if(sequence[i-1] >= sequence[i]){
            counter ++
            if(counter > 1){
                return false
            }
            if (sequence[i-2] >= sequence[i] && sequence[i-1] >= sequence[i+1]){
                return false
            }
        }
    }
    return true
}
