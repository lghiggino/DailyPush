function getDayName(dateString) {
    const weekday = new Date(dateString).getDay()
    let dayName
    // Write your code here
    switch (true) {
        case weekday === 0:
            dayName = "Sunday"
            break;
        case weekday === 1:
            dayName = "Monday"
            break;
        case weekday === 2:
            dayName = "Tuesday"
            break;
        case weekday === 3:
            dayName = "Wednesday"
            break;
        case weekday === 4:
            dayName = "Thursday"
            break;
        case weekday === 5:
            dayName = "Friday"
            break;
        case weekday === 6:
            dayName = "Saturday"
            break;

}   
    return dayName;
}

module.exports = { getDayName }