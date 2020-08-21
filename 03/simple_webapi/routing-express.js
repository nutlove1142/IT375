const express = require('express');
const app = express();

const port = process.env.port || 8000;



app.get('/',(req,res)=>{
     res.send('Home page');
});
app.get('overview',(req,res) =>{
    res.send('overview page');
}); 
app.get('product',(req,res) =>{
    res.send('product page');
});
app.get('/api/user',(req,res) =>{
    const userData = {id:15,name: 'nuttapon'}
    res.send(userData);
});

app.listen(port,'127.0.0.1',()=>{
    console.log(`listening on port ${port}`);

});