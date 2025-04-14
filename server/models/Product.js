const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    image: String,
    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    }
});

const ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel;
