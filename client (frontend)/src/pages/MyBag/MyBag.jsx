import React from 'react'
import Bag from '../../components/Bag.jsx'

function MyBag(props) {
    
  return (
    <>
    <div className='bg-white absolute top-[-18%] right-[-5%]'>
        <div className='w-[35vw] ml-10 mr-10 '>
           <h3 className='text-[2rem] font-bold mt-5 mb-10'>MyBag</h3>
           <Bag imageSrc={props.imageSrc}/>
        
            <div className='mt-[40vh]'>
                <div className='border-b border-black ml-4 mr-[2rem] mt-3 mb-3'></div>
                <div className='flex items-center justify-between'>
                    <h3>Subtotal</h3>
                    <p>€3.90</p>
                </div>
                <div className='flex items-center justify-between'>
                    <h3>Delivery</h3>
                    <p>€3.95</p>
                </div>
                <div className='border-b border-black ml-4 mr-[2rem] mt-3 mb-3'></div>
                <div className='flex items-center justify-between'>
                    <h3 className='text-2xl font-bold'>Total</h3>
                    <p className='text-2xl font-bold'>€7.85</p>
                </div>
                <button className='w-full pt-[1rem] pb-[1rem] mt-[2rem] mb-[2rem] bg-black text-white '>PURCHASE</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default MyBag