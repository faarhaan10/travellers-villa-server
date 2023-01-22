const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');

// Mongo DB Connections
const uri = "mongodb+srv://travellerDB:9hWwVNU1dLyrRoEn@cluster0.telyg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


// Middleware Connections
app.use(cors())
app.use(express.json())


// Routes
async function connectDB() {
    try {
        // db collections
        const database = client.db('traveller');
        const blogCollection = database.collection('blogs');


        //all get api's\\

        //all post api's
        app.post('/blogs', async (req, res) => {
            const blog = req.body;
            const result = await blogCollection.insertOne(blog);
            if (result.insertedId) {
                res.send({ result, success: true })
            }
            else {
                res.send({ success: false, message: 'Something went wrong' })
            }
        })


    }
    finally { }
}
connectDB()


// Connection
app.get('/', (req, res) => {
    res.send('<h1>Hello Touch Me</h1>');
})

const PORT = process.env.PORT || 6006
app.listen(PORT, () => {
    console.log('App running in port: ' + PORT)
})