const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

[].concat(arr1, arr2); 
// Becomes `[...[], ...arr1, ...arr2]` when fixed
