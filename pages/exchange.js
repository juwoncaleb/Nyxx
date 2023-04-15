import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { motion, stagger, useScroll, useTransform } from "framer-motion"

export default function Exchange() {
    return (
        <div className='exchange'>
            <Header />
            <div className='flex justify-center exchange_hero'>
                <motion.div  initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} >
                    <div className='exhange_header'>
                        <p>The fast crypto <br /> exchnage trusted by <br /> millin of users.</p>
                    </div>
                    <div className='mt-8'>
                        <p>Nostrud mollit labore adipisicing id magna ad anim nisi ex.</p>
                        <p>Nostrud mollit labore adipisicing id magna ad anim nisi ex.</p>
                        <p>Nostrud mollit labore adipisicing id magna ad anim nisi ex.</p>
                    </div>
                    <div class="mt-8">
                        <button class="exchange_btn mr-6">
                            Learn more
                        </button>
                    </div>
                </motion.div>
                <motion.img  initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 , delay:0.25}} className='exhange_hero_img' src='./exchange/hero.png' />
            </div>
            <div className='flex justify-center exchange_steps'>
                {/* TEXT */}
                <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 0.8,
                    }}>
                    <p className='exchange_text'>
                        Step into a world of <br /> trading with ease with <br /> TRAZACT
                    </p>
                    <p className='exchange_text_sub'>Experience the New Roqqu Cryptocurrency Payment Gateway, <br />
                        a smart and efficient way to receive fiat payments in cryptocurrency.</p>
                    <div className='exchange_s'>
                        <div className='flex justify-left mt-8 mb-14'>
                            <div>
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_17_30413)">
                                        <path d="M13.998 26.6484C21.1779 26.6484 26.998 20.8283 26.998 13.6484C26.998 6.46854 21.1779 0.648438 13.998 0.648438C6.81815 0.648438 0.998047 6.46854 0.998047 13.6484C0.998047 20.8283 6.81815 26.6484 13.998 26.6484Z" fill="#B0F127" />
                                        <path d="M8.11523 14.488L11.4771 17.8499L19.8816 9.44531" stroke="#060606" stroke-width="2" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_17_30413">
                                            <rect width="26" height="26" fill="white" transform="translate(0.998047 0.648438)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className='round'>

                                </div>
                                <div className='round2'>

                                </div>
                                <div className='round3'>

                                </div>
                            </div>
                            <div className='ml-4'>
                                <p>Buy and sell in microseconds</p>
                                <p>Incididunt nulla ea ea velit fugiat et sit officia.</p>
                                <p>Incididunt nulla ea ea velit fugiat et sit officia.</p>
                            </div>
                        </div>
                        <div className='flex justify-left mb-14'>
                            <div>
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_17_30413)">
                                        <path d="M13.998 26.6484C21.1779 26.6484 26.998 20.8283 26.998 13.6484C26.998 6.46854 21.1779 0.648438 13.998 0.648438C6.81815 0.648438 0.998047 6.46854 0.998047 13.6484C0.998047 20.8283 6.81815 26.6484 13.998 26.6484Z" fill="#B0F127" />
                                        <path d="M8.11523 14.488L11.4771 17.8499L19.8816 9.44531" stroke="#060606" stroke-width="2" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_17_30413">
                                            <rect width="26" height="26" fill="white" transform="translate(0.998047 0.648438)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className='round'>

                                </div>
                                <div className='round2'>

                                </div>
                                <div className='round3'>

                                </div>
                            </div>
                            <div className='ml-4'>
                                <p>Buy and sell in microseconds</p>
                                <p>Incididunt nulla ea ea velit fugiat et sit officia.</p>
                                <p>Incididunt nulla ea ea velit fugiat et sit officia.</p>
                            </div>
                        </div>
                        <div className='flex justify-left mb-14'>
                            <div className='mr-4'>
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_17_30413)">
                                        <path d="M13.998 26.6484C21.1779 26.6484 26.998 20.8283 26.998 13.6484C26.998 6.46854 21.1779 0.648438 13.998 0.648438C6.81815 0.648438 0.998047 6.46854 0.998047 13.6484C0.998047 20.8283 6.81815 26.6484 13.998 26.6484Z" fill="#B0F127" />
                                        <path d="M8.11523 14.488L11.4771 17.8499L19.8816 9.44531" stroke="#060606" stroke-width="2" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_17_30413">
                                            <rect width="26" height="26" fill="white" transform="translate(0.998047 0.648438)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className='round'>

                                </div>
                                <div className='round2'>

                                </div>
                                <div className='round3'>

                                </div>
                            </div>
                            <div className='ml-4'>
                                <p>Buy and sell in microseconds</p>
                                <p>Incididunt nulla ea ea velit fugiat et sit officia.</p>
                                <p>Incididunt nulla ea ea velit fugiat et sit officia.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div  initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 1, delay: 0.2
                    }}>
                    <img className='gr ml-40' src='./graph.png' />
                </motion.div>
            </div>
            <div className='flex justify-center exchange_steps2 '>
                <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 1, delay: 0.2
                    }}>
                    <img className='pone mr-40' src='./lock.png' />
                </motion.div>
                {/* TEXT */}
                <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 0.8,
                    }}>
                    <p className='exchange_text'>
                        Step into a world of <br /> trading with ease with <br /> TRAZACT
                    </p>
                    <p className='exchange_text_sub'>Experience the New Roqqu Cryptocurrency Payment Gateway, <br />
                        a smart and efficient way to receive fiat payments in cryptocurrency.</p>
                    <div className='exchange_s'>
                       
                        <div className='flex exchangee justify-left mt-8 mb-14'>
                            <div>
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_17_30413)">
                                        <path d="M13.998 26.6484C21.1779 26.6484 26.998 20.8283 26.998 13.6484C26.998 6.46854 21.1779 0.648438 13.998 0.648438C6.81815 0.648438 0.998047 6.46854 0.998047 13.6484C0.998047 20.8283 6.81815 26.6484 13.998 26.6484Z" fill="#B0F127" />
                                        <path d="M8.11523 14.488L11.4771 17.8499L19.8816 9.44531" stroke="#060606" stroke-width="2" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_17_30413">
                                            <rect width="26" height="26" fill="white" transform="translate(0.998047 0.648438)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className='round'>

                                </div>
                                <div className='round2'>

                                </div>
                                <div className='round3'>

                                </div>
                            </div>
                            <div className='ml-4'>
                                <p>Buy and sell in microseconds</p>
                                <p>Incididunt nulla ea ea velit fugiat et sit officia.</p>
                                <p>Incididunt nulla ea ea velit fugiat et sit officia.</p>
                            </div>
                        </div>
                       
                       
                        <div className='flex justify-left mb-14'>
                            <div>
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_17_30413)">
                                        <path d="M13.998 26.6484C21.1779 26.6484 26.998 20.8283 26.998 13.6484C26.998 6.46854 21.1779 0.648438 13.998 0.648438C6.81815 0.648438 0.998047 6.46854 0.998047 13.6484C0.998047 20.8283 6.81815 26.6484 13.998 26.6484Z" fill="#B0F127" />
                                        <path d="M8.11523 14.488L11.4771 17.8499L19.8816 9.44531" stroke="#060606" stroke-width="2" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_17_30413">
                                            <rect width="26" height="26" fill="white" transform="translate(0.998047 0.648438)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className='round'>

                                </div>
                                <div className='round2'>

                                </div>
                                <div className='round3'>

                                </div>
                            </div>
                            <div className='ml-4'>
                                <p>Buy and sell in microseconds</p>
                                <p>Incididunt nulla ea ea velit fugiat et sit officia.</p>
                                <p>Incididunt nulla ea ea velit fugiat et sit officia.</p>
                            </div>
                        </div>
                       
                       
                        <div className='flex justify-left mb-14'>
                            <div className='mr-4'>
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_17_30413)">
                                        <path d="M13.998 26.6484C21.1779 26.6484 26.998 20.8283 26.998 13.6484C26.998 6.46854 21.1779 0.648438 13.998 0.648438C6.81815 0.648438 0.998047 6.46854 0.998047 13.6484C0.998047 20.8283 6.81815 26.6484 13.998 26.6484Z" fill="#B0F127" />
                                        <path d="M8.11523 14.488L11.4771 17.8499L19.8816 9.44531" stroke="#060606" stroke-width="2" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_17_30413">
                                            <rect width="26" height="26" fill="white" transform="translate(0.998047 0.648438)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className='round'>

                                </div>
                                <div className='round2'>

                                </div>
                                <div className='round3'>

                                </div>
                            </div>
                            <div className='ml-4'>
                                <p>Buy and sell in microseconds</p>
                                <p>Incididunt nulla ea ea velit fugiat et sit officia.</p>
                                <p>Incididunt nulla ea ea velit fugiat et sit officia.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
          
          
            <div className='md:flex grid justify-between exchange_steps2 '>
                <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 0.8,
                    }}>
                    <p className='exchange_text'>
                        Step into a world of <br /> trading with ease with <br /> TRAZACT
                    </p>
                    <p>Ex aliquip sint aute labore do tempor enim eu eu dolore ea.</p>
                    <div className='grid md:flex ml-auto mr-auto justify-between mt-6'>
                        <div>
                            <img className='mb-8 smallIcon' src='./upload.png' />
                            <p> amet reprehenderit </p>
                        </div>
                        <div>
                            <img className='mb-8 smallIcon' src='./upload.png' />
                            <p> amet reprehenderit </p>
                        </div>
                    </div>
                </motion.div>

                <motion.img initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 1, delay: 0.2
                    }}  src='./blog1.png' />
            </div>
            <Footer/>
        </div>
    )
}
