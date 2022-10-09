
function solve(str, output, index, ans){

    if(index >= str.length){
        ans.push(output);
        return;
    }

    // exclude
    solve(str, output, index+1, ans);

    // include
    output += str[index];
    solve(str, output, index+1, ans);
    output = "";
}

function subsequence(str){

    let ans = [], output="", index=0;
    solve(str, output, index, ans);
    return ans;
}

let str = "abc";
console.log(subsequence(str));