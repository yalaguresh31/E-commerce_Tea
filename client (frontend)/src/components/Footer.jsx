import React from 'react'
import map_logo from '../assets/map_logo.png'
import email from '../assets/email.png'
import phone from '../assets/phone.png'

function Footer() {
  return (
    <>
        <footer className='bg-[#f4f4f4] flex md:flex-row flex-col items-center justify-between pt-10 pb-10 pl-15 pr-15 relative bottom-0 left-0 right-0'>
            <div className='mt-5'>
                <h3 className='mb-5 font-bold'>COLLECTIONS</h3>
                <ul className='space-y-2 list-none'>
                    <li>Black teas</li>
                    <li>Green teas</li>
                    <li>White teas</li>
                    <li>Herbal teas</li>
                    <li>Matcha</li>
                    <li>Chai</li>
                    <li>Oolong</li>
                    <li>Rooibos</li>
                    <li>Teaware</li>
                </ul>
            </div>

            <div className='mt-5'>
                <h3 className='mb-5 font-bold'>LEARN</h3>
                <ul className='space-y-2 list-none'>
                    <li>About us</li>
                    <li>About our teas</li>
                    <li>Tea academy</li>
                </ul>
            </div>

            <div className='mt-5'>
                <h3 className='mb-5 font-bold'>CUSTOMER SERVICE</h3>
                <ul className='space-y-2 list-none'>
                    <li>Ordering and payment</li>
                    <li>Delivery</li>
                    <li>Privacy and policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>

            <div className='mt-5 items-center'>
                <h3 className='mb-5 font-bold'>CONTACT US</h3>
                <ul className='space-y-2 list-none'>
                    <li className='flex items-center'>
                        <img src={map_logo} alt="" className='h-6'/>
                        <p className='p-2'>3 Falahi, Falahi St, Pasdaran Ave, Shiraz, Fars Provieence Iran</p>
                    </li>
                    <li className='flex items-center'>
                        <img src={email} alt="" className='h-6'/>
                        <p className='p-2'>Email: amoopur@gmail.com</p>
                    </li>
                    <li className='flex items-center'>
                        <img src={phone} alt="" className='h-6'/>
                        <p className='p-2'>Tel: +98 9173038406</p>
                    </li>
                </ul>
            </div>
        </footer>    
    </>
  )
}

export default Footer