import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateProduct() {
    const [image, setImage] = useState()
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [weight, setWeight] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", title);
        formData.append("price", price);
        formData.append("weight", weight);
        
        // { image,title,price,weight }
        axios.post("http://localhost:3000/createProduct", formData)
        .then(result => {
            console.log(result)
            navigate("/Admin")
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="flex h-screen items-center justify-center bg-amber-200">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
                <h2 className="text-2xl font-bold text-center text-amber-600">Create New Product</h2>

                <div>
                    <label className="block mb-1 text-gray-700">Image URL</label>
                    <input
                        type="file"
                        name="image"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>
                
                <div>
                    <label className="block mb-1 text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 text-gray-700">Price</label>
                    <input
                        type="text"
                        name="price"
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 text-gray-700">Weight (in g)</label>
                    <input
                        type="number"
                        name="weight"
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-amber-500 text-white py-2 rounded hover:bg-amber-600 transition duration-200"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
}

export default CreateProduct;
