//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/todolistDB");

const itemsSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "wake up"
});

const item2 = new Item({
  name: "brush up"
});

const item3 = new Item({
  name: "eat up"
});

deafaultItems = [item1, item2, item3];

const listSchema = new mongoose.Schema({
  name: String,
  items: [itemsSchema]
});

const List = mongoose.model("List", listSchema)


app.get("/", function(req, res) {
  Item.find({}).then(function(items){
    if(items.length === 0){
      Item.insertMany(deafaultItems);
      res.redirect("/");
    }
    else{
      res.render("list", {listTitle: "Today", newListItems: items});
    }
  });
});

app.get("/:customListName", function(req, res){
  customListName = _.capitalize(req.params.customListName);
  List.findOne({name: customListName}).then(function(foundList){
    if (foundList){
      res.render("list", {listTitle: customListName, newListItems: foundList.items});
    }
    else{
      const list = new List({
        name: customListName,
        items: deafaultItems
      });
      list.save();
      res.redirect("/"+ customListName);
    }
  });
  
});

app.post("/delete", function(req, res){
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;
  if(listName === "Today"){
    Item.findByIdAndRemove(checkedItemId).then(function(){});
    res.redirect("/");
  }
  else{
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}).then(function(){});
    res.redirect("/"+ listName);
  }
});

app.post("/", function(req, res){
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const item = new Item({
    name: itemName
  });
  if (listName === "Today"){
    item.save();
  res.redirect("/");
  }else{
    List.findOne({name: listName}).then(function(list){
      list.items.push(item);
      list.save();
      res.redirect("/" + listName);
    });
  }
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});




// if (req.body.list === "Work") {
//   workItems.push(item);
//   res.redirect("/work");
// } else {
//   items.push(item);
//   res.redirect("/");
// }