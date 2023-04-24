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
    <div className='main_head'>
      <div style={color} className='header'>
        <div className='flex justify-between header_content'>
          <Link href='/'>
          <img className='logo' src='https://ik.imagekit.io/juwoncaleb/24299_451616_JRSH0nPB2.jpg?updatedAt=1682348309296' />
          </Link>
          <div className='flex navmenu '>
            <Link href='./About'>
              <p className='mr-16 mt-6'>About</p>
            </Link>
            
            <Link href="./otc">
              <p className='mr-16 mt-6'>OTC</p>
            </Link>
            <Link href='./card'>
              <p className='mr-16 mt-6'>Card</p>

            </Link>

            <Link href='./exchange'>
              <p className='mr-16 mt-6'>Exchange</p>
            </Link>
            <Link href='./blog'>
              <p className='mr-16 mt-6'>Blogs</p>
            </Link>
            <Link href='./career'>
              <p className='mr-16 mt-6'>Career</p>
            </Link>
            <button className='nav_btn'>
              download  aapp
            </button>

          </div>
        </div>
      </div>

      <div style={color} className='header_mob flex justify-between'>
        <Link href='./'>
          <img className='logo mt-4' src='https://ik.imagekit.io/juwoncaleb/24299_451616_JRSH0nPB2.jpg?updatedAt=1682348309296' />
        </Link>
        <div className=' justify-between header_content'>
          <div className=' '>
            {ham ? (
              <img onClick={toggleHam} className='open' src='./open.png' />
            ) : (
              <img onClick={toggleMenu} className='close' src='./close.png' />
            )}
            {showMenu && (
              <div class="menu">
                <Link href='./About'>
                  <motion.p class="mt-6 text-center cursor-pointer" initial={{ opacity: 0, scale: 0.8, y: 0 }} animate={{ opacity: 1, scale: 1, y: 18 }} transition={{  }}>
                    About
                  </motion.p>
                </Link>
                
                <Link href="./otc">
                  <motion.p
                    class="mt-6 text-center cursor-pointer" initial={{ opacity: 0, scale: 0.8, y: 0 }} animate={{ opacity: 1, scale: 1, y: 20 }} transition={{ delay: 0.2 }}>
                    OTC
                  </motion.p>
                </Link>
                <Link href='./card'>
                  <motion.p
                    class="mt-4 mb-8 text-center cursor-pointer" initial={{ opacity: 0, scale: 0.8, y: 0 }} animate={{ opacity: 1, scale: 1, y: 21 }} transition={{ delay: 0.3 }}>
                    Card
                  </motion.p>
                </Link>
                <Link href='./exchange'>
                  <motion.p
                    class="mt-4 mb-8 text-center cursor-pointer" initial={{ opacity: 0, scale: 0.8, y: 0 }} animate={{ opacity: 1, scale: 1, y: 22 }} transition={{ delay: 0.4 }}>
                    Exchange
                  </motion.p>
                </Link>
                <Link href='./blog'>
                  <motion.p
                    class="mt-4 mb-8 text-center cursor-pointer" initial={{ opacity: 0, scale: 0.8, y: 0 }} animate={{ opacity: 1, scale: 1, y: 23 }} transition={{ delay: 0.5 }}>
                    Blogs
                  </motion.p>
                </Link>
                <Link href='./career'>
                  <motion.p
                    class="mt-4 mb-8 text-center cursor-pointer" initial={{ opacity: 0, scale: 0.8, y: 0 }} animate={{ opacity: 1, scale: 1, y: 23 }} transition={{ delay: 0.6}}>
                    Career
                  </motion.p>
                </Link>
                <motion.button initial={{ opacity: 0, scale: 0.8, y: 0 }} animate={{ opacity: 1, scale: 1, y: 22 }} transition={{ delay: 0.6 }} class="cta_button mb-8  flex justify-center">
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