// time complexcity O(n)
function findFirstBad(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) return i;
  }
  return -1;
}

// time complexcity log(n)
function optimizeFind(arr) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = start + parseInt((end - start) / 2);
    if (arr[mid] == 1) {
      if (arr[mid - 1] == 0) {
        return mid;
      } else {
        end = mid - 1;
      }
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

let arr = [0, 0, 0, 0,0,0, 1, 1, 1, 1, 1, 1];
// console.log(findFirstBad(arr));
console.log(optimizeFind(arr));
