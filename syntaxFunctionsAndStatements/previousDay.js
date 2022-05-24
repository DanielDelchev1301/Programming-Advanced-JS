function previousDay(year, month, day) {
    let date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(day);
    let yesterday = new Date(date);
    yesterday.setDate(yesterday.getDate() - 1);
    if (yesterday.getMonth() == 9 && yesterday.getDate() == 31) {
        yesterday.setDate(yesterday.getDate() - 1);
    }
    console.log(`${yesterday.getFullYear()}-${yesterday.getMonth()}-${yesterday.getDate()}`);
}
previousDay(2016, 10, 1);