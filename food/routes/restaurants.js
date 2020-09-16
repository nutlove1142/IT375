
const express = require('express');
const router = express.Router();

const restaurants = require('../data');

router.get('/',(req,res)=>{
    res.json(restaurants);
});

router.get('/:id',(req,res)=>{
    res.json(restaurants);
});

router.post('/',(req,res)=>{
    res.json(restaurants);
});

router.put('/:id',(req,res)=>{
    res.json(restaurants);
});

router.delete('/:id',(req,res)=>{
    res.json(restaurants);
});

module.exports = router;