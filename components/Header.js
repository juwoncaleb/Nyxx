import React from 'react'

export default function Header() {
  const color = {
    color: 'white',
};
  return (
    <div style={color} className='header'>
      <div className='flex justify-between header_content'>
        <img className='logo' src='./logo.png' />
        <div className='flex '>
          <p className='mr-16 mt-6'>About</p>
          <p className='mr-16 mt-6'>Blogs</p>
          <p className='mr-16 mt-6'>features</p>
          <p className='mr-16 mt-6'>Services</p>
          <p className='mr-16 mt-6'>Lefgal</p>

          <button className='nav_btn'>
            download  aapp
          </button>

        </div>
      </div>
    </div>
  )
}
