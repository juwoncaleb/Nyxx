import React, { use, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
export default function card() {
    const [active, setActive] = useState(null)
    return (
        <div className='card_section'>
            <Header />
            <p className='card_text'>TRUZACT CARD</p>
            <img className='card_truzact mt-10' src='./card/card.png' />

            <div className='card_1 flex justify-center'>
                <div className='cardtext'>
                    <p className='card_head'>Earn up to 8% BNB Cashback everytime you spend</p>
                    <p>All your cashback from eligible purchases are automatically deposited in your Funding Wallet so you only need to worry about spending your crypto.</p>
                    <div className='flex  mt-4'>
                        <p className='learn'>Learn More</p>
                        <img className='arroww ml-4' src="./arrow.png" />
                    </div>
                </div>
                <img className='card_wallet' src='./card/wallet.png' />
            </div>
            <div className='card_2 flex justify-center'>
                <img className='card_rates' src='./card/low.png' />

                <div className='cardtext'>
                    <p className='card_head'>Earn up to 8% BNB Cashback everytime you spend</p>
                    <p>All your cashback from eligible purchases are automatically deposited in your Funding Wallet so you only need to worry about spending your crypto.</p>
                    <div className='flex  mt-4'>
                        <p className='learn'>Learn More</p>
                        <img className='arroww ml-4' src="./arrow.png" />
                    </div>
                </div>
            </div>

            <div className='card_1 flex justify-center'>
                <div className='cardtext'>
                    <p className='card_head'>Earn up to 8% BNB Cashback everytime you spend</p>
                    <p>All your cashback from eligible purchases are automatically deposited in your Funding Wallet so you only need to worry about spending your crypto.</p>
                    <div className='flex  mt-4'>
                        <p className='learn'>Learn More</p>
                        <img className='arroww ml-4' src="./arrow.png" />
                    </div>
                </div>
                <img className='card_wallet' src='./card/car.png' />
            </div>
            <div className='card_banner flex justify-center'>
                <img className='bannerz mr-20' src='./card/banner.png' />

                <div className='cardtext mt-20'>
                    <p className='card_head'>Earn up to 8% BNB Cashback everytime you spend</p>
                    <p>All your cashback from eligible purchases are automatically deposited in your Funding Wallet so you only need to worry about spending your crypto.</p>
                    <div className='flex  mt-4'>
                        <p className='learn'>Learn More</p>
                        <img className='arroww ml-4' src="./arrow.png" />
                    </div>
                </div>
            </div>
            <p className='working working_head'>HOW DOES TRUACT CARD </p>
            <p className='working'>WORKS</p>
            <div className=' grid md:grid-cols-3 bannerrs gap-10'>
                <div className='steps'>
                    <div className='flex justify-between mb-10'>
                        <img className='card_icons' src='./card/icon1.png' />
                        <p className='steps_count'>01</p>
                    </div>
                    <p>Cupidatat nulla fugiat et veniam adipisicing eiusmod deserunt dolore Lorem adipisicing nulla mollit id.</p>
                </div>
                <div className='steps'>
                    <div className='flex justify-between mb-10'>
                        <img className='card_icons' src='./card/icon2.png' />
                        <p className='steps_count'>02</p>
                    </div>
                    <p>Cupidatat nulla fugiat et veniam adipisicing eiusmod deserunt dolore Lorem adipisicing nulla mollit id.</p>

                </div>
                <div className='steps'>
                    <div className='flex justify-between mb-10'>
                        <img className='card_icons' src='./card/icon3.png' />
                        <p className='steps_count'>03</p>
                    </div>
                    <p>Cupidatat nulla fugiat et veniam adipisicing eiusmod deserunt dolore Lorem adipisicing nulla mollit id.</p>

                </div>
            </div>
            <div className='faq_head'>
                <p className='faq'>FAQ</p>
                <div>
                    <div className='flex justify-between mt-10 mb-8'>
                        <p  className='question'>How to order Binance Card?</p>
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
                        <p  className='question'>How to order Binance Card?</p>
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
                        <p  className='question'>How to order Binance Card?</p>
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
            <Footer />
        </div>
    )
}
