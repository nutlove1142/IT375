const express = require('express')
const app = express();
const port = process.env.port || 8000;

app.use(express.json());
const itStudent=[
    {id:21,'fname': 'พัชรพล','lname':'นวลจันทร์','tel':'0812345678'},
    {id:33,'fname': 'แทนรัก','lname':'มังคละคุปต์','tel':'08122252NODE678'},
    {id:42,'fname': 'ชาลิสา','lname':'เทพดนตรี','tel':'08123456878'},
    {id:45,'fname': 'เสฏฐนันท์','lname':'อรรถสิษฐ์','tel':'0814445678'},
    {id:47,'fname': 'วิรัลยุพา','lname':'ถมรุ่ง','tel':'0818545678'}
];
 

app.get('/api/getstudent',(req,res)=>{
    res.send(itStudent);
});

app.get('/api/querystu',(req,res)=>{
    const myQueryString = req.query;
    if(Object.keys(myQueryString).length !=0){
        const stuId =itStudent.find(element => element.id==parseInt(myQueryString.id));
        if(stuId){
            res.send(stuId); 
        }else{
            res.status(404).send('ไม่พบรหัสนักศึกษานี้');
        }   
    }else{
        res.status(404).send('ไม่พบ api ที่เรียก');
    }
});

app.get('/api/getstuid/:id',(req,res) =>{
    const stuId =itStudent.find(element => element.id==parseInt(req.params.id));
    if(stuId){
        res.send(stuId); 
    }else{
        res.status(404).send('ไม่พบรหัสนักศึกษานี้');
    }   
});


app.listen(port,'127.0.0.1',()=>{
    console.log(`listening on port ${port}`);

});

