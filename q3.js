
function first(array, n){
    console.log("n is " + n);
    console.log("array is ", array);
    if (n === undefined) {
        return array[0];
    }
    const ans = [];
    for (let i = 0; i < n && i < array.length; i++) {
        const element = array[i];
        ans.push(element)
    }
    console.log(ans);
    return ans;
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

