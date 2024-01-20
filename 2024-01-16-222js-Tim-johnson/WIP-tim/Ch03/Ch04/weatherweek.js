const weatherOfTheWeek = [
    {day:"Monday",high:100,low:60}, 
    {day:"Tuesday",high:95,low:50}, 
    {day:"Wednesday",high:65,low:40}, 
    {day:"Thursday",high:70,low:60},
    {day:"Friday",high:75,low:50}, 
    {day:"Saturday",high:80,low:70}, 
    {day:"Sunday",high:90,low:45}
]; 
let lowestDay = weatherOfTheWeek[0];
let highestDay = weatherOfTheWeek[0];
for (let index = 0; index < weatherOfTheWeek.length; index++) {
    const day = weatherOfTheWeek[index];
    if(lowestDay.low > day.low){
        lowestDay = day;
        console.log(`The lowest temperture this week was on
        ${lowestDay.day} and it was ${lowestDay.day}`);
    }
    if (highestDay.high < day.high){
        highestDay = day;
        console.log(`The highest temperture this week was on
        ${highestDay.day} and it was ${highestDay.day}`);
    }
 }
    


 