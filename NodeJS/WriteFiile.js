const { error } = require('console');
const fs = require('fs');
const createtext = 'what are you doing,why are you there ?';
fs.writeFile('./test/othertext.txt',createtext,(err)=>{
    if(err){
        console.log("Error have this text file ,try again");
    }
});