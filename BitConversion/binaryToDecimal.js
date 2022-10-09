let n = 1111;
let ans = 0, i = 0;
while(n != 0 ){
    let digit = n % 10;
    ans = (digit * Math.pow(2, i)) + ans;
    i++;
    n = parseInt(n/10);
}

console.log(ans);