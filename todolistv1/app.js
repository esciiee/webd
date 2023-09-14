const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js")


const app = express();

app.use(bodyParser.urlencoded( {extended : true} ));
app.set('view engine', 'ejs');
app.use(express.static("public"));

let items = ["buy food", "cook food", "eat food"];
let workItems = [];

app.get('/', function(req, res) {
    res.render("list", {day : date.getDate(), items : items});

});

app.get('/work', function(req, res){
    res.render("list", {day : "Work", items : workItems});
})

app.get('/about', function(req, res){
    res.render("about")
})

app.post("/", function(req,res){
    if(req.body.button === "Work"){
        let newItem = req.body.newItem;
        workItems.push(newItem);
        res.redirect("/work");
    }
    else{
        let newItem = req.body.newItem;
        items.push(newItem);
        res.redirect("/");
    }
    
});

app.post("/work", function(req,res){
    let newItem = req.body.newItem;
    workItems.push(newItem);
    res.redirect("/work");

})




app.listen(3000, function() {
    console.log('the server has started running on port 3000');
});