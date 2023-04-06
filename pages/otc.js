import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
export default function otc() {
    return (
        <div className='otc'>
            <Header />
            <div>
                <p className='otc_text ot'>VIP & personalized crypto OTC for </p>
                <p className='otc_text'>individuals and businesses</p>
                <p className='otc_sub ot_s'>Are you an institution, a high volume trader or a new crypto bro, we have</p>
                <p className='otc_sub'>designed our hassle-free OTC desk just for you</p>
                <div class="button-container">
                    <button class="text_btn_1 mr-6">
                        Learn more
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
