function fib(num) {
  if (num <= 1) return num;
  let fibNumber = fib(num - 1) + fib(num - 2);
  return fibNumber;
}

let a = 6;
while(a){
    console.log(fib(a));
    a--;
}
