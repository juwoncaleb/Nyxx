import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function About() {
    return (
        <div className='about_us'>
            {/* <Header /> */}
            <div className='about_header'>
                <p>Our main mission is to </p>
                <p className='neon mb-40'>democratize finance</p>
                <div className='coins'>
                    <div className='flex justify-center'>
                        <img className='about_eth' src='./about/eth.png' />
                        <img className='about_sola' src='./about/sola.png' />
                        <img className='about_btc' src='./about/btc.png' />
                        <img className='about_lana' src='./about/lana.png' />
                    </div>


                </div>
                <div>
                    <img className='globe' src='./about/abt.png' />
                </div>

            </div>
            <div className=' flex justify-between achievement'>
                <div className='verificatin_accom' >
                    <p className='achieve_text'><span className='neon'>Take a look </span>at what </p>
                    <p className='achieve_text mb-8'>we've accomplished</p>
                    <p className='achieve_seb'>Ut sit quis proident id uhjkj hiuoj ijlkjhkj hikjli ipsum qui.</p>
                    <p className='achieve_seb'>Ut sit quis proident id uhjkj hiuoj ijlkjhkj hikjli ipsum qui.</p>
                    <p className='achieve_seb'>Ut sit quis proident id uhjkj hiuoj ijlkjhkj hikjli ipsum qui.</p>
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
            <div className='flex justify-between system_class'>
                <div>
                    <img className='system' src='./about/system.png' />
                </div>
                <div>
                    <div className='system_text' >
                        <p className='syste'><span className='neon'>Take a look </span>at what </p>
                        <p className='syste mb-8'>we've accomplished</p>
                        <p>Ut sit quis proident id uhjkj hiuoj ijlkjhkj hikjli ipsum qui.</p>
                        <p>Ut sit quis proident id uhjkj hiuoj ijlkjhkj hikjli ipsum qui.</p>
                        <p>Ut sit quis proident id uhjkj hiuoj ijlkjhkj hikjli ipsum qui.</p>
                        <button className='text_btn_1 mt-10 mr-6 '>
                            Download
                        </button>

                    </div>
                </div>
            </div>
            <div className='team'>
                <div className='team_member' >
                    <p className='achieve_text'><span className='neon'>Meet </span>the team </p>
                    <p className='achieve_text mb-8'>behind Truzact</p>
                </div>
                <div className='grid grid-cols-3'>
                    <div className='team_card'>
                        <img src='./about/g1.jpg' />
                    </div>
                    <div>
                        <img src='./about/g2.jpg' />

                    </div> <div>
                        <img src='./about/g3.jpg' />

                    </div>
                    <div>
                        <img src='./about/g4.jpg' />

                    </div>
                    <div>
                        <img src='./about/g5.jpg' />

                    </div> <div>
                        <img src='./about/g6.jpg' />

                    </div>
                </div>

                
            </div>
            <Footer />
        </div>
    )
}
