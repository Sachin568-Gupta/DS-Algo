function fact(num){
    if(num <= 1){
        return num;
    }
    return num * fact(--num);
}


let a = 6;
console.log(fact(a));