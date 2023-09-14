//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/wikiDB");

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("Article", articleSchema);

const todolist = new Article({
    title: "todolist",
    content: "today i created a new todo list and i think this is a great idea"
});

// todolist.save();

app.route("/articles")
  .get(function(req, res){
  Article.find({}).then(function(articles){
    if (!articles){
      res.send("error");
    }else{
      res.send(articles);
    }
  });
  })
  .post(function(req, res){
    const article = new Article({
      title: req.body.title,
      content: req.body.content
    });
  article.save().then(function(savedArticle, err){
    if (err){
      res.send(err);
    }
    else{
      res.send("Successfully added a new article");
    }
  });
  })
  .delete(function(req, res){
    Article.deleteMany({}).then(function(){
      res.send("deleted all the articles");
    });
  });


app.route("/articles/:articleTitle")
  .get(function(req, res){
    Article.findOne({title: articleTitle}).then(function(foundArticle){
      if (!foundArticle){
        res.send("0 mathing documetns found");
      }else{
        res.send(foundArticle);
      }
    });
  })
  .put(function(req, res){
    Article.replaceOne({title: req.params.articleTitle}, {title: req.body.title, content: req.body.content}).then(function(newArticle){
      if (newArticle.modifiedCount === 1){
        res.send("Articles has been replaced");
        console.log(newArticle);
      }else{
        res.send("no matching documents have been found");
      }
    });

  })
  .patch(function(req, res){
    
    Article.updateOne({title: req.params.articleTitle}, req.body).then(function(query){
      if (query.modifiedCount === 0){
        res.send("no mathcing documetns found");
      }else{
        res.send("the article has been updated");
      }
    });
  })
  .delete(function(req, res){
    Article.deleteOne({title: req.params.articleTitle}).then(function(del){
      if(del.deletedCount === 0){
        res.send("the file has not been found");
      }else{
        res.send("the file has been deleted"); 
      }
    });
  });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});