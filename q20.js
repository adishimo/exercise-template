function getDuplicates(arr) {
    let duplicates= [];
    for(let i = 0; i < arr.length; i++) {
        let checking = arr[i];
        for (let k = 0; k < arr.length; k++) {
            if (checking===arr[k] && i!==k){
                if(duplicates.findIndex((x) =>x === checking)===-1){
                    duplicates.push(checking);
                }
               
                break;
            }

        }
    }
    return duplicates;
}
console.log(getDuplicates([2,2,6,9]));