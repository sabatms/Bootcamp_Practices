function getweekday(date){

    const weekdays = ['Sunday' , 'Monday', 'Tuseday' ,'Wednesday' ,'Thursday' ,'Friday' ,'Saturday'];

    const dayIndex = date.getDay();

    return weekdays[dayIndex];
}

console.log(getweekday(new Date()));
console.log(getweekday(new Date ('2012-10-10')));

