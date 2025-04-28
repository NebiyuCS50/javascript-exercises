const repeatString = function(String, num) {
    let str = "";
    if (num<0) {
        return "ERROR";
    }
    else{
    for (i=1; i<=num; i++) {
         str = str + String
    }
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
