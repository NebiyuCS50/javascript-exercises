const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	const total = array.reduce((pre,next)=>{
    return pre+next;
  },0)
  return total;
};

const multiply = function(array) {
  const total = array.reduce((pre,nxt)=>{
    return pre*nxt;
  })
  return total;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let total = 1;
  if(a===0){
    return 1;
  }
	for(i = 1; i<=a; i++){
    total = total *i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
