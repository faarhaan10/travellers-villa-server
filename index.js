const express = require('express');
const app = express();
const cors = require('cors');
const Authorization = require('./Authorization');
require('dotenv').config()

// Mongo DB Connections



// Middleware Connections
app.use(cors())
app.use(express.json())


// Routes

// // Get all indexs
// app.get('/', Authorization, async (req, res) => {
//     try {
//         const indexs = await Index.find()
//         res.send(indexs)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })

// // Create a new index
// app.post('/', Authorization, async (req, res) => {
//     try {
//         let index = new Index({
//             key: value
//         })
//         index = await index.save()
//         res.send(index)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })

// // Get index By ID
// app.get('/:id', Authorization, async (req, res) => {
//     try {
//         const index = await Index.findById(req.params.id)
//         res.send(index)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })

// // Update index By ID
// app.put('/:id', Authorization, async (req, res) => {
//     try {
//         const index = await Index.findByIdAndUpdate(req.params.id, {
//             key: value
//         }, { new: true })
//         res.send(index)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })

// // Delete index By ID
// app.delete('/:id', Authorization, async (req, res) => {
//     try {
//         const index = await Index.findByIdAndDelete(req.params.id)
//         res.send(index)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })




// Connection

app.get('/', (req, res) => {
    res.send('<h1>Hello Touch Me</h1>');
})

const PORT = process.env.PORT || 6006
app.listen(PORT, () => {
    console.log('App running in port: ' + PORT)
})