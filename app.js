'use strict';
function fib(n) {
    // 0 の時は 0 を返す
    if (n === 0) {
        return 0;
    }
    // 1 の時は 1 を返す
    else if (n === 1) {
        return 1;
    }
    // それ以外の時
    return fib(n - 1) + fib(n - 2);
}
const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}