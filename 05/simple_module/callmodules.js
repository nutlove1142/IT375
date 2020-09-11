const cm = require('./ownmodules');
const myuser = require('./mymodules');
const express = require('express');
const app = express();

const port = process.env.port || 8000;

app.use(express.json());

app.get('/api/date',(req,res)=>{
    res.write("The current date and time is  "+ cm.myDateTime());
    res.write("/nReported by "+cm.myName());
    res.end();

});
 app.get('/api/myinfo/:fanme/:age/:email',(req,res)=>{
    const fname = req.params.fname;
    const age = req.params.age;
    const email = req.params.email;
    const newuser = new myuser(fname,age,email);
    res.send(newuser.getUserStats());

 });

app.listen(port,'127.0.0.1',()=>{
    console.log(`listening on port ${port}`);

});   
