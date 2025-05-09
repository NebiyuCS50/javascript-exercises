const fibonacci = function(num) {
    if (num <0){
        return 'OOPS'
    }
    let sum =0;
    let array = [0,1];
    for(i = 2; i<=50;i++){
        array.push(array[i-2]+ array[i-1]);
    }
    return array[num];
};

// Do not edit below this line
module.exports = fibonacci;
