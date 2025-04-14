import React from 'react'
import spoon from '../../assets/spoon.png'
import cup from '../../assets/cup.png'
import certificated from '../../assets/certificated.png'
import delivery from '../../assets/delivery.png'
import sample from '../../assets/sample.png'
import black_tea from '../../assets/black_tea.png'
import green_tea from '../../assets/green_tea.png'
import white_tea from '../../assets/white_tea.png'
import matcha from '../../assets/matcha.png'
import hearbal_tea from '../../assets/hearbal_tea.png'
import oolong from '../../assets/oolong.png'
import chai from '../../assets/chai.png'
import roolbos from '../../assets/roolbos.png'
import teaware from '../../assets/teaware.png'
import steep_tea from '../../assets/steep_tea.png'
import aromas from '../../assets/aromas.png'
import wholesalers from '../../assets/wholesalers.png'


function Home() {
  return (
    <>
      {/* image and title */}
      <div className='flex mb-20 relative h-screen'>
        <img src={spoon} alt="" className=' w-3xl'/>
        {/* tilte and descrition */}
        <div className='w-[35rem] h-100 absolute right-40 top-50'>
            <h1 className='text-6xl mb-10'>Every day is unique, just like our tea</h1>
            <p className='text-2xl mb-10 text-[#858585]'>Lorem ipsum dolor sit amet consectetur. Orci nibhnullam risus adipiscing odio- Neque lacus nibh erosin. Lorem ipsum dolor sit amet consectetur. Orci nibhnullam risus adipiscing odio. Neque lacus nibh erosin.</p>
            <button className='bg-black text-white pt-4 text-2xl pb-4 pl-20 pr-20'>BROWES TEAS</button>
        </div>
      </div>

      {/* learn more section */}
      <div className='bg-[#f4f4f4] p-5'>
        <div className=' pl-30 pr-30 pt-10 pb-10'>
            <ul className=' list-none flex justify-between'>
              <li className='flex items-center'>
                <img src={cup} alt="" className='w-8'/>
                <p className='pl-4 text-2xl'>450+ KIND OF LOOSEF TEA</p>
              </li>
              <li className='flex items-center'>
                <img src={certificated} alt="" className='w-8'/>
                <p className='pl-4 text-2xl'>CERTIFICATED ORGANIC TEAS</p>
              </li>
              <li className='flex items-center'>
                <img src={delivery} alt="" className='w-8'/>
                <p className='pl-4 text-2xl'>FREE DELIVERY</p> 
              </li>
              <li className='flex items-center'>
                <img src={sample} alt="" className='w-8'/>
                <p className='pl-4 text-2xl'>SAMPLE FOR ALL TEAS</p>
              </li>
            </ul>
        </div>

        <div className='flex items-center justify-center p-10 '>
          <button className='border border-s-black pt-5 pb-5 pr-30 pl-30'>LEARN MORE</button>
        </div>
      </div>

      {/* Our Collections */}
      <div className='mt-[5rem]'>
        <h3 className='text-center text-4xl font-bold'>Our Collections</h3>
        <div className='grid grid-cols-3 gap-10 h-full pt-[3rem] pb-[6rem] pr-[6rem] pl-[6rem] text-center text-2xl'>
            <div>
                <img src={black_tea} alt="black tea" />
                <h3 className='m-5'>BLACK TEA</h3>
            </div>
            <div>
              <img src={green_tea} alt="" />
              <h3 className='m-5'>GREEN TEA</h3>
            </div>
            <div>
              <img src={white_tea} alt="" className='w-[50rem]'/>
              <h3 className='m-5'>WHITE TEA</h3>
            </div>
            <div>
              <img src={matcha} alt="" />
              <h3 className='m-5'>MATCHA</h3>
            </div>
            <div>
              <img src={hearbal_tea} alt="" />
              <h3 className='m-5'>HEARBAL TEA</h3>
            </div>
            <div>
              <img src={chai} alt="" />
              <h3 className='m-5'>CHAI</h3>
            </div>
            <div>
              <img src={oolong} alt="" />
              <h3 className='m-5'>OOLONG</h3>
            </div>
            <div>
              <img src={roolbos} alt="" />
              <h3 className='m-5'>ROOLBOS</h3>
            </div>
            <div>
              <img src={teaware} alt="" />
              <h3 className='m-5'>TEAWARE</h3>
            </div>   
        </div>
      </div>

      {/* Last Blog Posts section */}
      <div className='bg-[#f4f4f4]'>
        <h1 className='text-4xl font-bold text-center pt-10'>Last Blog Posts</h1>
        <div className='grid grid-cols-2 gap-4 p-20'>
            <div className='flex gap-6'>
              <img src={steep_tea} alt="" className='h-[30rem]'/>
              <div>
                <h3 className='text-4xl pb-10 pt-4'>HOW TO STEEP TEA LIKE A PRO</h3>
                <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. In dictum non consectetur a erat nam at.
                  Risus nec feugiat in fermentum posuere urna nec
                  tincidunt praesent.</p>
                <button className='text-2xl pt-8'>READ MORE</button>
              </div>
            </div>

            <div className='flex gap-6'>
              <img src={aromas} alt="" className='h-[30rem]'/>
              <div>
                <h3 className='text-4xl pb-10 pt-4'>ALL ABOUT TEA AROMAS</h3>
                <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  In dictum non consectetur a erat nam at. Risus nec feugiat in 
                  fermentum posuere urna nectincidunt praesent.</p>
                <button className='text-2xl pt-8'>READ MORE</button>
              </div>
            </div>
        </div>
      </div>

      {/* FOR WHOLESALERS section */}
      <div className='flex items-center mt-20 mb-20'>
        <div className='p-20 '>
          <h1 className='text-4xl font-bold'>FOR WHOLESALERS</h1>
          <p className='text-2xl pt-10 pb-10'>We offer loose tea leaves of the best quality for your business. With a choice of more than 450 different kinds of loose tea, we can make a sophisticated selection that fits exactly in your kind of establishment.</p>
          <button className='border border-black text-2xl pt-4 pb-4 pr-20 pl-20'>GET A FREE CONSULTATION</button>
        </div>
        <img src={wholesalers} alt="" className=' h-screen'/>
      </div>
    </>
  )
}

export default Home
