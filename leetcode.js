/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
  var arr = [];
  for (var i = 0; i < s.length; i++) {
    arr[i] = Number(s[i]);
  }
  for (var i = 0; i < arr.length - 2; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      arr[j] = (arr[j] + arr[j + 1])%10;
    }
  }
  if (arr[0] === arr[1]) return true;
  else return false;
};

console.log(hasSameDigits("34789"));
