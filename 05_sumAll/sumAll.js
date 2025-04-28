const sumAll = function(num_1, num_2) {
    let result=0;
    if (num_1 < 0 || num_2< 0 || !Number.isInteger(num_1)|| !Number.isInteger(num_1)|| typeof(num_1) ==="string"||typeof(num_2) ==="string"||typeof(num_1) ==="object"||typeof(num_2) ==="object") {
        return 'ERROR';
    }
    else{
        if(num_1>num_2){
            for(let i = num_2; i<=num_1; i++){
                result = result + i;   
            
            }
        }
        else{
            for(let i = num_1; i<=num_2; i++){
                result = result + i;    
            }
    
        }
        
    };
    return result;
};
// Do not edit below this line
module.exports = sumAll;
