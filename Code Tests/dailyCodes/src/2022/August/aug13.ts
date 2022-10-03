export type TypeOfTypes = 'string' | 'number' | 'object'

export function filterByTypeOf(array: any[], type: TypeOfTypes){
    const reduced = array.reduce((acc, curr) => {
        if(typeof(curr) === type){
            console.log('entrou aqui e curr é:', curr, 'acc é:', acc)
            return acc.concat(curr)
        }
        return acc
    }, [])
    return reduced
}