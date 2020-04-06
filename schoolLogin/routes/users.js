var express=require("express");
var router= express.Router();


var users=[{"id":1,"name":"student1","age":10,"class":'year 5',"isStudent":true},
{"id":2,"name":"student2","age":12,"class":11,"isStudent":true}]

router.get("/",(req,res)=>{
    //console.log('getting users data')
    //res.send(users)
    console.log("querry:::",req.query);
    if(req.query.id){    
        console.log(req.query.id)
        function pickid(obj){
            return obj.id==req.query.id
        }
        console.log('check2')
        var filtered=users.find(pickid)
        console.log(filtered)
        if(filtered){
            res.send(filtered)
        }else{
            res.status(404).send({error:'not found'})
        }
    } else{
        res.send(users)
    }
})

router.get("/:name",(req,res)=>{
    console.log("params:::",req.params.name);

    if(req.params.name){    
        function checkname(obj) {
            return obj.name == req.params.name;
          }
        var filtered=users.find(checkname)
        if(filtered){
            res.send(filtered)
        } else{
            res.status(404).send({error:'not found'})
        }
    } else {
        res.send('JK check')
    }
})


router.post("/", (req, res) => {
    console.log('POSTING')
    console.log(req.body)
    var currentId = users[users.length - 1].id;
    body=req.body
//
    users.push({
    id: currentId + 1,
    name: body.name,
    age: +body.age,
    class: body.Uclass,
    isStudent: body.isStudent==1

});
    res.send();
})








module.exports=router;