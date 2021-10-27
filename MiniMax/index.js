function miniMaxSum(input) {
    // Write your code here
    var arrCopy1 = input.slice();
    var arrCopy2 = input.slice();
    
    var ascArray = arrCopy1.sort(function(a,b) {return a - b})
    var dscArray = arrCopy2.sort(function(a,b) {return b - a})
    
    
    ascArray.pop();
    dscArray.pop();
    
     function getSum(a,b) {
         return a+b;
     }
     
     var result1 = ascArray.reduce(getSum);
     var result2 = dscArray.reduce(getSum); 
      
    return console.log(`${result1} ${result2}`);
}

miniMaxSum([1,2,3,4,5]); //10 14