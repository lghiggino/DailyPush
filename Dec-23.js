function getCount(array) {
    let filtered = array.filter(item => {
        if (item.x === item.y){
            return item
        }
    })
    return filtered.length
}

module.exports = { getCount }