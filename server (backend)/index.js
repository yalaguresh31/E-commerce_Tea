const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const multer  = require('multer')
require('dotenv').config();

const ProductModel = require('./models/Product')

const app = express()
app.use(cors());
app.use(express.json());
app.use('/image', express.static('public/image'));

console.log("Connecting to MongoDB at:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/image')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() +"-"+ file.originalname)
    }
  })
  
const upload = multer({ storage: storage })

//creating product and send to mongoose db
app.post("/createProduct", upload.single("image"), (req, res) => {
    const { title, price, weight } = req.body;
    const image = req.file ? req.file.filename : null;
    console.log(req.body)
    console.log(req.file)

    if (!image || !title || !price || !weight) {
        return res.status(400).json({ error: "All fields are required" });
    }

    ProductModel.create({ image, title, price, weight })
        .then((product) => res.json(product))
        .catch((err) => res.status(500).json({ error: err.message }));
});



//data is taking the from mongoose db and send to react js(frontend)
app.get("/display", (req, res) => {
    ProductModel.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
});

// //updating fist step 1
// //find the single data from mongoose db using _id
app.get("/getProduct/:id", (req,res) =>{
    const id = req.params.id;
    ProductModel.findById({_id: id})
        .then(products => res.json(products))
        .catch(err => res.json(err))
});


//updating fist step 2
//single data is sending to mongoose
// app.put('/updateProduct/:id',(req, res) =>{
    //     const id = req.params.id;
    //     ProductModel.findByIdAndUpdate({_id: id},{
        //         image: req.body.image,
        //         title: req.body.title,
        //         price: req.body.price,
        //         weight: req.body.weight
        //     })
        //     .then(products => res.json(products))
        //     .catch(err => res.json(err))
        // });
        
app.put("/updateProduct/:id", upload.single("image"), async (req, res) => {
    const id = req.params.id;
    const { title, price, weight } = req.body;
    const image = req.file ? req.file.filename : undefined;

    const updateData = { title, price, weight };
    if (image) updateData.image = image;

    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            { _id: id },
            updateData,
            { new: true } // returns updated document
        );
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


//delete the single data using _id
app.delete("/deleteProduct/:id",(req, res) =>{
    const id = req.params.id;
    ProductModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
});


app.get("/", (req, res) =>{
    res.send("Backend is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running... http://localhost:${PORT}/`);
});
