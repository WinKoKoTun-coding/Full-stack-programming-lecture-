// const fs = require('fs');

// fs.writeFile("./test.txt", (error, text) => {
//   console.log("file created!!");
// });

// if(fs.existsSync('./Student')){
// fs.rmdir('./Student',(err)=>{
//     if(err){
//         console.log(err);
//     }

//     console.log('folder Delete Success');

//     fs.unlink('./text.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }})
//     console.log('file delete success');

// })}else{
//   fs.mkdir('./Student',(err)=>{

//     if(err){
//         console.log(err);
//     }

//     console.log('folder create Success');
// })}


const fs = require("fs");

if (fs.existsSync("./Student")) {
  fs.rmdir("./Student", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder delete successfully!!");

    fs.unlink("./test.txt", (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
} else {
  fs.mkdir("./Student", (err) => {
    if (err) {
      console.log(err);
    }

    console.log("folder create successfully");
    fs.writeFile("./test.txt","hello" ,(error, text) => {
      console.log("file created!!");
    });
  });
}


