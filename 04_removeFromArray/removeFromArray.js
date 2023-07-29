const removeFromArray = function(arr, ...elms) {
  for (elm of elms){
    let index = arr.indexOf(elm);
    if(index === -1) continue;
    arr.splice(index, 1);  
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
