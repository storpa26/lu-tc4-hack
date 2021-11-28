const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config()
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jlnj9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// console.log(uri);




async function run() {
    try {
        await client.connect();
        const database = client.db("Hackathon");
        const userCollection = database.collection('users');
        const productCollection = database.collection('products');
        const verifiedCollection = database.collection('verified');
        const orderCollection = database.collection('orders');

        app.post('/users', async (req, res) => {
            const newUser = req.body;
            const result = await userCollection.insertOne(newUser);
            console.log("added User", result);
            res.json(result);
        })
        //post verified users
        app.post('/verified', async (req, res) => {
            const verifyUser = req.body;
            const result = await verifiedCollection.insertOne(verifyUser);
            console.log("added User", result);
            res.json(result);
        })
        app.get('/verified', async (req, res) => {
            const cursor = verifiedCollection.find({});
            const verify = await cursor.toArray();
            res.send(verify);
        })

        app.get('/users', async (req, res) => {
            const cursor = userCollection.find({});
            const users = await cursor.toArray();
            res.send(users);
        })

        //post orders
        app.post('/orders', async (req, res) => {
            const data = req.body;
            const result = await orderCollection.insertOne(data);
            console.log("added User", result);
            res.json(result);
        })


        //get orders
        app.get('/orders', async (req, res) => {
            const cursor = orderCollection.find({});
            const orders = await cursor.toArray();
            res.send(orders);
        })
        app.post('/products', async (req, res) => {
            const newProduct = req.body;
            const result = await productCollection.insertOne(newProduct);
            console.log("added product", result);
            res.json(result);
        })
        app.get('/products', async (req, res) => {
            const cursor = productCollection.find({});
            const products = await cursor.toArray();
            res.send(products);
        })
        //filter user
        app.get('/filtereduser', async (req, res) => {
            const email = req.query.email;
            const query = { email: email }
            const cursor = userCollection.find(query);
            const user = await cursor.toArray();
            res.json(user);
        })

        //filter user orders
        app.get('/filteredorder', async (req, res) => {
            const email = req.query.email;
            const query = { email: email }
            const cursor = orderCollection.find(query);
            const order = await cursor.toArray();
            res.json(order);
        })

        //update verify status
        app.patch('/updateStatus', (req, res) => {
            const { id } = req.body;
            console.log(req.body);
            verifiedCollection.findOneAndUpdate(
                { _id: ObjectId(id) },
                {
                    $set: { status: 'Verified' },
                }
            ).then(result => res.send(result.lastErrorObject.updatedExisting))
        })

        //get specefic product
        app.get('/products/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const product = await productCollection.findOne(query);
            res.json(product);
        })
    }
    finally {
        // await client.close()
    }
}
run().catch(console.dir);

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})