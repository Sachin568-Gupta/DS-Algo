
function partition(arr, s, e){

    let pivot = arr[s];
    let count = 0;
    for(let i=s+1; i<= e; i++){
        if(arr[i] <= pivot){
            count++;
        }
    }

    // place pivot at right index
    let pivotIndex = s + count;
    let temp = arr[s];
    arr[s] = arr[pivotIndex];
    arr[pivotIndex] = temp;
    

    // for sort left and right element from pivot index
    let i = s;
    let j = e;

    //checking all left elements are smaller from pivotIndex value and right are greater
    while(i < pivotIndex && j > pivotIndex){
        while(arr[i] <= pivot){
            i++;
        }
        while(arr[j] > pivot){
            j--;
        }

        if(i < pivotIndex && j > pivotIndex){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    return pivotIndex;
}

function quickSort(arr, s, e) {
  if (s >= e) return;

  p = partition(arr, s, e);
  //sort left part
  quickSort(arr, s, p - 1);

  //sort right part
  quickSort(arr, p + 1, e);
}

let arr = [3, 1, 5, 2, 6, 99, 4, 88];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
