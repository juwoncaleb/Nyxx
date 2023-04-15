import React, { useState } from 'react'
import { motion, stagger } from "framer-motion"
import Link from 'next/link';

export default function Header() {
  const [ham, setHam] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const toggleHam = () => {
    setHam(!ham);
    setShowMenu(true);
  };

  const toggleMenu = () => {
    setShowMenu(false);
    if (!ham) {
      setHam(true);
    }
  };
  const color = {
    color: 'white',
  };
  return (
    <div>
      <div style={color} className='header'>
        <div className='flex justify-between header_content'>
          <img className='logo' src='./logo.png' />
          <div className='flex '>
            <Link href='./About'>
            <p className='mr-16 mt-6'>About</p>
            </Link>
            <Link href='./blog'>
            <p className='mr-16 mt-6'>Blogs</p>

            </Link>
            <p className='mr-16 mt-6'>features</p>
            <p className='mr-16 mt-6'>Services</p>
            <p className='mr-16 mt-6'>Lefgal</p>

            <button className='nav_btn'>
              download  aapp
            </button>

          </div>
        </div>
      </div>

      <div style={color} className='header_mob flex justify-between'>
        <img className='logo' src='./logo.png' />

        <div className=' justify-between header_content'>
          <div className=' '>
            {ham ? (
              <img onClick={toggleHam} className='open' src='./open.png' />
            ) : (
              <img onClick={toggleMenu} className='close' src='./close.png' />
            )}
            {showMenu && (
              <div class="menu">
                <motion.p
                  onClick={() => handleMenuItemClick("div1")} class="mt-6 text-center cursor-pointer" initial={{ opacity: 0, scale: 0.8, y: 0 }} animate={{ opacity: 1, scale: 1, y: 18 }} transition={{ delay: 0.1 }}>
                  About
                </motion.p>
                <motion.p
                  onClick={() => handleMenuItemClick("div1")} class="mt-6 text-center cursor-pointer" initial={{ opacity: 0, scale: 0.8, y: 0 }} animate={{ opacity: 1, scale: 1, y: 19 }} transition={{ delay: 0.2 }}>
                  Otc
                </motion.p>
                <motion.p
                  onClick={() => handleMenuItemClick("div1")} class="mt-6 text-center cursor-pointer" initial={{ opacity: 0, scale: 0.8, y: 0 }} animate={{ opacity: 1, scale: 1, y: 20 }} transition={{ delay: 0.3 }}>
                  Exhange
                </motion.p> 
                 <motion.p
                  onClick={() => handleMenuItemClick("div1")} class="mt-4 mb-8 text-center cursor-pointer" initial={{ opacity: 0, scale: 0.8, y: 0 }} animate={{ opacity: 1, scale: 1, y: 21 }} transition={{ delay: 0.4 }}>
                  Card
                </motion.p>
                <motion.button  initial={{ opacity: 0, scale: 0.8, y: 0 }} animate={{ opacity: 1, scale: 1, y: 22 }} transition={{ delay: 0.5}} class="cta_button mb-2  flex justify-center">
                  <p class="word">Get started</p>
                  <img className="arrow_black" src="https://img.icons8.com/material-outlined/24/null/long-arrow-up.png" />
                </motion.button>
                {/* <div class="head_btn " initial={{ opacity: 0, scale: 0.8, y: 0 }} animate={{ opacity: 1, scale: 1, y: 18 }} transition={{ delay: 0.4 }}>
                  <div class="cta">
                    <div class="head_btn">

                    </div>
                  </div>
                </div> */}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}