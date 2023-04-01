import React from 'react'
import Header from '../components/Header'

export default function About() {
    return (
        <div className='about_us'>
            <Header />
            <div className='about_header'>
                <p>Our main mission is to </p>
                <p className='neon'>democratize finance</p>
                <div className='globe_images'>
                    <div className='flex justify-between'>
                        <img className='about_eth' src='./about/eth.png' />
                        <img className='about_sola' src='./about/sola.png' />
                        <img className='about_btc' src='./about/btc.png' />
                        <img className='about_lana' src='./about/lana.png' />
                    </div>

                    <div>
                        <img className='globe' src='./about/abt.png' />
                    </div>
                </div>

            </div>
            <div className='flex justify-between achievement'>
                <div >
                    <p className='achieve_text'><span className='neon'>Take a look </span>at what </p>
                    <p className='achieve_text mb-8'>we've accomplished</p>
                    <p>Ut sit quis proident id uhjkj hiuoj ijlkjhkj hikjli ipsum qui.</p>
                    <p>Ut sit quis proident id uhjkj hiuoj ijlkjhkj hikjli ipsum qui.</p>
                    <p>Ut sit quis proident id uhjkj hiuoj ijlkjhkj hikjli ipsum qui.</p>
                    <button className='text_btn_1 mt-10 mr-6 '>
                        Download
                    </button>

                </div>
                <div className='verificaton_text'>
                    <div className='card mt-18 flex grid sm:grid-cols-2 '>
                        <div className='card_sub card_sub_1'>
                            <p className='card_header'>CISA <span className='neon'>+</span></p>
                            <p>Security incident</p>

                        </div>
                        <div className='card_sub card_sub_2'>
                            <p className='card_header'>0 <span className='neon'>.</span></p>
                            <p>Security incident</p>
                        </div>
                        <div className='card_sub card_sub_3'>
                            <p className='card_header'>256<span className='neon'>bits</span></p>
                            <p>Security incident</p>

                        </div>
                        <div className='card_sub card_sub_4'>
                            <p className='card_header'>100<span className='neon'>%</span></p>
                            <p>Security incident</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
