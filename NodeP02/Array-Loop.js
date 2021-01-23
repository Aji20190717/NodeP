var number = [1, 400, 12, 34, 5];
var i = 0;
var cnt = 0;

while(i < number.length) {
    // cnt = cnt + number[i];
    cnt += number[i];
    i++;
}

console.log("cnt : " + cnt);