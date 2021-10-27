function fizzBuzz(n) {
    // Write your code here
    // for(let i =1; i<=n;i++){   
    //     if(i%3==0 && i%5==0){
    //         return console.log("FizzBuzz");
    //     }
    //     else if(i%3==0 && i%5!=0){
    //         return console.log("Fizz");
    //     }
    //     else if(i%3!=0 && i%5==0){
    //         return console.log("Buzz");
    //     }
    //     else
    //         return console.log(i);
    // }
    for (let i=1; i<=n; i++) {
    console.log((i%3==0&&i%5==0)?"FizzBuzz":(i%3==0)?"Fizz" :         (i%5==0)?"Buzz" : i);
}
}