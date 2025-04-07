import React from 'react'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'
import { useNavigate } from 'react-router-dom'

function Payment() {
  const navigate = useNavigate();

  return (
    <>
      <div className='flex items-center justify-between ml-[3rem] mr-[3rem]  mb-[4rem]'>
        <h2 className='text-3xl'>1. MY BAG</h2>
        <div className='flex-1 border-b border-black mx-4'></div>

        <h2 className='text-3xl'>2. DELIVERY</h2>
        <div className='flex-1 border-b border-black mx-4'></div>

        <h2 className='text-3xl'>3. REVIEW & PAYMENT</h2>
      </div>

      <div className='grid grid-cols-[20vw_40vw_40vW]  ml-[6rem] mr-[2rem] mb-[4rem]'>
        <div className='space-y-[2rem] p-[2rem]'>
          <h3 className='text-3xl'>Delivery Details</h3>
          <div className='ml-[2rem]'>
            <h2 className='font-bold'>Shipping address</h2>
            <p>3 Falahi St , Falahi Ave,<br />
              Pasdaran Blvd, Fars Province ,<br />
              Shiraz <br />
              71856-95159 <br />
              Iran</p>
          </div>
          <div className='ml-[2rem] mt-[2rem] mb-[2rem]'>
            <h2 className='font-bold'>Billing address</h2>
            <p>Same as shipping address</p>
          </div>
          <div className='ml-[2rem]'>
            <h2 className='font-bold'>Contact information</h2>
            <p>amoopur@gmail.com</p>
          </div>
          <button className='text-amber-500 ml-[4rem]'>EDIT DETAILES</button>
        </div>

        <div className='ml-[4rem] mr-[4rem] space-y-[2rem] p-[2rem]'>
          <h3 className='text-3xl'>Payment type</h3>
          <div className='border border-[#b7b7b7] place-items-center pt-[1rem] pb-[1rem]'>
            <img src={card1} alt="" className='w-[3vw]' />
          </div>

          <div className='border border-[#b7b7b7]  pt-[2rem] pb-[2rem] space-y-3'>
              <div className='flex items-center justify-between pl-[1rem]'>
                <p>Credit or Debit card</p>
                <div className='flex gap-4 mr-[4rem]'>
                  <img src={card2} alt="" className='w-[2vw]'/>
                  <img src={card3} alt="" className='w-[2vw]'/>
                  <img src={card4} alt="" className='w-[2vw]'/>
                </div>
              </div>

              <div className='pl-[2rem] mb-[2rem]'>
                <h3>Card Number</h3>
                <input type="text" className='w-[25vw] h-[5vh] bg-amber-500'/>
              </div>

              <div className='flex'>
                <div className='pl-[2rem] mb-[2rem]'>
                  <h3>Expired date</h3>
                  <input type="text" className='w-[12vw] h-[5vh] bg-amber-500'/>
                </div>
                <div className='pl-[2rem] mb-[2rem]'>
                  <h3>CVC</h3>
                  <input type="text" className='w-[11vw] h-[5vh] bg-amber-500'/>
                </div>
              </div>
          </div>

          <button className='border border-black w-full pt-[1rem] pb-[1rem]'>ADVANCED PAYMENT</button>
        </div>
        
        <div className='bg-[#f4f4f4] w-[30vw] p-[4rem] h-fit space-y-[2rem]'>
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
          <button className='bg-black text-white w-full pt-[1rem] pb-[1rem]' onClick={() => navigate('/thankyou')}>PAY</button> 
        </div>
        
      </div>
    </>
  )
}

export default Payment
