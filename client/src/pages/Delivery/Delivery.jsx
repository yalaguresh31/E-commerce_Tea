import React from 'react'
import { useNavigate } from 'react-router-dom'

function Delivery() {
    const navigate = useNavigate();

  return (
    <>
        <div className='flex items-center justify-between ml-[3rem] mr-[3rem]  mb-[4rem]'>
            <h2 className='text-3xl'>1. MY BAG</h2>
            <div className='flex-1 border-b border-black mx-4'></div>

            <h2 className='text-3xl'>2. DELIVERY</h2>
            <div className='flex-1 border-b border-black mx-4'></div>

            <h2 className='text-3xl text-[#858282]'>3. REVIEW & PAYMENT</h2>
        </div>

        <div className='grid grid-cols-2 gap-[2rem] mb-[4rem] ml-[4rem]'>
            <div className='ml-[4rem]'>
                <div className='grid grid-cols-2 gap-[2rem] w-[50vw]'>
                    <div className='space-y-[2rem] bg-[#f4f4f4] pb-[2rem] pl-[2rem] pt-[2rem]'>
                        <h3 className='text-[2rem] '>Shipping Address</h3>
                        <div className='flex flex-col space-y-[2rem]  '>
                            <input type="text" placeholder='First Name' className='border-black rounded-md w-[20vw] h-[7vh] bg-white p-[2rem] mr-[2rem]'/>
                            <input type="text" placeholder='Last Name' className='border-black rounded-md w-[20vw] h-[7vh] bg-white p-[2rem] mr-[2rem]'/>
                            <input type="text" placeholder='Street and' className='border-black rounded-md w-[20vw] h-[7vh] bg-white p-[2rem] mr-[2rem]'/>
                            <div className='flex w-[20vw] h-[7vh] gap-4'>
                                <input type="text" placeholder='PostCode' className='bg-white border-black rounded-md w-[12vw] p-[2rem]'/>
                                <input type="text" placeholder='City' className=' bg-white border-black rounded-md w-[7vw] p-[2rem]'/>
                            </div>
                            <input type="text" placeholder='Country' className='border-black rounded-md w-[20vw] h-[7vh] bg-white p-[2rem] mr-[2rem]'/>
                        </div>
                    </div>

                    <div className='pl-[2rem] bg-[#f4f4f4] h-[70vh] pt-[2rem]'>
                        <h3 className='text-[2rem]'>Billing Address</h3>
                        <p>(Same as shipping address)</p>
                        <div className='flex gap-2 mt-[1rem]'>
                            <input type="checkbox" className='w-[2vw]'/>
                            <p>Bill to different address</p>
                        </div>
                        <div className='mt-[6rem] space-y-[1rem]'>
                            <h3 className='text-2xl'>Contact information</h3>
                            <input type="email" placeholder='Email Address' className='border-black rounded-md w-[20vw] h-[7vh] bg-white p-[2rem] mr-[2rem]' />
                        </div>
                    </div>
                </div>
            </div>

            
            <div className='bg-[#f4f4f4] ml-[10rem] w-[30vw] p-[4rem] space-y-[2rem]'>
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
                <button className='bg-black text-white w-full pt-[1rem] pb-[1rem]' onClick={() => navigate('/payment')}>GO TO PAYMENT</button>
            </div>
        </div>
    </>
  )
}

export default Delivery
