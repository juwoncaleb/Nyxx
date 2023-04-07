import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
export default function otc() {
    const [active, setActive] = useState(null)

    return (
        <div className='otc'>
            <Header />
            <div className='otc_hero'>
                <p className='otc_text ot'>VIP & personalized crypto OTC for </p>
                <p className='otc_text'>individuals and businesses</p>
                <p className='otc_sub ot_s'>Are you an institution, a high volume trader or a new crypto bro, we have</p>
                <p className='otc_sub'>designed our hassle-free OTC desk just for you</p>
                <div class="button-container">
                    <button class="learmn mr-6">
                        Learn more
                    </button>
                </div>
            </div>
            <div>
                <p className='explaination'>What is OTC?</p>
                <div className='dets'>
                    <p>Our Over-the-counter (OTC) desk is an exclusive and more personalized service outside of the Patricia</p>
                    <p>App. Where high net-worth individuals can get instant liquidity for their bulk trades, with utmost privacy</p>
                    <p>and the most competitive rates.</p>
                    <img className='video ' src='./vd.png' />
                </div>
            </div>
            <div>
                <p className='explaination'>Trade on the exchange with the <br /> most benefits</p>
                <div className='dets'>
                    <p>Our OTC is designed to give you value for your time and money.</p>
                    <div className='grid md:grid-cols-2 gap-8 trade_benefit '>
                        <div className='ot_card'>
                            <img className='otc_icon' src='./donation.png' />
                            <p className='otc_Card_icon'>Personalized trading experience</p>
                            <p>Occaecat dolor incididunt excepteur aliqua officia tempor mollit veniam dolor dolore reprehenderit velit nulla irure.</p>

                        </div>
                        <div className='ot_card'>
                            <img className='otc_icon' src='./referral.png' />
                            <p className='otc_Card_icon'>Personalized trading experience</p>
                            <p>Occaecat dolor incididunt excepteur aliqua officia tempor mollit veniam dolor dolore reprehenderit velit nulla irure.</p>

                        </div>
                        <div className='ot_card'>
                            <img className='otc_icon' src='./wall.png' />
                            <p className='otc_Card_icon'>Personalized trading experience</p>
                            <p>Occaecat dolor incididunt excepteur aliqua officia tempor mollit veniam dolor dolore reprehenderit velit nulla irure.</p>

                        </div>
                        <div className='ot_card'>
                            <img className='otc_icon' src='./tranfer.png' />
                            <p className='otc_Card_icon'>Personalized trading experience</p>
                            <p>Occaecat dolor incididunt excepteur aliqua officia tempor mollit veniam dolor dolore reprehenderit velit nulla irure.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-20'>
                <p className='explaination mb-14'>The OTC Desk Process</p>
                <div className='flex justify-center  mt-20'>
                    <div className='onBoard_texts'>
                        <div className='flex onboard'>
                            <div class="vl"></div>
                            <div className='onboard_numbers'>
                                <div className='onboard_number'>
                                    <p>1</p>

                                </div>
                            </div>
                            <div>
                                <p className='onboarding_texts'>ONBOARD</p>
                                <p>Pariatur incididunt consequat et reprehenderit cupidatat.</p>
                                <p>Pariatur incididunt consequat et reprehenderit cupidatat.</p>
                                <p>Pariatur incididunt consequat et reprehenderit cupidatat.</p>
                            </div>
                        </div>
                        <div className='flex onboard '>
                            <div class="vl"></div>
                            <div className='onboard_numbers'>
                                <div className='onboard_number'>
                                    <p>2</p>
                                </div>
                            </div>
                            <div >
                                <p className='onboarding_texts'>ONBOARD</p>
                                <p>Pariatur incididunt consequat et reprehenderit cupidatat.</p>
                                <p>Pariatur incididunt consequat et reprehenderit cupidatat.</p>
                                <p>Pariatur incididunt consequat et reprehenderit cupidatat.</p>
                            </div>
                        </div>
                        <div className='flex onboard '>
                            <div class="vl"></div>
                            <div className='onboard_numbers'>
                                <div className='onboard_number' >
                                    <p>3</p>
                                </div>
                            </div>
                            <div>
                                <p className='onboarding_texts'>ONBOARD</p>
                                <p>Pariatur incididunt consequat et reprehenderit cupidatat.</p>
                                <p>Pariatur incididunt consequat et reprehenderit cupidatat.</p>
                                <p>Pariatur incididunt consequat et reprehenderit cupidatat.</p>
                            </div>
                        </div>
                    </div>
                    <img className='onBoard_laptop' src='./laptop.png' />
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
            <Footer />
        </div>
    )
}
