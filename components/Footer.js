import React from 'react'

export default function Footer() {

    const color = {
        color: 'white',
    };
    return (
        <div className='footer grid md:flex  justify-around '>
            <div className='neon footer_img '>
                <p className='text-3xl invest text-black mt-4'>Start Investing</p>
                <p className='text-black mt-1'>Sunt ullamco non enim dolore nostrud commodo esse.</p>
                <p className='text-black  '>Sunt ullamco non enim dolore nostrud commodo esse.</p>

                <button className='text_btn_2 flex mb-1 mt-1 justify-center'>
                    <p className='mt-3'>  Download </p>
                </button>
                <img className='ft_img mb-10' src='https://ik.imagekit.io/juwoncaleb/footer_img_Wa6f5E-72.webp?updatedAt=1682343083267' />
            </div>
            <div style={color} className='grid md:grid-cols-2 justify-between footerItem '>
                <div className='foote_items'>
                    <p className='text-2xl mb-4 comp'>Company</p>
                    <p  >About </p>
                    <p className='mt-2'>Blogs</p>
                    <p className='mt-2'>Features</p>
                    <p className='mt-2'>Services</p>
                </div>
                <div  className='foote_items'>
                    <p className='text-2xl mb-4'>Product</p>
                    <p className='mt-2'>Buy </p>
                    <p className='mt-2'>Sell</p>
                    <p className='mt-2'>Staking</p>
                    <p className='mt-2'>Hedge Fund</p>
                    <p className='mt-2'>OTC</p>
                </div>
                <div  className='foote_items'>
                    <p className='text-2xl mb-4'>Learn </p>
                    <p className='mt-2'>Blog</p>
                    <p className='mt-2'>Learning Portal</p>
                    <p className='mt-2'> Help center</p>
                    <p className='mt-2'>Create tickets</p>
                </div>
                <div  className='foote_items'>
                    <p className='text-2xl mb-4'>Legal </p>
                    <p className='mt-2'>Privacy Policy</p>
                    <p className='mt-2'>Anti-Money Laundering Policy</p>
                    <p className='mt-2'>Terms of Service</p>
                    <p className='mt-2'>Risk Disclosure</p>
                </div>
            </div>

        </div>
    )
}
