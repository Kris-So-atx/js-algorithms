function persistence(num) {
    let count = 0;
    let s = 1;
    if(num < 10) return 0;
    while(num >= 10){
        s = 1;
        num = num +'';
        for(let digit of num){
            s *= +digit;
        }
        num = s;
        count++;
    }
    return count;
}