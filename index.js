const express = require("express");
 
// Creating express app object
const app = express();


 

//et product=require('./models/productDB.js')
//let router=express.Router();


// mongoose.connect(`mongodb+srv://test2:test2@cluster0.rxv1vot.mongodb.net/?retryWrites=true&w=majority`)
//         .then(function(){
//             console.log("DB connected...");
//         })
//         .catch(function(error){
//              console.log(error);
//         })


 // Handling '/' route
app.get("/", (req, res) => {
    res.send("unknown request");
})
 
// Handling '/data' route    
app.get("/data", (req, res) => {
    let data= require('./Data/data.json')
    data=JSON.stringify(data)
    const objData=JSON.parse(data)
    console.log(typeof(objData) )
    res.send(objData);
    //res.send("Getting request of GFG");
})


// router.get("/products", async (req,res)=>{
//         let foundProducts= product.find({});
//         res.render('pindex.js',foundProducts);
// })



// router.get("/products/new", async function(req,res){
//           res.render('new.ejs');
// });

// router.post("/products", async function(req,res){
//     let product =new product({
//         name:req.body.name,
//         price:req.body.price,
//         address:req.body.address
//      });
    
//      await product.save();
// });



// Server setup
app.listen(3000, () => {
    console.log("Server is Running");
})

