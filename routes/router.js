const express = require('express');

const router = express.Router();
const todoList = require('../Model/TodoSchema');

router.get('/todo',async(req,res)=>{
    const data = await todoList.find();
    // console.log(data);
    res.send(data);    
});

router.post('/addtodo',(req,res)=>{
    const data = req.body;
    todoList.create(data);
    res.send(data);
})

router.delete('/delete/:id',async (req,res)=>{
    const id = +req.params.id;
    await todoList.deleteOne({id:id});
    res.send('deleted')
});

router.put('/updatetodo/:id', async (req,res)=>{
    const id = +req.params.id;
    const newData = req.body;
    console.log(newData);
    await todoList.updateOne({id:id},{$set:{id: newData.id, item:newData.item}});
    res.send('Todo Updated')

})

module.exports = router;