import React from 'react'
import { Link } from 'react-router-dom';

function Product(props) {
  return ( 
    <>
        <div className='flex flex-col items-center justify-center h-full m-5'>
            {/* <Link to="/accessories"> */}
            {/* link added img */}
            <Link>
            <img src={props.imageSrc} alt="" className='w-[15vw] pb-5'/>
            </Link>
            <h4>{props.title}</h4>
            <p>{props.price}</p>
            <p>{`${props.weight}g`}</p>
        </div>

        
    </>
  )
}

export default Product
