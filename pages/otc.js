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
                    <button class="learn mr-6">
                        Learn more
                    </button>
                </div>
            </div>
            <div>
                <p className='explaination'>What is Otc</p>
                <div className='dets'>
                    <p>Our Over-the-counter (OTC) desk is an exclusive and more personalized service outside of the Patricia</p>
                    <p>App. Where high net-worth individuals can get instant liquidity for their bulk trades, with utmost privacy</p>
                    <p>and the most competitive rates.</p>
                    <img src='./vd.png'/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
