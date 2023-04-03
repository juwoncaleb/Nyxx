import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
export default function blog() {
    const [activeButton, setActiveButton] = useState(null);
    const divStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
    };

    return (
        <div className='blogsPost'>
            <Header />
            <p className='resource mt-20'><span className='neon'>Resource</span> center.</p>
            <p className='res mt-4'>Sit sunt amet cillum irure  jklfkdmac lkwmaclsx lkwm,ecsx lkmac jlknmcasx kljwnkecm.</p>
            <p className='res'>Sit sjklfkdmac lkwmaclsx lkwm,ecsx lkmac jlknmcasx kljwnkecm.</p>

            <div className=' flex justify-between mt-20 blog_content'>
                <img className='blog_hero' src='./blog/hero.png' />
                <div className='blog_head'>
                    <p className='blog_sub'>Apps ---- jan 6 2023</p>
                    <p className='blog_header mt-8'>Best platform to trade BTC </p>
                    <p className='blog_header mb-2'>on your phone</p>
                    <p className='blog_sub'>Laborum culpa et pariatur officia cillum eiusmod. Eiusmod occaecat aute dolor adipisicing do
                        sint eiusmod voluptate nulla cillum dolor voluptate nostrud proident. Consequat est
                        duis ex occaecat ut tempor mollit amet elit ullamco.</p>

                    <div className='flex mt-10'>
                        <p className='blog_sub'>Read article</p>
                        <img className='greenArrow' src="./career/arrow.png" />
                    </div>
                </div>
            </div>

            <div className='newletter '>
                <div className='news flex'>
                    <div className='news_text'>
                        <p className='subscibe'>Subscribe to our</p>
                        <p className='subscibe letter'>newsletter</p>
                        <p>Irure eiusmod ullamco nostrud magna magna non sunt duis aliqua ea jhdsm kjnac hjwbecsx ibecxs  do ad ea.</p>
                        <p>Irure eiusmod ullamco nostrud m ibecxs  do ad ea.</p>
                        <div className='flex '>
                            <input className='input' />
                            <button className='subs'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <img className='blog_img' src='./blog/pc.png' />
                </div>
            </div>
            <div>
                <div className='flex justify-between blog_button'>
                    <p><span className='neon'>Latest</span> articles</p>
                    <div>
                        <button className='mr-6 blog_btn' onClick={setActiveButton(1); divStyle() }>Button 1</button>
                        <button className='mr-6 blog_btn' onClick={() => setActiveButton(2)}>Button 2</button>
                        <button className='mr-6 blog_btn' onClick={() => setActiveButton(3)}>Button 3</button>
                        <button className='mr-6 blog_btn' onClick={() => setActiveButton(4)}>Button 4</button>
                    </div>
                </div>

                {activeButton === 1 ? <div>Div 1: Text A</div> : null}
                {activeButton === 2 ? <div>Div 2: Text X</div> : null}
                {activeButton === 3 ? <div>Div 3: Text Y</div> : null}
                {activeButton === 4 ? <div>Div 4: Text Z</div> : null}
            </div>
            <Footer />

        </div>
    )
}
