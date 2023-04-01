import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function hedge() {
    return (
        <div className='hedge'>
            <Header />
            <div className='flex justify-center hedgeFund '>
                {/* TEXTS */}
                <div className='hedge_text '>
                    <p className='text-6xl mb-14'>Hedge Fund</p>
                    <p>Sint laboris velit dolor ut consequat dolor ex. Anim ipsum tempor officia cillum id enim velit proident mollit cupidatat ex reprehenderit amet. Consequat ut cillum duis nostrud non voluptate deserunt minim ex tempor. Esse esse magna enim irure magna labore mollit incididunt et consequat. Nisi esse mollit veniam duis consectetur cillum nostrud elit consequat sunt.</p>
                    <div className='flex mb-10 mt-10'>
                        <button className='text_btn_2'>
                            Learn More
                        </button>
                    </div>
                </div>
                <div className='flex hedge_img '>

                    <img className='safe' src='./integration/safe.png' />
                    <img className='solana' src='./integration/sola.png' />
                    <img className='etherum' src='./integration/eth.png' />
                    <img className='dodge' src='./integration/dodge.png' />
                    <img className='add' src='./integration/add.png' />
                    <img className='prism' src='./integration/prism.png' />
                    <img className='pry' src='./integration/pryamind.png' />
                    <img className='lan' src='./integration/lana.png' />


                </div>
            </div>
            <div className=' hedge_content'>
                <p>Duis eiusmod ut et enim esse cillum sit elit fugiat amet fugiat. Velit deserunt officia do minim cupidatat consectetur aliquip esse consectetur duis elit. Magna esse fugiat fugiat voluptate excepteur sint aliquip ea labore mollit amet cillum. Occaecat duis non quis ipsum deserunt eu incididunt eu. Pariatur esse ullamco incididunt do consectetur commodo fugiat commodo.</p>
                <p className='mt-10'>Duis eiusmod ut et enim esse cillum sit elit fugiat amet fugiat. Velit deserunt officia do minim cupidatat consectetur aliquip esse consectetur duis elit. Magna esse fugiat fugiat voluptate excepteur sint aliquip ea labore mollit amet cillum. Occaecat duis non quis ipsum deserunt eu incididunt eu. Pariatur esse ullamco incididunt do consectetur commodo fugiat commodo.</p>
                <p className='mt-10'>Duis eiusmod ut et enim esse cillum sit elit fugiat amet fugiat. Velit deserunt officia do minim cupidatat consectetur aliquip esse consectetur duis elit. Magna esse fugiat fugiat voluptate excepteur sint aliquip ea labore mollit amet cillum. Occaecat duis non quis ipsum deserunt eu incididunt eu. Pariatur esse ullamco incididunt do consectetur commodo fugiat commodo.</p>

                <p className='mt-10'>Duis eiusmod ut et enim esse cillum sit elit fugiat amet fugiat. Velit deserunt officia do minim cupidatat consectetur aliquip esse consectetur duis elit. Magna esse fugiat fugiat voluptate excepteur sint aliquip ea labore mollit amet cillum. Occaecat duis non quis ipsum deserunt eu incididunt eu. Pariatur esse ullamco incididunt do consectetur commodo fugiat commodo.</p>
            </div>
            <img className='laptop' src='./laptop.png' />
            <div className='hedge_content_2 '>
                <p>Duis eiusmod ut et enim esse cillum sit elit fugiat amet fugiat. Velit deserunt officia do minim cupidatat consectetur aliquip esse consectetur duis elit. Magna esse fugiat fugiat voluptate excepteur sint aliquip ea labore mollit amet cillum. Occaecat duis non quis ipsum deserunt eu incididunt eu. Pariatur esse ullamco incididunt do consectetur commodo fugiat commodo.</p>
                <p className='mt-10'>Duis eiusmod ut et enim esse cillum sit elit fugiat amet fugiat. Velit deserunt officia do minim cupidatat consectetur aliquip esse consectetur duis elit. Magna esse fugiat fugiat voluptate excepteur sint aliquip ea labore mollit amet cillum. Occaecat duis non quis ipsum deserunt eu incididunt eu. Pariatur esse ullamco incididunt do consectetur commodo fugiat commodo.</p>
                <p className='mt-10'>Duis eiusmod ut et enim esse cillum sit elit fugiat amet fugiat. Velit deserunt officia do minim cupidatat consectetur aliquip esse consectetur duis elit. Magna esse fugiat fugiat voluptate excepteur sint aliquip ea labore mollit amet cillum. Occaecat duis non quis ipsum deserunt eu incididunt eu. Pariatur esse ullamco incididunt do consectetur commodo fugiat commodo.</p>

                <p className='mt-10'>Duis eiusmod ut et enim esse cillum sit elit fugiat amet fugiat. Velit deserunt officia do minim cupidatat consectetur aliquip esse consectetur duis elit. Magna esse fugiat fugiat voluptate excepteur sint aliquip ea labore mollit amet cillum. Occaecat duis non quis ipsum deserunt eu incididunt eu. Pariatur esse ullamco incididunt do consectetur commodo fugiat commodo.</p>
            </div>
            <div className='cta2 mb-10 '>
                <div className=' port flex '>
                    {/* IMAGES */}
                    <div className="flex ">
                        <img className='eth' src='./eth.png' />
                        <img className='phone' src='./portfolio.png' />
                        <img className='slot' src='./slot.png' />
                        <img className='con coin1' src='./lana.png' />
                        <img className='coin2 con mt-24' src='./btc.png' />
                    </div>

                    {/* TEXTS */}
                    <div className='mr-20'>
                        <div>
                            <p className=' text-black mt-20 cta3'> Try Truzact Today </p>
                            <p className=' text-black cta3'>trade and invest </p>
                            <div className='flex mb-10 mt-6'>
                                <button className='text_btn_1 apple mr-6 flex justify-center'>
                                    <p className='mt-3'> Get The app on
                                    </p>
                                    <img className='store2' src="https://img.icons8.com/sf-black/64/null/mac-os.png" />
                                </button>
                                <button className='text_btn_2 flex justify-center'>
                                    <p className='mt-3'>  Get The app on</p>
                                    <img className='store' src="https://img.icons8.com/fluency/48/null/google-play-store-new.png" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
