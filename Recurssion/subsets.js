function solve(nums, output, index, ans){
    
    if(index >= nums.length){
        ans.push([...output]);
        return;
    }
    
    //exclude code
    solve(nums, output, index+1, ans);
    
    output.push(nums[index]);
    solve(nums, output, index+1, ans);
    output.pop();
}

var subsets = function(nums) {
    let ans = [];
    let output = [];
    let index = 0;
    solve(nums, output, index, ans);
    return ans;
};

let arr = [1,2,3];
console.log(subsets(arr));
// subsets(arr);