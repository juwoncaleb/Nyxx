import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { motion, stagger, useScroll, useTransform } from "framer-motion"

export default function Career() {
    return (
        <div>
            <div className='career'>
                <Header />

                <motion.div initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }} className='flex justify-between career_hero'>
                    <div className='hero_text'>
                        <p className='hero_text_main'>Come and join our</p>
                        <p className='hero_text_main neon'>fast growing company</p>

                        <p className='mt-4'> Magna et id non quis in sint est enim dolor laborum
                            adipisicing.eniam anim anim voluptate
                            ex eu enim laboris qui duis occaecat labore esse commodo minim
                            . Laborum aliquip ipsum nostrud sint laboris.</p>
                        <div className='flex mb-10 mt-6'>
                            <button className='text_btn_1 mr-6 '>
                                Browse positions
                            </button>
                            <button className='text_btn_2'>
                                Our company story
                            </button>
                        </div>
                    </div>
                    <motion.img initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.25 }} src='./career/tower.png' />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 0.8
                    }} className='hero_text joinUs '>
                    <p className='hero_text_main'>Company <span className='neon'>perks</span></p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 0.8
                    }} className='grid grid-cols-2 md:grid-cols-3 mt-14 perk_head'>
                    <div className='perks p1'>
                        <img className='perk_icn' src='./career/gaurd.png' />
                        <p className='perks_head'>Medical insurance</p>
                        <p>Esse ut duis deserunt nulla labore cupidatat fugiat ea magna.</p>
                    </div>
                    <div className='perks'>
                        <img className='perk_icn' src='./career/colc.png' />
                        <p className='perks_head'>Flexible hours</p>
                        <p>Esse ut duis deserunt nulla labore cupidatat fugiat ea magna.</p>

                    </div>
                    <div className='perks p2'>
                        <img className='perk_icn' src='./career/goal.png' />
                        <p className='perks_head'>100% remote work</p>
                        <p>Esse ut duis deserunt nulla labore cupidatat fugiat ea magna.</p>

                    </div>
                    <div className='perks p4'>
                        <img className='perk_icn' src='./career/pro.png' />
                        <p className='perks_head'>Career growth</p>
                        <p>Esse ut duis deserunt nulla labore cupidatat fugiat ea magna.</p>

                    </div>
                    <div className='perks'>
                        <img className='perk_icn' src='./career/umbrela.png' />
                        <p className='perks_head'>unlimted PTO</p>
                        <p>Esse ut duis deserunt nulla labore cupidatat fugiat ea magna.</p>

                    </div>
                    <div className='perks p6'>
                        <img className='perk_icn' src='./career/game.png' />
                        <p className='perks_head'>Great Culture</p>
                        <p>Esse ut duis deserunt nulla labore cupidatat fugiat ea magna.</p>

                    </div>
                </motion.div>
                <div className='flex justify-between culture'>
                    <motion.img initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.8, delay: 0.25
                        }} className='pc' src='./career/pc.png' />

                    <motion.div initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.8
                        }} className='hero_text '>
                        <p className='hero_text_main mb-4'>Company <span className='neon'>perks</span></p>
                        <p>Occaecat aute quis excepteur laborum adipisicing. Sit esse reprehenderit consequat
                            nulla sit. Minim aliqua anim iqua nulla exercitation ullamco cupidatat qui sunt est ex exercitation cupidatat. Ullamco est ex anim irure est labore occaecat eiusmod duis enim tempor labore ullamco laboris.</p>
                        <div className='flex mb-10 mt-6'>
                            <button className='text_btn_1 mr-6 '>
                                Browse positions
                            </button>

                        </div>
                    </motion.div>
                </div>

                <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 1
                    }} className='flex justify-between board'>
                    <div className='  '>
                        <p className='hero_text_main'>Company <span className='neon'>perks</span></p>
                    </div>
                    <div className='grid job'>
                        <div className='flex justify-between job_card jb_1'>
                            <div >
                                <p className='job_head'>Junior Frontend Engineer</p>
                                <p className='loc'>Los Angeles ----- <span className='neon'>Full Time</span></p>
                            </div>
                            <img className='green_arrow' src="./career/arrow.png" />
                        </div>
                        <div className='flex job_card  justify-between'>
                            <div>
                                <p className='job_head'>Junior Frontend Engineer</p>
                                <p className='loc'>Los Angeles ----- <span className='neon'>Full Time</span></p>
                            </div>
                            <img className='green_arrow' src="./career/arrow.png" />
                        </div>
                        <div className='flex job_card  justify-between'>
                            <div>
                                <p className='job_head'> Junior Frontend Engineer</p>
                                <p className='loc'>Los Angeles ----- <span className='neon'>Full Time</span></p>
                            </div>
                            <img className='green_arrow' src="./career/arrow.png" />
                        </div>
                        <div className='flex job_card  justify-between'>
                            <div>
                                <p className='job_head'>Junior Frontend Engineer</p>
                                <p className='loc'>Los Angeles ----- <span className='neon'>Full Time</span></p>
                            </div>
                            <img className='green_arrow' src="./career/arrow.png" />

                        </div>
                        <div className='flex job_card  justify-between'>
                            <div>
                                <p className='job_head'>Junior Frontend Engineer</p>
                                <p className='loc'>Los Angeles ----- <span className='neon'>Full Time</span></p>
                            </div>
                            <img className='green_arrow' src="./career/arrow.png" />
                        </div>
                        <div className='flex job_card justify-between jb_6'>
                            <div>
                                <p className='job_head'>Junior Frontend Engineer</p>
                                <p className='loc'>Los Angeles ----- <span className='neon'>Full Time</span></p>
                            </div>
                            <img className='green_arrow' src="./career/arrow.png" />
                        </div>
                    </div>
                </motion.div>
                <Footer />
            </div>
        </div>
    )
}
