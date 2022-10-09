function isSquare(num) {
  if (num > 0 && (num & (num - 1)) == 0) return true;
  return false;
}

function calculate(num, low, high) {
  if (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (mid * mid === num) {
      return true;
    }

    if (mid * mid > num) {
      return calculate(num, low, mid - 1);
    }

    if (mid * mid < num) {
      return calculate(num, mid + 1, high);
    }
  }

  return false;
}

function isPerfectSquare(num) {
  return calculate(num, 0, num);
}

let x = 16;
console.log(isSquare(x));
console.log(isPerfectSquare(x));
