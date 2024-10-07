// require('dotenv').config()
// const express = require('express')
// const cors = require('cors')
// const app = express()
// const dbConn = require('./config/db')
// const Product = require('./routes/productRoutes')
// app.use(express.json())
// app.use(cors())
// const port = process.env.PORT || 7778
// app.use('/products', Products)


// app.get('/', (req, res) => {
//     res.status(400).json("Welcome")
// })

// app.listen(port, () => {
//     console.log(`Server running in : ${port}`)
// })
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes'); // Ensure this is correct

const app = express();
app.use(cors());
app.use(express.json());

// Use the product routes
app.use('/products', productRoutes); // Use the right route here

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch(err => console.log(err));

