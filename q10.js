let arr = [
    [1,2,4,3],
    [2,4,6,5],
    [34,4,22,7]
    [7,9,88,2],
];
for (let i in arr){
    console.log("row" + i);
    for (let j in arr[i]){
        console.log(" " + arr[i][j]);
    }
}