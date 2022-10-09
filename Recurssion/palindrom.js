function checkPalindrom(str, start) {
  if (start > str.length - start - 1) {
    return true;
  }
  if (str[start] !== str[str.length - start - 1]) {
    return false;
  } else {
    start++;
    return checkPalindrom(str, start);
  }
}

let str = "isi";

console.log(checkPalindrom(str, 0) ? "Is Palindrome" : "Is Not Palindrome");
