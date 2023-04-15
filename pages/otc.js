import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { motion, stagger, useScroll, useTransform } from "framer-motion"

export default function Otc() {
    const [active, setActive] = useState(null)

    return (
        <div className='otc'>
            <Header />
            <motion.div initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} className='otc_hero'>
                <p className='otc_text ot'>VIP & personalized crypto OTC for </p>
                <p className='otc_text'>individuals and businesses</p>
                <p className='otc_sub ot_s'>Are you an institution, a high volume trader or a new crypto bro, we have</p>
                <p className='otc_sub'>designed our hassle-free OTC desk just for you</p>
                <div class="button-container">
                    <button class="learmn mr-6">
                        Learn more
                    </button>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.6, delay: 0.3
                        }}  className='otc_section'>
                <motion.div
                    className=''>
                    <p className='explaination mt-10'>What is OTC?</p>
                    <motion.div className='dets'>
                        <p>Our Over-the-counter (OTC) desk is an exclusive and more personalized service outside of the Patricia</p>
                        <p>App. Where high net-worth individuals can get instant liquidity for their bulk trades, with utmost privacy</p>
                        <p>and the most competitive rates.</p>
                        <motion.img initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.6
                            }} className='video ' src='./vd.png' />
                    </motion.div>
                </motion.div>


                <div>
                    <motion.div initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.6
                        }}>
                        <p className='explaination'>Trade on the exchange with the <br /> most benefits</p>
                        <p className='text-center'>Our OTC is designed to give you value for your time and money.</p>
                    </motion.div>
                    <div className='dets'>
                        <div className='grid md:grid-cols-2 gap-8 trade_benefit '>
                            <motion.div initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 1
                                }} className='ot_card'>
                                <img className='otc_icon' src='./donation.png' />
                                <p className='otc_Card_icon'>Personalized trading experience</p>
                                <p>Occaecat dolor incididunt excepteur aliqua officia tempor mollit veniam dolor dolore reprehenderit velit nulla irure.</p>

                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 1.5
                                }} className='ot_card'>
                                <img className='otc_icon' src='./referral.png' />
                                <p className='otc_Card_icon'>Personalized trading experience</p>
                                <p>Occaecat dolor incididunt excepteur aliqua officia tempor mollit veniam dolor dolore reprehenderit velit nulla irure.</p>

                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 2
                                }} className='ot_card'>
                                <img className='otc_icon' src='./wall.png' />
                                <p className='otc_Card_icon'>Personalized trading experience</p>
                                <p>Occaecat dolor incididunt excepteur aliqua officia tempor mollit veniam dolor dolore reprehenderit velit nulla irure.</p>

                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 2.5
                                }} className='ot_card'>
                                <img className='otc_icon' src='./tranfer.png' />
                                <p className='otc_Card_icon'>Personalized trading experience</p>
                                <p>Occaecat dolor incididunt excepteur aliqua officia tempor mollit veniam dolor dolore reprehenderit velit nulla irure.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className='mb-20'>
                    <motion.p initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 1
                        }} className='explaination mb-14'>The OTC Desk Process</motion.p>
                    <div className='md:flex grid justify-center bord  mt-20'>
                        <div className='onBoard_texts'>
                            <div className='flex onboard'>
                                <motion.div initial={{ opacity: 0, y: 0 }}
                                    whileInView={{ opacity: 1, y: 10 }}
                                    transition={{
                                        duration
                                            : 1, delay: 0.2
                                    }}
                                    class="vl">
                                </motion.div>

                                <motion.div initial={{ opacity: 0, }}
                                    whileInView={{ opacity: 1, }}
                                    transition={{
                                        duration
                                            : 0.1
                                    }} className='onboard_numbers'>
                                    <div className='onboard_number'>
                                        <p>1</p>

                                    </div>
                                </motion.div>

                                <motion.div initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: 'spring', stiffness: 100, damping: 10, duration
                                            : 2.5
                                    }} >
                                    <p className='onboarding_texts'>ONBOARD</p>
                                    <p className='onboarding_texts_sub'>Pariatur incididunt consequat et reprehenderit cupidatat.</p>
                                    <p className='onboarding_texts_sub'>Pariatur incididunt consequat et reprehenderit cupidatat.</p>
                                    <p className='onboarding_texts_sub'>Pariatur incididunt consequat et reprehenderit cupidatat.</p>
                                </motion.div>
                            </div>


                            <div className='flex onboard '>
                                <motion.div initial={{ opacity: 0, y: 0 }}
                                    whileInView={{ opacity: 1, y: 10 }}
                                    transition={{
                                        duration
                                            : 1, delay: 0.2
                                    }} class="vl">

                                </motion.div>

                                <motion.div initial={{ opacity: 0, }}
                                    whileInView={{ opacity: 1, }}
                                    transition={{
                                        duration
                                            : 0.1
                                    }} className='onboard_numbers'>
                                    <div className='onboard_number'>
                                        <p>2</p>
                                    </div>
                                </motion.div>

                                <motion.div initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: 'spring', stiffness: 100, damping: 10, duration
                                            : 2.5
                                    }} >
                                    <p className='onboarding_texts'>ONBOARD</p>
                                    <p className='onboarding_texts_sub'>Pariatur incididunt consequat et reprehenderit cupidatat.</p>
                                    <p className='onboarding_texts_sub'>Pariatur incididunt consequat et reprehenderit cupidatat.</p>
                                    <p className='onboarding_texts_sub'>Pariatur incididunt consequat et reprehenderit cupidatat.</p>
                                </motion.div>
                            </div>
                          
                            <div className='flex onboard '>
                                <motion.div initial={{ opacity: 0, y: 0 }}
                                    whileInView={{ opacity: 1, y: 10 }}
                                    transition={{
                                        duration
                                            : 1, delay: 0.2
                                    }} class="vl"></motion.div>
                                <motion.div initial={{ opacity: 0, }}
                                    whileInView={{ opacity: 1, }}
                                    transition={{
                                        duration
                                            : 0.1
                                    }} className='onboard_numbers'>
                                    <div className='onboard_number' >
                                        <p>3</p>
                                    </div>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: 'spring', stiffness: 100, damping: 10, duration
                                            : 2.5
                                    }}>
                                    <p className='onboarding_texts'>ONBOARD</p>
                                    <p className='onboarding_texts_sub'>Pariatur incididunt consequat et reprehenderit cupidatat.</p>
                                    <p className='onboarding_texts_sub'>Pariatur incididunt consequat et reprehenderit cupidatat.</p>
                                    <p className='onboarding_texts_sub'>Pariatur incididunt consequat et reprehenderit cupidatat.</p>
                                </motion.div>
                            </div>
                        </div>
                        <motion.img  initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: 'spring', stiffness: 100, damping: 10, duration
                                            : 2
                                    }} className='onBoard_laptop' src='./laptop.png' />
                    </div>
                </div>
                <div class="button-container ">
                    <button class="learmn mr-6">
                        GET STARTED
                    </button>
                </div>
                <div className='faq_head'>
                    <p className='faq'>FAQ</p>
                    <div>
                        <div className='flex justify-between mt-10 mb-8'>
                            <p className='question'>How to order Binance Card?</p>
                            <button onClick={() => setActive(active === 1 ? null : 1)}>
                                {active === 1 ? <p>-</p> : <p>+</p>}
                            </button>
                        </div>
                        {active === 1 && (
                            <div>
                                <p>
                                    Veniam sint cupidatat officia Lorem enim officia commodo voluptate
                                    exercitation adipisicing incididunt minim. Reprehenderit
                                    reprehenderit culpa proident nulla elit id in ullamco ex eu amet
                                    dolor nostrud officia. Anim et id cillum ea fugiat duis occaecat.
                                    Non deserunt adipisicing do sunt et id dolore eiusmod incididunt ad
                                    est veniam dolor. Dolore non enim officia aute dolore eu irure est
                                    velit minim nostrud laboris.
                                </p>
                            </div>
                        )}
                    </div>
                    <div>
                        <div className='flex justify-between mt-10 mb-8'>
                            <p className='question'>How to order Binance Card?</p>
                            <button onClick={() => setActive(active === 2 ? null : 2)}>
                                {active === 2 ? <p>-</p> : <p>+</p>}
                            </button>
                        </div>
                        {active === 2 && (
                            <div>
                                <p>
                                    Veniam sint cupidatat officia Lorem enim officia commodo voluptate
                                    exercitation adipisicing incididunt minim. Reprehenderit
                                    reprehenderit culpa proident nulla elit id in ullamco ex eu amet
                                    dolor nostrud officia. Anim et id cillum ea fugiat duis occaecat.
                                    Non deserunt adipisicing do sunt et id dolore eiusmod incididunt ad
                                    est veniam dolor. Dolore non enim officia aute dolore eu irure est
                                    velit minim nostrud laboris.
                                </p>
                            </div>
                        )}
                    </div>
                    <div>
                        <div className='flex justify-between mt-10 mb-8'>
                            <p className='question'>How to order Binance Card?</p>
                            <button onClick={() => setActive(active === 3 ? null : 3)}>
                                {active === 3 ? <p>-</p> : <p>+</p>}
                            </button>
                        </div>
                        {active === 3 && (
                            <div>
                                <p>
                                    Veniam sint cupidatat officia Lorem enim officia commodo voluptate
                                    exercitation adipisicing incididunt minim. Reprehenderit
                                    reprehenderit culpa proident nulla elit id in ullamco ex eu amet
                                    dolor nostrud officia. Anim et id cillum ea fugiat duis occaecat.
                                    Non deserunt adipisicing do sunt et id dolore eiusmod incididunt ad
                                    est veniam dolor. Dolore non enim officia aute dolore eu irure est
                                    velit minim nostrud laboris.
                                </p>
                            </div>
                        )}
                    </div>
                    <div>
                        <div className='flex justify-between mt-10 mb-8'>
                            <p className='question'>How to order Binance Card?</p>
                            <button onClick={() => setActive(active === 4 ? null : 4)}>
                                {active === 4 ? <p>-</p> : <p>+</p>}
                            </button>
                        </div>
                        {active === 4 && (
                            <div>
                                <p>
                                    Veniam sint cupidatat officia Lorem enim officia commodo voluptate
                                    exercitation adipisicing incididunt minim. Reprehenderit
                                    reprehenderit culpa proident nulla elit id in ullamco ex eu amet
                                    dolor nostrud officia. Anim et id cillum ea fugiat duis occaecat.
                                    Non deserunt adipisicing do sunt et id dolore eiusmod incididunt ad
                                    est veniam dolor. Dolore non enim officia aute dolore eu irure est
                                    velit minim nostrud laboris.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
            <Footer />
        </div>
    )
}
