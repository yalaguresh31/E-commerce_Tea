import React, { useState } from 'react'
import p1 from '../../assets/p1.png'
import internet from '../../assets/internet.png'
import certificated from '../../assets/certificated.png'
import shopping from '../../assets/shopping.png'
import leaf from '../../assets/leaf.png'
import bag1 from '../../assets/bag1.png'
import bag2 from '../../assets/bag2.png'
import bag3 from '../../assets/bag3.png'
import bag4 from '../../assets/bag4.png'
import bag5 from '../../assets/bag5.png'
import bag6 from '../../assets/bag6.png'
import add from '../../assets/add.png'
import substract from '../../assets/substract.png'
import { useParams } from 'react-router-dom';

import cup2 from '../../assets/cup2.png';
import water from '../../assets/water.png';
import time from '../../assets/time.png';
import color1 from '../../assets/color1.png';
import Product from '../../components/Product.jsx'
import p7 from '../../assets/p7.png';
import p8 from '../../assets/p8.png';
import p9 from '../../assets/p9.png';

function SingleProduct() {
  const { imageSrc } = useParams();
  const decodedImageSrc = imageSrc ? decodeURIComponent(imageSrc) : null;
  const [count, setCount] = useState(0);
 
  const addCountHandle = () =>{
    setCount(()=> count+1);
  }
  const substractCountHandle = () =>{
    setCount((preCount) => (preCount<=0)? 0: preCount-1);
  }
  return (
    <> 
      <div className='grid grid-cols-[35vw_65vw] ml-20 mr-20 mb-20'>
        <img src={decodedImageSrc || p1} alt="Product image" className='w-[50vw] h-full'/>
        <div className='ml-20'>
          <h3 className='text-[3rem]'>Ceylon Ginger Cinnamon chai tea</h3>
          <p className='text-2xl m-5'>A lovely warming Chai tea with ginger cinnamon flavours.</p>
          <div className='flex gap-20 mt-[2rem]'>
              <div className='flex items-center'>
                <img src={internet} alt="" />
                <p>Origin: Iran</p>
              </div>
              <div className='flex items-center'>
                <img src={certificated} alt="" />
                <p>Organic</p>
              </div>
              <div className='flex items-center'>
                <img src={leaf} alt="" />
                <p>Vegan</p>
              </div>
          </div>
          <p className='text-[3rem] font-bold mt-2'>€3.90</p>
          <div className=''>
            <h3 className='text-2xl'>Variants</h3>
            <div className='flex gap-2 w-[8vw]'>
              <img src={bag1} alt="" />
              <img src={bag2} alt="" />
              <img src={bag3} alt="" />
              <img src={bag4} alt="" />
              <img src={bag5} alt="" />
              <img src={bag6} alt="" />
            </div>
          </div>
        {/* item  quantity */}
          <div className='flex p-10 gap-6 items-center'>
            <img src={substract} alt="" className='w-5'onClick={substractCountHandle}/>
            <p className='text-2xl w-3'>{count}</p>
            <img src={add} alt="" className='w-5' onClick={addCountHandle}/>
          <button className='flex items-center gap-6 bg-black text-white pl-25 pr-25 pt-6 pb-6'>
            <img src={shopping} alt="" className='w-6'/>ADD TO BAG
            </button>
          </div>
        </div>
      </div>

      {/* steeping instructions */}
      <div className='bg-[#f4f4f4] grid grid-cols-[40vw_60vw]'>
        <div className='ml-[4rem] pt-10 pb-10'>
          <h3 className='text-[2rem]'>Steeping instructions</h3>
          <div className='flex gap-2 items-center m-5'>
            <img src={cup2} alt="" className='w-[2vw]'/>
            <p><span className='font-bold'>SERVING SIZE:</span> 2 tsp per cup, 6 tsp per pot</p>
          </div>
          <div className='flex gap-2 items-center m-5'>
            <img src={water} alt="" className='w-[2vw]'/>
            <p><span className='font-bold'>WATER TEMPERATURE:</span> 100<sup>0</sup>C</p>
          </div>
          <div className='flex gap-2 items-center m-5'>
            <img src={time} alt="" className='w-[2vw]'/>
            <p><span className='font-bold'>STEEPING TIME:</span> 3 - 5 minutes</p>
          </div>
          <div className='flex gap-2 items-center m-5'>
            <img src={color1} alt="" className='w-[2vw]'/>
            <p className='font-bold'>COLOR AFTER 3 MINUTES</p>
          </div>
        </div>

        {/* about this tea */}
        <div className='ml-[4rem] pt-10 pb-10'>
          <h3 className='text-[2rem]'>About this tea</h3>
          <div className='grid grid-cols-4 items-center justify-center mt-[2rem]'>
            <div className='border-r-2 pr-[2rem] pl-[2rem]'>
              <p className='font-bold'>FLAVOR</p>
              <p>Spicy</p>
            </div>
            <div className='border-r-2 pr-[2rem] pl-[2rem]'>
              <p className='font-bold'>QUALITIES</p>
              <p>Smoothing</p>
            </div>
            <div className='border-r-2 pr-[2rem] pl-[2rem]'>
              <p className='font-bold'>CAFFEINE</p>
              <p>Medium</p>
            </div>
            <div className='pl-[2rem]'>
              <p className='font-bold'>ALLERGENS</p>
              <p>N uts-free</p>
            </div>
          </div>
          <div className='mt-[2rem]'>
            <h3 className='text-[2rem]'>Ingredient</h3>
            <p className='mt-[1rem]'>Black Ceylon tea, Green tea, Cinger root, Cloves, Black pepper, <br/>
            Cinnamon sticks, Cardamom, Cinnamon pieces.</p>
          </div>
        </div>
      </div>
      {/* you mag also like */}
      <div className='mt-[5rem] place-items-center mb-10'>
        <h3 className='text-[2rem] font-bold m-[2rem]'>You mag also like</h3>
        <div className='flex'>
          <Product imageSrc={p7}/>
          <Product imageSrc={p8}/>
          <Product imageSrc={p9}/>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
