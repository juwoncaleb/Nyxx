import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
export default function exchange() {
    return (
        <div className='exchange'>
            <Header />

            <div className='flex justify-center exchange_hero'>
                <div>
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
                </div>
                <img src='./exchange/hero.png' />
            </div>

            <div>
                {/* TEXT */}
                <div>

                </div>
            </div>
            <Footer />

        </div>
    )
}
