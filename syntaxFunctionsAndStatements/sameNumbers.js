function sameNumbers(num) {
    num = String(num);
    num = num.split('');
    let flag = true;
    let sum = 0;
    num.forEach(x => sum += Number(x));
    for (let i = 1; i < num.length; i++) {
        if (num[i] != num[i - 1]) {
            flag = false;
            break;
        }
    }
    console.log(flag);
    console.log(sum);
}
sameNumbers(222223222);