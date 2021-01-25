console.log(Math.round(1.6));   // 2
console.log(Math.round(1.4));   // 1

/**
 * 아래처럼 param에 값 하나를 넣고 argu를 두개 넣어주면, 자리가 있는 argu만 사용함
 * param에 first 자리만 있으므로 앞에 온 2만 argu로 사용됨
    function sum(first) {
        console.log(first);
    }
 */


// java처럼 param을 타입별로 지정해주지 않아도 된다.
// 이유는 js에서 변수가 타입지정이 필요하지 않기 때문.
function sum(first, second) {   // parameter
//    console.log(first + second);
    console.log('a');
    return first + second;
    console.log('b');   // 실행 안됨. return 즉시 function 멈춤. 죽은 코드
}

// sum(2,4);   // argument
console.log(sum(2,4));