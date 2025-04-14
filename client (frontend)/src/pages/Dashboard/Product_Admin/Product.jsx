import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/display`)
        .then(result => setProducts(result.data))
        .catch(err => console.log(err))
    },[]);

    const handleDelete = (id) =>{
        axios.delete(`${import.meta.env.VITE_API_BASE_URL}/deleteProduct/`+id)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="flex h-fit bg-amber-300 justify-center items-center ">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-4xl">
                <Link to="/createAdmin" className='bg-amber-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200' >Add +</Link>
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-3 border-b border-gray-200">SI NO</th>
                            <th className="p-3 border-b border-gray-200">Image</th>
                            <th className="p-3 border-b border-gray-200">Title</th>
                            <th className="p-3 border-b border-gray-200">Price</th>
                            <th className="p-3 border-b border-gray-200">Weight (g)</th>
                            <th className="p-3 border-b border-gray-200">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="p-3 border-b border-gray-200">{index + 1}</td>
                                <td className="p-3 border-b border-gray-200">
                                    <img src={`${import.meta.env.VITE_API_BASE_URL}/image/${product.image}`} alt="image" className="h-16 w-16 object-cover rounded" />
                                </td>
                                <td className="p-3 border-b border-gray-200">{product.title}</td>
                                <td className="p-3 border-b border-gray-200">{product.price}</td>
                                <td className="p-3 border-b border-gray-200">{product.weight}g</td>
                                <td className="p-3 border-b border-gray-200 space-x-2">
                                <Link to={`/updateAdmin/${product._id}`} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200" >Eidt</Link>
                                <button onClick={() => handleDelete(product._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200" >delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Product
