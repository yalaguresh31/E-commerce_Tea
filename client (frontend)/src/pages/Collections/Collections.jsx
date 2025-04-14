import React from 'react'
import red_tea from '../../assets/red_Tea.png'
import SubMenu from '../../components/SubMenu.jsx'
import Product from '../../components/Product.jsx'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Collections() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:3000/display")
        .then(result => setProducts(result.data))
        .catch(err => console.log(err))
    },[]);

  const handleProductClick = (imageSrc) => {
    navigate(`/product/${encodeURIComponent(imageSrc)}`);
  };

  const items ={
    COLLECTIONS: ['Black teas', 'Green teas', 'White teas', 'Chai', 'Matcha', 'Herbal teas','Oolong', 'Rooibos', 'Teaware'],
    ORIGIN: ['India', 'Japan', 'Iran', 'South Africa'],
    FLAVOUR: ['Spicy', 'Sweet', 'Citrus', 'Smooth', 'Fruity', 'Floral', 'Grassy', 'Minty', 'Bitter', 'Creamy'],
    QUALITIES: ['Detox', 'Energy', 'Relax', 'Digestion'],
    CAFEINE: ['No Caffeine', 'Low Caffeine', 'Medium Caffeine', 'High Caffeine'],
    ALLERGENS: ['Lactose-free', 'Gluten-free', 'Nuts-free', 'Soy-free']
  };

  return (
    <>
      <div className='h-full grid grid-cols-[25vw_75vw]'>
        {/* image is added */}
        <div className='col-span-2'>
          <img src={red_tea} alt="" />
          <p className='pl-10 p-5'>HOME/COLLECTIONS/CHAI</p>
        </div>

        {/* items side bar */}
        <div className='p-[3rem]'>
          <SubMenu item_title={'COLLECTIONS'} item={items.COLLECTIONS}/>
          <SubMenu item_title={'ORIGIN'} item={items.ORIGIN}/>
          <SubMenu item_title={'FLAVOUR'} item={items.FLAVOUR}/>
          <SubMenu item_title={'QUALITIES'} item={items.QUALITIES}/>
          <SubMenu item_title={'CAFEINE'} item={items.CAFEINE}/>
          <SubMenu item_title={'ALLERGENS'} item={items.ALLERGENS}/>

          <div className='flex gap-10 pt-[2rem]'>
            <h3>ORGANIC</h3>
            <label className="bg-white border-2 cursor-pointer relative w-[3vw] h-[3vh] rounded-full flex items-center place-content-center" >
              <input type="checkbox" className="sr-only peer" onChange={() => setIsChecked(!isChecked)} />
                <span className={`w-[2vh] h-[2vh] bg-[#333333]  absolute left-1 top-0.3 rounded-full transition-all duration-300 ${isChecked ? "bg-black left-6" : "left-1"}`} ></span>
              </label>
          </div>
        </div> {/* sidebar end */}

        {/* tea items */}
        <div className='p-5'>
          <div className='grid grid-cols-3 gap-3 mb-10'>
          {products.map((product, index) => (
            <Product
              key={index}
              imageSrc={`http://localhost:3000/image/${product.image}`}
              title={product.title}
              price={product.price}
              onClick={() => handleProductClick(product.image)} />
          ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Collections
