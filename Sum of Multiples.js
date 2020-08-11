Sum of Multiples

function sumMul(n,m){
    sum = 0;
    if ( n <= 0 || m <= 0 ) {
        return "INVALID";
    }
    for ( let i = n; i < m; i += n ) {
        sum += i;
    }
    return sum;
}