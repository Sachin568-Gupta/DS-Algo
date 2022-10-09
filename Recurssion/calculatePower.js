function calculatePower(a,b){
  if(b==0) return 1;
    b--;
  return a * calculatePower(a,b);
}

function calclateOptimizePower(a,b){
    if(b==0) return 1;
    if(b==1) return a;

    let ans = calclateOptimizePower(a,parseInt(b/2));
    if(b % 2 == 0) return ans * ans;
    else return a * ans * ans;
}

let a = 2, b=50;
console.log(calculatePower(a,b));

console.log(calclateOptimizePower(a,b));
