var checkZeroOnes = function(s) {
    let one = 0, zero = 0, curr1 = 0, curr0 = 0;
    for(let i=0;i<s.length;i++){
        if(s[i]==0){
            curr1 = 0;
            curr0 += 1;
            if(curr0>zero)
                zero = curr0 
        }else{
            curr0 = 0;
            curr1 += 1;
            if(curr1>one)
                one = curr1
        }
    }
    return one > zero
};