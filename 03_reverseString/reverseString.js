const reverseString = function(str) {
    let strRev = "";
    let strlen = str.length;
    for(let i = strlen-1; i>=0; i--){
        strRev = strRev+str[i];
    }
    return strRev;
};
reverseString("hello")


// Do not edit below this line
module.exports = reverseString;
