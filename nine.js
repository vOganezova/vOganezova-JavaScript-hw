//ninth task

function getMax(arr){
   let max = arr[0];
for (let i = 0; i < arr.length; i++){
    if (max < arr[i] ) {
        max = arr[i];}
}
console.log(max);
}

getMax([23,24,25,4,67]);