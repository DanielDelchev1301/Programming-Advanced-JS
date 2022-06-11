function pieceOfPie(arr, start, end) {
    let flag = false;
    let result  = [];
    for (let curr of arr) {
        if (curr == end) {
            result.push(end);
            break;
        }
        if (flag) {
            result.push(curr);
        }
        if (curr == start) {
            result.push(curr);
            flag = true;
        }
    }
    return result;
}
pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');