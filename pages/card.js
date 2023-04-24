import React, { use, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { motion, stagger, useScroll, useTransform } from "framer-motion"

export default function Card() {
    const [active, setActive] = useState(null)
    return (
        <div className='card_section'>
            <Header />
            <motion.p initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} className='card_text'>Nyx CARD</motion.p>
            <motion.img initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }} className='card_truzact mt-10' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__2__iUxEmYiiiA.webp?updatedAt=1682344881658' />

            <div className='card_1 md:flex grid justify-center'>
                <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 0.8,
                    }} className='cardtext'>
                    <p className='card_head'>Earn up to 8% BNB Cashback everytime you spend</p>
                    <p>All your cashback from eligible purchases are automatically deposited in your Funding Wallet so you only need to worry about spending your crypto.</p>
                    <div className='flex  mt-4'>
                        <p className='learn'>Learn More</p>
                        <img className='arroww ml-4' src="./arrow.png" />
                    </div>
                </motion.div>
                <motion.img initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 1, delay: 0.2
                    }} className='card_wallet' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__3__dbZ2XAN_b.webp?updatedAt=1682345024935' />
            </div>
            <div className='card_2 md:flex grid  justify-center'>
                <motion.img initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 1, delay: 0.2
                    }} className='card_rates' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__4__9KP5rtgj7.webp?updatedAt=1682345187048' />

                <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 0.8,
                    }} className='cardtext'>
                    <p className='card_head'>Earn up to 8% BNB Cashback everytime you spend</p>
                    <p>All your cashback from eligible purchases are automatically deposited in your Funding Wallet so you only need to worry about spending your crypto.</p>
                    <div className='flex  mt-4'>
                        <p className='learn'>Learn More</p>
                        <img className='arroww ml-4' src="./arrow.png" />
                    </div>
                </motion.div>
            </div>

            <div className='card_1 md:flex grid  justify-center'>
                <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 0.8,
                    }} className='cardtext'>
                    <p className='card_head'>Earn up to 8% BNB Cashback everytime you spend</p>
                    <p>All your cashback from eligible purchases are automatically deposited in your Funding Wallet so you only need to worry about spending your crypto.</p>
                    <div className='flex  mt-4'>
                        <p className='learn'>Learn More</p>
                        <img className='arroww ml-4' src="./arrow.png" />
                    </div>
                </motion.div>
                <motion.img initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 1, delay: 0.2
                    }} className='card_wallet' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__5__2-cpU-Fis.webp?updatedAt=1682345347040' />
            </div>


            <div className='card_banner md:flex grid justify-center'>
                <motion.img initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 1, delay: 0.2
                    }} className='bannerz mr-20' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__6__Aem2cPc69.webp?updatedAt=1682345451888' />

                <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 0.8,
                    }} className='cardtext mt-20'>
                    <p className='card_head'>Earn up to 8% BNB Cashback everytime you spend</p>
                    <p>All your cashback from eligible purchases are automatically deposited in your Funding Wallet so you only need to worry about spending your crypto.</p>
                    <div className='flex  mt-4'>
                        <p className='learn'>Learn More</p>
                        <img className='arroww ml-4' src="./arrow.png" />
                    </div>
                </motion.div>
            </div>
            <motion.div  initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 0.8,
                    }} >
                <p className='working working_head'>HOW DOES TRUACT CARD </p>
                <p className='working'>WORKS</p>
            </motion.div>
            <div className=' grid md:grid-cols-3 bannerrs gap-10'>
                <motion.div  initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 0.7, 
                    }} className='steps'>
                    <div className='flex justify-between mb-10'>
                        <img className='card_icons' src='./card/icon1.png' />
                        <p className='steps_count'>01</p>
                    </div>
                    <p>Cupidatat nulla fugiat et veniam adipisicing eiusmod deserunt dolore Lorem adipisicing nulla mollit id.</p>
                </motion.div>
                <motion.div  initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 1, delay:0.2
                    }} className='steps'>
                    <div className='flex justify-between mb-10'>
                        <img className='card_icons' src='./card/icon2.png' />
                        <p className='steps_count'>02</p>
                    </div>
                    <p>Cupidatat nulla fugiat et veniam adipisicing eiusmod deserunt dolore Lorem adipisicing nulla mollit id.</p>

                </motion.div>
                <motion.div  initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 1, delay:0.4
                    }} className='steps'>
                    <div className='flex justify-between mb-10'>
                        <img className='card_icons' src='./card/icon3.png' />
                        <p className='steps_count'>03</p>
                    </div>
                    <p>Cupidatat nulla fugiat et veniam adipisicing eiusmod deserunt dolore Lorem adipisicing nulla mollit id.</p>

                </motion.div>
            </div>
            <motion.div  initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 1, 
                    }} className='faq_head'>
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
            </motion.div>
            <Footer />
        </div>
    )
}
