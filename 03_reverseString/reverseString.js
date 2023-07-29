const reverseString = function(string) {
  let reversedStr = "";
  for(let i = 0; i < string.length; i++){
    let index = string.length - 1 - i;
    reversedStr += string[index];
  }

  return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
