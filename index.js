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

        // const cursor = await blogCollection.findOne({ authorEmail: 'faarhaan10@gmail.com' });
        // // const result = await cursor.toArray();
        // console.log(cursor);

        app.get('/blogs/email', async (req, res) => {
            const email = req.query.email;
            const query = { authorEmail: email };

            const result = await blogCollection.find({ authorEmail: email }).toArray();
            if (result.length > 0) {
                res.send({ success: true, result: result })
            }
            else {
                res.send({ success: false, message: 'Could not find' })
            }


        });


        //all get api's\\
        app.get('/blogs', async (req, res) => {
            const result = await blogCollection.find({}).toArray();
            if (result.length) {
                res.send({ result, success: true })
            }
            else {
                res.send({ success: false, message: 'Something went wrong' })
            }
        });
        // get  single blog api\\
        app.get('/blog/:id', async (req, res) => {
            //do it 
        });

        //get blogs by email address








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
        });


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