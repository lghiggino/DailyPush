/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
s="12:01:00PM"

Return '12:01:00'.
s="12:01:01AM"

Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in  hour format
Returns

string: the time in  hour format
Input Format

A single string  that represents a time in -hour clock format (i.e.:  or ).

Constraints

All input times are valid
Sample Input 0

07:05:45PM
Sample Output 0

19:05:45
*/

export function timeConversion(s) {
    const dayPeriod = s.slice(-2)
    
    if (dayPeriod === "PM") {
        const pmMap = {
            "01": "13",
            "02": "14",
            "03": "15",
            "04": "16",
            "05": "17",
            "06": "18",
            "07": "19",
            "08": "20",
            "09": "21",
            "10": "22",
            "11": "23",
            "12": "12"
        }
        const hour = s.slice(0, 2)
        console.log(hour)
        let newHour = pmMap[hour]
        return `${newHour}${s.slice(2,-2)}`
    }
    if (dayPeriod === "AM"){
        const hour = s.slice(0, 2)
        if(hour === "12"){
            return `00${s.slice(2,-2)}`
        }else{
            return `${s.slice(0,-2)}`
        }
    }
}