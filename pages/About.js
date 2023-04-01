import React from 'react'
import Header from '../components/Header'

export default function About() {
    return (
        <div className='about_us'>
            <Header />
            <div className='about_header'>
                <p>Our main mission is to </p>
                <p className='neon'>democratize finance</p>
                <img className='globe' src='./about/abt.png'/>
            </div>
        </div>
    )
}
