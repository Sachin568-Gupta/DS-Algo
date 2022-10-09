function merge(arr, s, mid, e) {
  // merge array using two seprate blank arrays

  // find both left and right subarray length
  let len1 = mid - s + 1;
  let len2 = e - mid;

  // create new 2 subarray and copy main array values in it
  let leftArr = new Array(len1);
  let rightArr = new Array(len2);
  let mainArrIndex = s;

  for (let i = 0; i < len1; i++) {
    leftArr[i] = arr[mainArrIndex++];
  }

  mainArrIndex = mid + 1;
  for (let i = 0; i < len2; i++) {
    rightArr[i] = arr[mainArrIndex++];
  }

  // merge both sub arrays
  let index1 = 0;
  let index2 = 0;
  mainArrIndex = s;
  while (index1 < len1 && index2 < len2) {
    if (leftArr[index1] < rightArr[index2]) {
      arr[mainArrIndex++] = leftArr[index1++];
    } else {
      arr[mainArrIndex++] = rightArr[index2++];
    }
  }

  while (index1 < len1) {
    arr[mainArrIndex++] = leftArr[index1++];
  }
  while (index2 < len2) {
    arr[mainArrIndex++] = rightArr[index2++];
  }
}

function mergeSort(arr, s, e) {
  if (s >= e) {
    return;
  }
  let mid = s + parseInt((e - s) / 2);
  mergeSort(arr, s, mid);
  mergeSort(arr, mid + 1, e);

  // merge arrays
  merge(arr, s, mid, e);
}

let arr = [54, 2, 34, 1, 46, 76, 43, 56, 32, 76, 3, 23, 1, 21, 11, 43];

mergeSort(arr, 0, arr.length - 1);

console.log(arr);
