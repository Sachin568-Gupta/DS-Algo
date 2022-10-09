function reverse(str, start){
    if(start > str.length - start - 1) return str;

    let temp = str[start];
    str[start] = str[str.length - start - 1];
    str[str.length - start - 1] = temp;
    start++;
    return reverse(str, start);
}
let str = "sachin Gupta";
console.log(reverse(str.split(""), 0).join(""));