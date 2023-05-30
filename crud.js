// import mongodb section 
const { MongoClient } = require("mongodb");
//create client 
//Connection
// const client = "mongodb+srv://<--userName--->:<--password-->@mongodb-explore.fsrhkft.mongodb.net/$<database>?retryWrites=true&w=majority";
 
// Another Way of Connection
const uri = "mongodb+srv://<username>:<password>@mongodb-explore.fsrhkft.mongodb.net/<database>?retryWrites=true&w=majority";
const username = "<--Enter-->";
const password = "<--Enter-->";
const database = "<--Enter-->";

// Create a new MongoClient
const client = new MongoClient(uri.replace("<username>", encodeURIComponent(username)).replace("<password>", encodeURIComponent(password)));
 
// Define the function for establishing the connection
const dbCon = async () => {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Access the database
    // const db = client.db(database);
    console.log("Database connection successful!");

    //create database ***
    // const db = client.db("school");

    //create collection
    const students = db.collection("students");

    //create documment(student)-Single
    const student1 = await students.insertOne({
      name : "Krishanu Mandal",
      city: "Kolkata",
    });
    console.log(student1);

    // //create documment(students)- Multiple
    const manyStudents = await students.insertMany([
      {
        name : "Krishanu Mandal",
        city: "Murshidabad"
      },
      {
        name : "Ayan Ghosh",
        city: "Hooghly"
      },
      {
        name : "Kartick Sadhu",
        city: "Kolkata"
      },
    ]);
    console.log(manyStudents);

    //Find All student [Display data]
    const allStudent = await students.find().toArray();
      console.log(allStudent)

    //find a student by name krishau
    const finsStd = await students.findOne({name:"Krishanu Mandal"});
    console.log(finsStd);

    //find  student whose city is Kolkata
    const stdKol = await students.find({city:"Kolkata"}).toArray();
    console.log(stdKol);

    // Update Record
    const updatedStd = await students.updateOne({name:"Ayan Ghosh"},{$set:{name:"soulAyan",city:"Barasat"}});
    console.log(updatedStd);
    
    //Delete the record
    const deleteStd = await students.deleteOne({name:"Krishanu Mandal"});
    console.log(deleteStd);


  } catch (error) {
    console.log(error + " ---- [Failed to connect]");
  } finally {
    // Close the connection
    await client.close();
  }
};
// Call the function to connect to the database
dbCon();

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //create documment(student)-Single
    const student1 = await students.insertOne({
      name : "Krishanu Mandal",
      city: "Kolkata",
    });

    console.log(student1);

    // //create documment(students)- Multiple
    // const manyStudents = await students.insertMany([
    //   {
    //     name : "Krishanu Mandal",
    //     city: "Murshidabad"
    //   },
    //   {
    //     name : "Ayan Ghosh",
    //     city: "Hooghly"
    //   },
    //   {
    //     name : "Kartick Sadhu",
    //     city: "Kolkata"
    //   },
    // ]);

    // console.log(manyStudents);