module.exports = function check(str, bracketsConfig) {
  // your solution
  var arr = str.split('');
  var result = true;
  while (arr.length && result) {
    var a = -1;
    for (var i=0; i<arr.length-1; i++) {
      for (var j=0; j<bracketsConfig.length; j++) {
        if (arr[i] === bracketsConfig [j][0] && arr[i+1] === bracketsConfig [j][1] ) {
          a = i;
        }
      }  
    }
    if (a === -1) {
      result = false;
    } else {
      arr.splice (a, 2);
    }
  }
  return result;
}
