const http = require('http')
const fs = require('fs')
const https = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    fs.readFile('./pageFolder/home.html',(err,data)=>{
        if(err){
            console.log(err)
             res.end();
        }else{
             res.write(data)
            
             res.end();
        }
    })
   
})

https.listen("3000","localhost",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("server is running on port 3000")
    }


})