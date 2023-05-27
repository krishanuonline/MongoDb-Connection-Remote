const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://<username>:<password>@mongodb-explore.fsrhkft.mongodb.net/<database>?retryWrites=true&w=majority";
const username = "----enter----";
const password = "---enter----";
const database = "-----enter----";

// Create a new MongoClient
const client = new MongoClient(uri.replace("<username>", encodeURIComponent(username)).replace("<password>", encodeURIComponent(password)));

// Define the function for establishing the connection
const dbCon = async () => {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Access the database
    const db = client.db(database);

    console.log("Database connection successful!");
  } catch (error) {
    console.log(error + " ---- [Failed to connect]");
  } finally {
    // Close the connection
    await client.close();
  }
};

// Call the function to connect to the database
dbCon();
