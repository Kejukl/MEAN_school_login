const express=require('express')
const app= express()

var usersModule=require("./routes/users");

console.log('APP section')
app.use(express.json());
app.use(express.urlencoded());

//Lets create a fake database object
//object is between flower brackets,
//lets create array of objects
app.use(express.static('public'));
app.use("/users",usersModule)


app.listen(4001,()=>
{console.log('express running in 4001')})


