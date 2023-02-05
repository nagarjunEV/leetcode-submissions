var fizzBuzz = function(n) {
    let three = 3, five = 5, fifteen = 15, res = [];
    for(let i=1;i<=n;i++){
        if(i==fifteen){
            res.push("FizzBuzz");
            three += 3;
            five += 5;
            fifteen += 15;
        }else if(i==three){
            res.push("Fizz");
            three += 3;
        }else if(i==five){
            res.push("Buzz");
            five += 5; 
        }else
            res.push(i.toString());
    }
    return res
};