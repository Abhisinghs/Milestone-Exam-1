// first we have duplicate items in an array 
let duplicate_item_array=[1,2,3,4,3,4,5,2];

// we use the set property because does not allow to the 
// duplicate element in an array 
let new_array=[... new Set(duplicate_item_array)];

console.log(new_array);
