import React from 'react'
import { Link } from 'react-router-dom';

function Product(props) {
  return ( 
    <>
        <div className='flex flex-col items-center justify-center h-full m-5'>
            {/* <Link to="/accessories"> */}
            {/* link added img */}
            <Link to={`/product/${encodeURIComponent(props.imageSrc)}`}>
            <img src={props.imageSrc} alt="" className='w-[15vw]'/>
            </Link>
            <h4>Ceylon Ginger <br />
            Cinnamon chai tea</h4>
            <p>€4.85 / 50 g</p>
        </div>

        
    </>
  )
}

export default Product
