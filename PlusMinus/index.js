function plusMinus(arr) {
    // Write your code here
    // var postive = 0;
    // var negative = 0;
    // var zeros = 0;
    // for ( var i =0; i<arr.length; i++ ){
    //     if(arr[i] <= 1){
    //         postive++;
    //     }
    //     else if(arr[i] < 0){
    //         negative++;
    //     }
    //     zeros++;
    // }
    // return postive/arr.length;
    // return negative/arr.length;
    // return zeros/arr.length;
    
    let positive = arr.filter(number => number > 0).length/arr.length;
    let negative = arr.filter(number => number < 0).length/arr.length;
    let zeros = arr.filter(number => number == 0).length/arr.length;
    return console.log(positive.toFixed(6) + "\n" +negative.toFixed(6) + "\n" + zeros.toFixed(6));
}