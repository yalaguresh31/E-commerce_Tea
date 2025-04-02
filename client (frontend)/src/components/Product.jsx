import React from 'react'

function Product(props) {
  return (
    <>
        <div className='flex flex-col items-center justify-center h-full m-5'>
            <img src={props.imageSrc} alt="" className='w-[15vw]'/>
            <h4>Ceylon Ginger <br />
            Cinnamon chai tea</h4>
            <p>€4.85 / 50 g</p>
        </div>
    </>
  )
}

export default Product
