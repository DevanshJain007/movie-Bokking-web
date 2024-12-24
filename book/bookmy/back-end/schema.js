import mongoose from "mongoose";
// Creating a new schema for storing movie booking details.
const TicketSchema = new mongoose.Schema({
  movie: { type: String },
  slot: { type: String },
  seats: {
    A1: { type: Number },
    A2: { type: Number },
    A3: { type: Number },
    A4: { type: Number },
    D1: { type: Number },
    D2: { type: Number },
  },
});
// Registering the schema with the Mongoose model.
// const Ticket = mongoose.model('bookmovietickets', TicketSchema);
// module.exports = Ticket;

export default mongoose.model("ticket",TicketSchema)


// mongoose.connect():

// This method is used to connect to the MongoDB database.
// The URL 'mongodb://127.0.0.1:27017/bookMyShow' connects to a MongoDB instance running locally (127.0.0.1), with a database named bookMyShow. If the database doesn't exist, MongoDB will create it when you insert data.
// await:

// The await keyword pauses the execution of the connectDB function until the connection is successful or fails.
// It’s used with async functions for asynchronous operations, such as connecting to a database.
// Error Handling:

// If there's an error connecting to MongoDB, the catch block will log the error to the console.
// Exporting the connectDB function:

// You export the connectDB function so it can be used in other files (like server.js) to establish the database connection.

// mongoose.Schema():
// This method is used to define the schema for the collection in MongoDB.
// The schema defines what kind of data each document in the collection will hold (e.g., a movie name as a string, a slot as a string, and seat information as a nested object of numbers).
// mongoose.model():

// The mongoose.model() method is used to register the schema as a model. It will be the representation of the collection in MongoDB, and it will allow you to interact with that collection in a structured way.
// ticket is the name of the model and also the name of the collection in MongoDB. Mongoose will automatically pluralize it to tickets when storing data in the database.
// Exporting the Model:

// The schema is exported as a model using export default mongoose.model("ticket", TicketSchema).
// This model is used to perform CRUD operations (Create, Read, Update, Delete) on the tickets collection in MongoDB.

// Connecting to the Database:

// When your server starts (in server.js or wherever connectDB() is called), it invokes the connectDB function.
// This will attempt to connect to the MongoDB database (bookMyShow) running on your local machine.
// If the connection is successful, you’ll see the message Connected to Database in the console.
// Using the Ticket Schema:

// Once connected to the database, you can start using the Ticket model (mongoose.model("ticket", TicketSchema)) to interact with the tickets collection.

// How Data is Stored in MongoDB:

// When you save a new Ticket document, Mongoose will automatically convert the schema into a document format and store it in the tickets collection in MongoDB. For example:

// connectDB.js: This file connects to the MongoDB database (bookMyShow) using Mongoose.
// schema.js: This defines a schema for movie bookings and creates a model (ticket) for interacting with the tickets collection in MongoDB.
// Together, these files allow you to connect to MongoDB and interact with movie booking data using the Mongoose model.