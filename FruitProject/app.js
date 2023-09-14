// requiring mongoose
const mongoose = require('mongoose');

// connecting to MongoDB server and will look for fruitsDB; if it doesn't exist, it will create a new one
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB',  { useNewUrlParser: true, useUnifiedTopology: true });


// Connect to MongoDB server
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB server");

    // All your database operations go here

    // ...

    // Close the connection after completing the operations



    // creating a schema representing how our data structure might look
    const fruitSchema = new mongoose.Schema({
        name: {
        type: String,
        required: true
        },
        rating: {
        type: Number,
        min:1,
        max:10
        },
        review: String
    });
    
    // adding the new model to the database
    const Fruit = mongoose.model("Fruit", fruitSchema);
    
    // adding a document to the model
    const apple = new Fruit({
        name: "Apple",
        rating: 7,
        review: "too good as fruit"
    });
    
    const kiwi = new Fruit({
        name: "Kiwi",
        rating: 9.5,
        review: "too healthy"
    });
    
    const mango = new Fruit({
        name: "Mango",
        rating: 10,
        review: "too tasty"
    });
    
    const peaches = new Fruit({
        name: "peaches",
        rating: 10,
        review: "too yummy"
    })
    // to save many docs at one time
    Fruit.insertMany([apple, kiwi, mango,peaches]);
    
    // creating a new schema for people
    const peopleSchema = new mongoose.Schema({
        name: String,
        age: Number
    });
    
    // adding a new model to the database
    const People = mongoose.model("People", peopleSchema);
    
    // adding a new document to the people model
    const john = new People({
        name: "John",
        age: 37
    });
    
    // saving the people in the people model
    john.save();
    
    // reading the documents through mongoose
    Fruit.find()
        .then((fruits) => {
        console.log(fruits);
        })
        .catch((err) => {
        console.log(err);
        });
    
    
    mongoose.connection.close();
})
.catch((error) => {
console.log("Error connecting to MongoDB:", error);
});


