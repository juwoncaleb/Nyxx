import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
export default function Blog() {
    const [activeButton, setActiveButton] = useState(1);
    const divStyle = {
        backgroundColor: 'greenyellow',
        color: 'black',
        padding: '10px',
        fontSize: "16px",
        borderRadius: "16px",
        width: "170px"


    };
    const newSt = {
        backgroundColor: 'black',
        color: 'white',
        padding: '10px',
        border: "1px solid white",
        borderRadius: "16px",
        fontSize: "16px",
        width: "170px"

    };

    return (
        <div className='blogsPost'>
            <Header />
            <p className='resource '><span className='neon'>Resource</span> center.</p>
            <p className='res mt-4'>Sit sunt amet cillum irure  jklfkdmac lkwmaclsx lkwm,ecsx lkmac jlknmcasx kljwnkecm.</p>
            <p className='res'>Sit sjklfkdmac lkwmaclsx lkwm,ecsx lkmac jlknmcasx kljwnkecm.</p>

            <div className=' lg:flex grid justify-between mt-20 blog_content'>
                <img className='blog_hero_img' src='./blog/hero.png' />
                <div className='blog_head'>
                    <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                    <p className='blog_header mt-8'>Best platform to trade BTC </p>
                    <p className='blog_header mb-2'>on your phone</p>
                    <p className='blog_sub'>Laborum culpa et pariatur officia cillum eiusmod. Eiusmod occaecat aute dolor adipisicing do
                        sint eiusmod voluptate nulla cillum dolor voluptate nostrud proident. Consequat est
                        duis ex occaecat ut tempor mollit amet elit ullamco.</p>

                    <div className='flex mt-10 mb-10'>
                        <p className='blog_sub'>Read article</p>
                        <img className='greenArrow' src="./career/arrow.png" />
                    </div>
                </div>
            </div>

            <div className='  '>
                <div className='news newletter lg:flex grid justify-around'>
                    <div className='subsctiText  md:mt-40'>
                        <p className='subsc'>Susbscribe to our newsletter</p>
                        <p>Voluptate esse excepteur sit consequat esse nulla et sunt cillum magna amet culpa sit.</p>
                        <div className='flex bars justify-center'>
                            <input className='inpBar' />
                           <div className='subsz'>
                            Subscribe
                           </div>
                        </div>
                    </div>
                    <img className='blog_img' src='./blog/pc.png' />

                </div>

            </div>
            <div className='blogz'>
                <div className='grid md:flex justify-between blog_button'>
                    <p className='latest'><span className='neon'>Latest</span> articles</p>
                    <div className=' md:flex grid grid-cols-2 gap-4'>
                        <button className='mr-6 blog_btn mt-4' style={activeButton === 1 ? divStyle : newSt} onClick={() => { setActiveButton(1) }}>All</button>
                        <button className='mr-6 blog_btn mt-4 ' style={activeButton === 2? divStyle : newSt} onClick={() => setActiveButton(2)}>Finance</button>

                        <button className='mr-6 blog_btn mt-4' style={activeButton === 3 ? divStyle : newSt} onClick={() => setActiveButton(3)}>Legal</button>
                        <button className='mr-6 blog_btn mt-4'  style={activeButton === 4 ? divStyle : newSt} onClick={() => setActiveButton(4)}>Business</button>
                    </div>
                </div>

                {activeButton === 1 ?
                    <div className='all gap:4 mt-20 grid md:grid-cols-2'>

                        <div className='blog_card'>
                            <img className='search' src='./blog/search.png' />
                            <div className='blog_head'>
                                <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                                <p className='blog_header mt-8'>Best platform to trade BTC </p>
                                <p className='blog_header mb-2'>on your phone</p>
                                <div className='flex mt-10'>
                                    <p className='blog_sub'>Read article</p>
                                    <img className='greenArrow' src="./career/arrow.png" />
                                </div>
                            </div>
                        </div>
                        <div className='blog_card'>
                            <img className='search' src='./blog/safe.png' />
                            <div className='blog_head'>
                                <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                                <p className='blog_header mt-8'>Best platform to trade BTC </p>
                                <p className='blog_header mb-2'>on your phone</p>
                                <div className='flex mt-10'>
                                    <p className='blog_sub'>Read article</p>
                                    <img className='greenArrow' src="./career/arrow.png" />
                                </div>
                            </div>
                        </div>
                        <div className='blog_card'>
                            <img className='search' src='./blog/search.png' />
                            <div className='blog_head'>
                                <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                                <p className='blog_header mt-8'>Best platform to trade BTC </p>
                                <p className='blog_header mb-2'>on your phone</p>
                                <div className='flex mt-10'>
                                    <p className='blog_sub'>Read article</p>
                                    <img className='greenArrow' src="./career/arrow.png" />
                                </div>
                            </div>
                        </div>
                        <div className='blog_card'>
                            <img className='search' src='./blog/cell.png' />
                            <div className='blog_head'>
                                <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                                <p className='blog_header mt-8'>Best platform to trade BTC </p>
                                <p className='blog_header mb-2'>on your phone</p>
                                <div className='flex mt-10'>
                                    <p className='blog_sub'>Read article</p>
                                    <img className='greenArrow' src="./career/arrow.png" />
                                </div>
                            </div>
                        </div>
                        <div className='blog_card'>
                            <img className='search' src='./blog/stats.png' />
                            <div className='blog_head'>
                                <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                                <p className='blog_header mt-8'>Best platform to trade BTC </p>
                                <p className='blog_header mb-2'>on your phone</p>
                                <div className='flex mt-10'>
                                    <p className='blog_sub'>Read article</p>
                                    <img className='greenArrow' src="./career/arrow.png" />
                                </div>
                            </div>
                        </div>
                        <div className='blog_card'>
                            <img className='search' src='./blog/wallet.png' />
                            <div className='blog_head'>
                                <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                                <p className='blog_header mt-8'>Best platform to trade BTC </p>
                                <p className='blog_header mb-2'>on your phone</p>
                                <div className='flex mt-10'>
                                    <p className='blog_sub'>Read article</p>
                                    <img className='greenArrow' src="./career/arrow.png" />
                                </div>
                            </div>
                        </div>
                    </div> : null}
                {activeButton === 2 ? <div className='all gap:4 mt-20 grid md:grid-cols-2'>


                    <div className='blog_card'>
                        <img className='search' src='./blog/safe.png' />
                        <div className='blog_head'>
                            <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                            <p className='blog_header mt-8'>Best platform to trade BTC </p>
                            <p className='blog_header mb-2'>on your phone</p>
                            <div className='flex mt-10'>
                                <p className='blog_sub'>Read article</p>
                                <img className='greenArrow' src="./career/arrow.png" />
                            </div>
                        </div>
                    </div>
                    <div className='blog_card'>
                        <img className='search' src='./blog/search.png' />
                        <div className='blog_head'>
                            <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                            <p className='blog_header mt-8'>Best platform to trade BTC </p>
                            <p className='blog_header mb-2'>on your phone</p>
                            <div className='flex mt-10'>
                                <p className='blog_sub'>Read article</p>
                                <img className='greenArrow' src="./career/arrow.png" />
                            </div>
                        </div>
                    </div>
                    <div className='blog_card'>
                        <img className='search' src='./blog/safe.png' />
                        <div className='blog_head'>
                            <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                            <p className='blog_header mt-8'>Best platform to trade BTC </p>
                            <p className='blog_header mb-2'>on your phone</p>
                            <div className='flex mt-10'>
                                <p className='blog_sub'>Read article</p>
                                <img className='greenArrow' src="./career/arrow.png" />
                            </div>
                        </div>
                    </div>
                    <div className='blog_card'>
                        <img className='search' src='./blog/search.png' />
                        <div className='blog_head'>
                            <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                            <p className='blog_header mt-8'>Best platform to trade BTC </p>
                            <p className='blog_header mb-2'>on your phone</p>
                            <div className='flex mt-10'>
                                <p className='blog_sub'>Read article</p>
                                <img className='greenArrow' src="./career/arrow.png" />
                            </div>
                        </div>
                    </div>
                    <div className='blog_card'>
                        <img className='search' src='./blog/cell.png' />
                        <div className='blog_head'>
                            <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                            <p className='blog_header mt-8'>Best platform to trade BTC </p>
                            <p className='blog_header mb-2'>on your phone</p>
                            <div className='flex mt-10'>
                                <p className='blog_sub'>Read article</p>
                                <img className='greenArrow' src="./career/arrow.png" />
                            </div>
                        </div>
                    </div>

                </div> : null}
                {activeButton === 3 ? <div className='all gap:4 mt-20 grid md:grid-cols-2'>


                    <div className='blog_card'>
                        <img className='search' src='./blog/cell.png' />
                        <div className='blog_head'>
                            <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                            <p className='blog_header mt-8'>Best platform to trade BTC </p>
                            <p className='blog_header mb-2'>on your phone</p>
                            <div className='flex mt-10'>
                                <p className='blog_sub'>Read article</p>
                                <img className='greenArrow' src="./career/arrow.png" />
                            </div>
                        </div>
                    </div>
                    <div className='blog_card'>
                        <img className='search' src='./blog/safe.png' />
                        <div className='blog_head'>
                            <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                            <p className='blog_header mt-8'>Best platform to trade BTC </p>
                            <p className='blog_header mb-2'>on your phone</p>
                            <div className='flex mt-10'>
                                <p className='blog_sub'>Read article</p>
                                <img className='greenArrow' src="./career/arrow.png" />
                            </div>
                        </div>
                    </div>
                    <div className='blog_card'>
                        <img className='search' src='./blog/search.png' />
                        <div className='blog_head'>
                            <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                            <p className='blog_header mt-8'>Best platform to trade BTC </p>
                            <p className='blog_header mb-2'>on your phone</p>
                            <div className='flex mt-10'>
                                <p className='blog_sub'>Read article</p>
                                <img className='greenArrow' src="./career/arrow.png" />
                            </div>
                        </div>
                    </div>
                    <div className='blog_card'>
                        <img className='search' src='./blog/stats.png' />
                        <div className='blog_head'>
                            <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                            <p className='blog_header mt-8'>Best platform to trade BTC </p>
                            <p className='blog_header mb-2'>on your phone</p>
                            <div className='flex mt-10'>
                                <p className='blog_sub'>Read article</p>
                                <img className='greenArrow' src="./career/arrow.png" />
                            </div>
                        </div>
                    </div>
                    <div className='blog_card'>
                        <img className='search' src='./blog/wallet.png' />
                        <div className='blog_head'>
                            <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                            <p className='blog_header mt-8'>Best platform to trade BTC </p>
                            <p className='blog_header mb-2'>on your phone</p>
                            <div className='flex mt-10'>
                                <p className='blog_sub'>Read article</p>
                                <img className='greenArrow' src="./career/arrow.png" />
                            </div>
                        </div>
                    </div>
                </div> : null}
                {activeButton === 4 ? <div className='all gap:4 mt-20 grid md:grid-cols-2'>


                    <div className='blog_card'>
                        <img className='search' src='./blog/safe.png' />
                        <div className='blog_head'>
                            <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                            <p className='blog_header mt-8'>Best platform to trade BTC </p>
                            <p className='blog_header mb-2'>on your phone</p>
                            <div className='flex mt-10'>
                                <p className='blog_sub'>Read article</p>
                                <img className='greenArrow' src="./career/arrow.png" />
                            </div>
                        </div>
                    </div>
                    <div className='blog_card'>
                        <img className='search' src='./blog/safe.png' />
                        <div className='blog_head'>
                            <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                            <p className='blog_header mt-8'>Best platform to trade BTC </p>
                            <p className='blog_header mb-2'>on your phone</p>
                            <div className='flex mt-10'>
                                <p className='blog_sub'>Read article</p>
                                <img className='greenArrow' src="./career/arrow.png" />
                            </div>
                        </div>
                    </div>
                    <div className='blog_card'>
                        <img className='search' src='./blog/search.png' />
                        <div className='blog_head'>
                            <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                            <p className='blog_header mt-8'>Best platform to trade BTC </p>
                            <p className='blog_header mb-2'>on your phone</p>
                            <div className='flex mt-10'>
                                <p className='blog_sub'>Read article</p>
                                <img className='greenArrow' src="./career/arrow.png" />
                            </div>
                        </div>
                    </div>
                    <div className='blog_card'>
                        <img className='search' src='./blog/wallet.png' />
                        <div className='blog_head'>
                            <p className='blog_sub mt-8'>Apps ---- jan 6 2023</p>
                            <p className='blog_header mt-8'>Best platform to trade BTC </p>
                            <p className='blog_header mb-2'>on your phone</p>
                            <div className='flex mt-10'>
                                <p className='blog_sub'>Read article</p>
                                <img className='greenArrow' src="./career/arrow.png" />
                            </div>
                        </div>
                    </div>
                </div> : null}
            </div>
            <Footer />

        </div>
    )
}
