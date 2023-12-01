const express=require('express');
const port=5500;
const app=express();
const mongoose=require('mongoose');
const User=require('./model/model');
const URI="mongodb+srv://fidelyinguane:LeuKFSH2pUV0TOws@cluster0.uykv9lc.mongodb.net/crud?retryWrites=true&w=majority";
mongoose.connect(URI,{
    ssl:true
});
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/views/add',(req,res)=>{
    res.render('add')
})
app.post('/views/add',(req,res)=>{
    const reqBody=req.body;
    // console.log(reqBody)
    const user=new User(reqBody);
    user.save()
    .then(message=>console.log('User inserted successfully!'))
    .catch(error=>console.log(error))
 })
app.get('/views/list',(req,res)=>{
    User.find()
    .then(users=>{
        res.render('list',{users:users})

    })
    .catch(error=>console.log(error))
})
app.delete('/views/list/:id',(req,res)=>{
    const id=req.params.id;
    User.findByIdAndDelete(id)
    .then(result=>{
        res.json({redirect:'/views/list'})
    })
})
app.get('/views/edit/:id',(req,res)=>{
    const id=req.params.id;
    User.findById(id)
    .then(result=>{
       res.render('edit',{details:result});
    })
})
app.post('/views/edit/:id',(req,res)=>{
    const id=req.params.id;
    const reqBody=req.body;
    User.findByIdAndUpdate(id,reqBody,{new:true})
    .then(result=>{
       console.log('user upadated');
    })
})
app.listen(port,()=>{
    console.log(`App running on ${port}`);
})