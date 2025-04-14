import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateProduct() {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [weight, setWeight] = useState('');
    const [existingImage, setExistingImage] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/getProduct/` + id)
            .then(result => {
                setExistingImage(result.data.image);
                setTitle(result.data.title);
                setPrice(result.data.price);
                setWeight(result.data.weight);
            })
            .catch(err => console.log(err));
    }, [id]);

    const update = (e) => {
        e.preventDefault();

        const formData = new FormData();
        if (image) {
            formData.append('image', image);
        }
        formData.append('title', title);
        formData.append('price', price);
        formData.append('weight', weight);

        axios.put(`${import.meta.env.VITE_API_BASE_URL}/updateProduct/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(result => {
                console.log(result);
                navigate('/Admin');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="flex h-screen items-center justify-center bg-amber-200">
            <form onSubmit={update} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
                <h2 className="text-2xl font-bold text-center text-amber-600">Update Product</h2>

                <div>
                    <label className="block mb-1 text-gray-700">Image</label>
                    {existingImage && !image && (
                        <img src={`${import.meta.env.VITE_API_BASE_URL}/image/${existingImage}`} alt="Current" className="w-32 h-32 object-cover mb-2" />
                    )}
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
                        value={title}
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
                        value={price}
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
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-amber-500 text-white py-2 rounded hover:bg-amber-600 transition duration-200"
                >
                    Update Product
                </button>
            </form>
        </div>
    );
}

export default UpdateProduct;
