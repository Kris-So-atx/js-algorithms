Sum without highest and lowest number


function sumArray(arr) {
    if(!arr) return 0;
    if(arr.length <= 1) return 0;
    let sum = 0;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    for(let i = 0; i <arr.length; i++){
        sum = sum + arr[i];
    }