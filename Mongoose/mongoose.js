//Import Mongoose Package
const mongoose = require("mongoose");

//connect to mongoose
mongoose.connect("mongodb+srv://<--userName--->:<--password-->@mongodb-explore.fsrhkft.mongodb.net/<--database-->?retryWrites=true&w=majority")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err.message + " Failed to connect");
  });

//Create schema
const studentSchema = new mongoose.Schema({
  name: String,
  city: String,
  courses: Array,
  age: Number,
  isActive: Boolean,
})

//Model
const Student = mongoose.model("Student", studentSchema);

// create students
Student.create({
  name:"John",
  city:"Mumbai",
  courses:["DBMS","DSA","NODE","React"],
  isActive:true
}).then((student)=>{
  console.log(student);
}).catch((err)=>{
  console.log("Not Inserted "+err);
})

//Find all students
Student.find().then((student)=>{
  console.log(student);
}).catch((err)=>{
  console.log(err);
})

//Find al students whose city is Mumbai
Student.find({city:"Mumbai"}).then((student)=>{
  console.log(student);
}).catch((err)=>{
  console.log(err);
})

//Find single record
Student.findOne({name:"John"}).then((student)=>{
  console.log(student);
}).catch((err)=>{
  console.log(err)
});

// Update record
Student.findOneAndUpdate(
  { name: "John" },
  { city: "Kolkata" },
  { new: true }
  ).then((student) => {
    console.log(student);
  }).catch((err) => {
    console.log(err);
  });


//Update find By Id
Student.findByIdAndUpdate(
  "6475cbc7ff33be749936f24f",
  {city:"Delhi"},
  {new:true}
).then((student)=>{console.log(student)}).catch((err)=>{console.log(err)});