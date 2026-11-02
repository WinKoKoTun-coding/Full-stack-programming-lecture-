const { log } = require("console");
const sum = require("./app")
console.log("hello good morning pr ");
// console.log(sum(2,5))
// console.log(sum.sum(2,5));
// console.log(sum.PI);
// console.log(new sum.someObjectClass);

const eventEmitter = require("events")
const eventemitter= new eventEmitter()

 eventemitter.on("tutorials",()=>{
    console.log("EventEmittter is running");
    
})

eventemitter.emit("tutorials")


class student extends eventEmitter{
    constructor(name){
        super()
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

const perdo = new student("mg mg")

perdo.on("student",()=>{
    console.log("my name is "+ perdo.name);
    
})

perdo.emit("student")

const readline = require('readline');
const { random } = require("lodash");

const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

let num1 = Math.floor((Math.random() * 10)+ 1)
let num2 = Math.floor((Math.random() * 10)+ 1)
let answer = num1 + num2
console.log(answer);



r1.question(`what is ${num1} + ${num2} ? \n`,(userInput)=>{
 if(userInput){
   if(userInput.trim() == answer){
    r1.close()
   }else{
    r1.setPrompt("Incorrect this answer , try again ..."+"\n")
    r1.prompt()
    r1.on('line',(userInput)=>{
        if(userInput.trim() == answer){
            r1.close()
        }else{
            r1.setPrompt(`Your answer is${userInput}.. is incorrect\n`);
            r1.prompt()
            
        }
        
    })
   }
    
    
 }
})

r1.on("close",()=>{
    console.log("correct!!!!");
    
})






