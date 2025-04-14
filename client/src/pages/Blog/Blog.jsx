import React from 'react'
import Product from '../../components/Product.jsx'
import Bag from '../../components/Bag.jsx'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'
import card5 from '../../assets/card5.png'
import p7 from '../../assets/p7.png'
import p8 from '../../assets/p8.png'
import p9 from '../../assets/p9.png'
import { useNavigate } from 'react-router-dom'

function Blog() {
    const navigate = useNavigate();

  return (
    <>
        <div className='flex items-center justify-between ml-[3rem] mr-[3rem]  mb-[4rem]'>
            <h2 className='text-3xl'>1. MY BAG</h2>
            <div className='flex-1 border-b border-black mx-4'></div>

            <h2 className='text-3xl text-[#858282]'>2. DELIVERY</h2>
            <div className='flex-1 border-b border-black mx-4'></div>

            <h2 className='text-3xl text-[#858282]'>3. REVIEW & PAYMENT</h2>
        </div>
        
        <div className='grid grid-cols-2 gap-x-[4rem] pl-[2rem]'>
            <div className='pl-[6rem] pr-[6rem] space-y-[2rem]'>
                <Bag imageSrc={p7}/>
                <Bag imageSrc={p8}/>
                <Bag imageSrc={p9}/>
                <div className='border-b border-black ml-4 mr-[2rem] mt-3 mb-3'></div>
                <div className='flex items-center justify-between mt-[2rem]'>
                    <h3>Subtotal</h3>
                    <p>€3.90</p>
                </div>
                <div className="flex justify-center mt-4">
                    <button className="border border-black pl-[5rem] pr-[5rem] pt-[1rem] pb-[1rem]">BACK TO SHOPPING</button>
                </div>
            </div>
            
            {/* order, payment and Delivery */}
            <div className='space-y-[4rem]'>
                <div className='w-[40vw] p-[4rem] bg-[#f4f4f4] space-y-[2rem]'>
                    <h3 className='text-3xl'>Order summery</h3>
                    <div className='flex items-center justify-between'>
                        <p>Subtotal</p>
                        <p>€3.90</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Delivery</p>
                        <p>€3.95</p>
                    </div>
                    <div className='border-b border-black ml-4 mr-[2rem] mt-3 mb-3'></div>
                    <div className='flex items-center justify-between'>
                        <p className='font-black text-2xl'>Total</p>
                        <p className='text-2xl font-black'>€7.85</p>
                    </div>
                    <p>Estimated shipping time: 2 days</p>
                    <button className='bg-black text-white w-full pt-[1rem] pb-[1rem]' onClick={() => navigate('/delivery')}>CHECK OUT</button>
                </div>

                <div className='w-[40vw] p-[4rem] bg-[#f4f4f4] space-y-[2rem]'>
                    <h3 className='text-3xl'>Payment type</h3>
                    <div className='flex items-center justify-center space-x-[1rem]'>
                        <img src={card1} alt="" />
                        <img src={card2} alt="" />
                        <img src={card3} alt="" />
                        <img src={card4} alt="" />
                        <img src={card5} alt="" />
                    </div>
                </div>

                <div className='w-[40vw] p-[4rem] bg-[#f4f4f4] space-y-[2rem]'>
                    <h3 className='text-3xl'>Delivery and retour</h3>
                    <p> &gt; Order before 12:00 and we will ship the same day.</p>
                    <p> &gt; Orders made after Friday 12:00 are processed on Monday.</p>
                    <p> &gt; To return your articles, please contact us first.</p>
                    <p> &gt; Postal charges for retour are not reimbursed.</p>
                </div>
            </div>
            
            <div className='col-span-2 pt-[5rem] pb-[3rem] mt-[2rem] place-items-center'>
                <h3 className='text-[2rem] font-bold '>You mag also like</h3>
                <div className='flex'>
                    <Product imageSrc={p7}/>
                    <Product imageSrc={p8}/>
                    <Product imageSrc={p9}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog
