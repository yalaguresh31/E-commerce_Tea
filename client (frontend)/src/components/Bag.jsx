import React from 'react'
import {useState} from 'react'
import add from '../assets/add.png'
import substract from '../assets/substract.png'
import  p1 from '../assets/p1.png'

function Bag(props) {
    const [count, setCount] = useState(0);
         
    const addCountHandle = () =>{
      setCount(()=> count+1);
    }
    const substractCountHandle = () =>{
      setCount((preCount) => (preCount<=0)? 0: preCount-1);
    }

  return (
    <>
        <div className='flex items-center justify-between'>
            <img src={props.imageSrc || p1} alt="" className='w-[5vw]'/>
            <div>
                <p>Ceylon Ginger Cinnamon <br/>
                chai tea - 50 g</p>
                <p className='font-bold'>REMOVE</p>
            </div>
            <div className='flex flex-col items-center justify-center space-y-[2vh]'>
                <div className='flex gap-4 items-center justify-center'>
                    <img src={substract} alt="" className='w-5 h-5'onClick={substractCountHandle}/>
                    <p className='text-2xl w-3'>{count}</p>
                    <img src={add} alt="" className='w-5 h-5' onClick={addCountHandle}/>
                </div>
                <p>€3.90</p>
            </div>
        </div>
    </>
  )
}

export default Bag
