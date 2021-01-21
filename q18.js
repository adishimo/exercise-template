function binarySearch(arr,fArr) {
  let start = 0;
  let end = arr.length -1;
  while (start<end) {
     let med= (start+end)/2;
     if (arr[med]===fArr){
        return med;
     }else if (arr[med]<fArr){
         start = med+1;
     }else {
         end = med-1; 
     }

     }return -1;
  }
  


