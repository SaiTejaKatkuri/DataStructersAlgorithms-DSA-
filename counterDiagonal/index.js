function diagonalDifference(arr) {
    // Write your code here
    var sumDiag1 = 0;
    var sumDiag2 = 0;
    
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length; j++){
            if( i == j){
                sumDiag1 += arr[i][j]
            }
            if( i+j == arr.length-1 ){
                sumDiag2 += arr[i][j];
            }
        }
    }
    return Math.abs(sumDiag1 - sumDiag2);
}