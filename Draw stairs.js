
Draw stairs
function drawStairs(n) {
    let str = '';
    for(let i =0; i < n; i++){
        for(let j = 0; j < i; j++){
            str = str + ' ';
        }
        if (i === n -1){
            str = str + 'I';
        }
        else str = str + 'I' + '\n';
    }
    return str;
}
