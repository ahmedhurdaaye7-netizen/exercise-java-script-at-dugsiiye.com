function  operator(a,b,callback) {
   return callback(a,b)
    
}

function add(a,b){
    return a+ b
}

function subtract(a,b){
    return a - b
}
function multi(a,b){
    return a * b
}
function div(a,b){
    return a/b
}
console.log(operator(5,8,add))
console.log(operator(20,10,subtract))
console.log(operator(5,8,multi))
console.log(operator(10,5,div))
