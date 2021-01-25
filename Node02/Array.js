var arr = ['A', 'B', 'C', 'D', 'E'];
console.log(arr[1]);
console.log(arr[3]);

arr[2] = 'c';
console.log(arr);
console.log(arr.length);

arr[5] = 3;
arr.push('F');
console.log(arr);

// 원래 배열에 값을 새롭게 추가하는 정석은 push를 사용하는 것인데 해보니까,
// arr[5] = 3; 방식도 추가하는데 문제가 없긴 하다.