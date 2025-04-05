import React from 'react'

function Account() {
  return (
    <>
        <div className='grid grid-cols-2'>
            <div>
                <div className='bg-[#f4f4f4] w-[40vw] mt-[2rem] ml-[6rem] p-[3rem] space-y-[2rem]'>
                    <h3 className='text-[2rem]'>Already a customer?</h3>
                    <p>Welcome back! Sign in for faster checkout.</p>
                    <div className='flex flex-col space-y-[2rem]'>
                        <input type="email" placeholder='Email Address' className='bg-white border border-black h-[5vh] p-[2rem]'/>
                        <input type="password" placeholder='Enter your password' className='bg-white border border-black h-[5vh] p-[2rem]'/>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <label>Please remember me</label>
                        </div>
                        <p className='text-amber-300'>Forget password?</p>
                    </div>
                    <button className='text-white bg-black w-full pt-[1rem] pb-[1rem]'>sign in</button>
                </div>
            </div>

            <div className='space-y-[4rem]'>
                <div className='bg-[#f4f4f4] w-[35vw] mt-[2rem] ml-[6rem] p-[3rem] space-y-[2rem]'>
                    <h3 className='text-[2rem]'>New to our company?</h3>
                    <p>Create an account for the best experience</p>
                    <p> &gt; Modify and track your orders</p>
                    <p> &gt; Faster checkout</p>
                    <p> &gt; Get a 10% discount for new customer</p>
                    <button className='border border-black w-full pt-[1rem] pb-[1rem]'>CREATE AN ACCOUNT</button>
                </div>

                <div className='bg-[#f4f4f4] w-[35vw] mt-[2rem] ml-[6rem] mb-[4rem] p-[3rem] space-y-[2rem]'>
                    <h3 className='text-[2rem]'>Guest checkout</h3>
                    <p>No ready to become a customer?</p>
                    <button className='border border-black w-full pt-[1rem] pb-[1rem]'>CHECKOUT AS A GUEST</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Account
