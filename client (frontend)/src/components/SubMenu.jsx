import React from 'react'
import { useState } from 'react';
import add from '../assets/add.png'
import substract from '../assets/substract.png'


function SubMenu(props) {
    const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
        <div>
            <div className='flex justify-between' onClick={() => setSubMenuOpen(!subMenuOpen)}>
                <h3>{props.item_title}</h3>
                <img src={ subMenuOpen ? substract : add} alt="" />
            </div>

            {subMenuOpen && 
            (<div className='mb-2'>
                {props.item.map((itemName, index) => (
                    <div key={index} className='space-x-2 flex items-center'>
                    <input type='checkbox' className='w-[2vw] h-[2vh]' />
                    <label>{itemName}</label>
                    </div>
                ))}
            </div>)}
            <div className='border-b border-black ml-4 mr-[2rem] mt-3 mb-3'></div>
        </div>
    </>
  )
}

export default SubMenu