const Userdb = require('../model/model')

// create user
exports.create = ((req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Can't insert empty content" });
        return;
    }
    // create a new user
    const newuser = Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })
    // save user
    newuser.save().then(
        data => {
            res.redirect('/add-user')
            // res.send(data)
        }
        ).catch(err => { res.status(500).send({ message: err.message || "some error occured" }) })
})


// get data
exports.find = ((req, res) => {
     if(req.query.id){
        const id =req.query.id;
        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(400).send({ message: "Can't found  user" });
            }else{
                res.send(data)
                
            }
        })
        .catch(err=> { res.status(500).send({ message: err.message || "some error occured" }) })
     }
     else{

         Userdb.find()
         .then((user)=>res.send(user))
         .catch((err)=>res.status(500).send({message:err.message||"some error occured"}))
        }
})
// update user data
exports.update = ((req, res) => {
   if(!req.body){
    res.status(400).send({ message: "Can't update empty data" });
   }
   const id = req.params.id;
   Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
   .then(data=>{
    if(!data){
        res.status(400).send({ message: "Can't update User" });
    }else{
        res.send(data)
    }
   }).catch(err=>{
    res.status(500).send({ message: err.message || "some error occured"})
   })
})
// delete user
exports.delete = ((req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({ message: "Can't delete user" });
        }else{
            res.send({ message: "User deleted successfully" });
        }
    }).catch(err=>{
        res.status(500).send({ message: err.message || "some error occured"})
    })
})