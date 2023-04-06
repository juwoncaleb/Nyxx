import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
export default function otc() {
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
                    <img className='video' src='./vd.png' />
                </div>
            </div>
            <div>
                <p className='explaination'>Trade on the exchange with the <br /> most benefits</p>
                <div className='dets'>
                    <p>Our OTC is designed to give you value for your time and money.</p>
                    <div className='grid md:grid-cols-2 gap-8 trade_benefit mt-14'>
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

            <div>
                <p className='explaination'>Trade on the exchange with the <br /> most benefits</p>
                <div className='flex '>
                    <div>
                        <div>
                            <div>
                                <p>1</p>

                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
