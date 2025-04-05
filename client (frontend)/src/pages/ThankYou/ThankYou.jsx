import React from 'react'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import Product from '../../components/Product'
import p7 from '../../assets/p7.png'
import p8 from '../../assets/p8.png'
import p9 from '../../assets/p9.png'

function ThankYou() {
  return (
    <>
        <div>
            <div className='place-items-center space-y-[2rem]'>
                <h3 className='text-5xl font-bold '>Thank You!</h3>
                <div className='place-items-center'>
                    <p>We received your order and will start preparing your package right away.</p>
                    <p>You will receive a confirmation email in a moment.</p>
                </div>
                <p className='text-2xl mb-[4rem]'>ORDER DETAILS - 8972491047359</p>

            </div>
            <div className='grid grid-cols-3 grid-rows-2 gap-[2rem]'>
                <div className='space-y-[2rem] pt-[2rem]'>
                    <div className='flex items-center space-x-[4rem] ml-[4rem] '>
                        <img src={p1} alt="" className='w-[5vw]'/>
                        <div>
                            <p>Ceylon Ginger Cinnamon <br/>
                            chai tea - 50 g</p>
                        </div>
                        <p>€3.90</p>
                    </div>

                    <div className='flex items-center space-x-[4rem] ml-[4rem] '>
                        <img src={p2} alt="" className='w-[5vw]'/>
                        <div>
                            <p>Ceylon Ginger Cinnamon <br/>
                            chai tea - 50 g</p>
                        </div>
                        <p>€3.90</p>
                    </div>

                    <div className='flex items-center space-x-[4rem] ml-[4rem] '>
                        <img src={p3} alt="" className='w-[5vw]'/>
                        <div>
                            <p>Ceylon Ginger Cinnamon <br/>
                            chai tea - 50 g</p>
                        </div>
                        <p>€3.90</p>
                    </div>

                    
                </div>
                
                <div className='space-y-[2rem] p-[2rem]'>
                    <h3 className='text-3xl'>Delivery Details</h3>
                    <div>
                        <h2 className='font-bold'>Shipping address</h2>
                        <p>3 Falahi St , Falahi Ave,<br />
                        Pasdaran Blvd, Fars Province ,<br />
                        Shiraz <br />
                        71856-95159 <br />
                        Iran</p>
                    </div>
                    <div className='mt-[2rem] mb-[2rem]'>
                        <h2 className='font-bold'>Billing address</h2>
                        <p>Same as shipping address</p>
                    </div>
                    <div>
                        <h2 className='font-bold'>Contact information</h2>
                        <p>amoopur@gmail.com</p>
                    </div>
                </div>
                

                <div className='space-y-[2rem] p-[2rem]'>
                    <div>
                        <h3 className='text-2xl'>Payment method</h3>
                        <p>Master card</p>
                        <p>xxxx xxxx xxxx 5425</p>
                    </div>
                    <div>
                        <h3 className='text-2xl'>Estimated shipping</h3>
                        <p>16 June 2024</p>
                    </div>
                </div>

                <div className='mx-[4rem] mt-[8rem]'>
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
                </div>

                <div className='flex flex-col col-span-2 h-fit w-[30vw] space-y-6 mx-[16rem] mt-[2rem] py-[2rem]'>
                    <button className='bg-black text-white mx-[4rem] py-[1rem]  px-[4rem]'>KEEP SHOPPING</button>
                    <button className='border border-black mx-[4rem] py-[1rem]  px-[4rem]'>PRINT RECEIPT</button>
                </div>
            </div>

            <div className='col-span-2 pb-[3rem] place-items-center'>
                <h3 className='text-[2rem] font-bold '>Suggested items base on your order</h3>
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

export default ThankYou