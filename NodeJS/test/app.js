const sum = (num1 ,num2 ) => num1 + num2
const PI = 3.14;

class someObjectClass {
    constructor(){
        console.log("Object created");
        
    }
} 

// module.exports.PI = PI
// module.exports.sum = sum
// module.exports.someObjectClass = someObjectClass
// module.exports = sum;

module.exports = {sum : sum , PI : PI , someObjectClass : someObjectClass}