// Write a function which take two string and check is this anagram or not

// " " & " " output: true
// "anagram"  &  "nagaram" output: true
// "data" & "tada" output: true
// "rat" & "car" output: false

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let str1Obj = {};
  let str2Obj = {};

  for (var val of str1) {
    if (str1Obj[val]) {
      str1Obj[val] = str1Obj[val] + 1;
    } else {
      str1Obj[val] = 1;
    }
  }

  for (var val of str1) {
    if (str2Obj[val]) {
      str2Obj[val] = str2Obj[val] + 1;
    } else {
      str2Obj[val] = 1;
    }
  }

  for (var key in str1Obj) {
    console.log(key, str2Obj[key], str1Obj[key])
    if (!(str2Obj[key] == str1Obj[key])) {
      return false;
    }
  }

  return true;
}

console.log(checkAnagram("texttwisttime", "timetwisttext")); // time complexity - o(n)
