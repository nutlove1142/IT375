const express = require('express');
const app = express();

const port = process.env.port || 8000;


const itStudents = [
    {id:61,name:'sucahda it'},
    {id:62,name:'nuttapon it'}
    
];
const ceStudents = [
    {id:71,name:'supawat it'},
    {id:72,name:'kiattipom it'}
];


const allMajors = {
    'it':itStudents,
    'ce':ceStudents
};    

app.get('/api/:major',(req,res,next)=>{
    const major = req.params.major.toLowerCase();
    if(major == 'it'){
        const jsonString = JSON.stringify(itStudents);
        req.myobj = jsonString;
        next();
    }else if(major == 'ce'){
        const jsonString = JSON.stringify(ceStudents);
        req.myobj = jsonString;
        next();

    }else{
        res.send('major not fourn');
    }
},(req,res)=>{
    req.myobj += 'end of data';
    res.send(req,myobj);
});

app.listen(port,'127.0.0.1',()=>{
    console.log(`listening on port ${port}`);

});