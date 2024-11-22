import React from 'react'
import Hero from './hero'
import About from './about'
import Portfolio from './portfolio'
import Contact from './contact'

const HomeView = () => {
    return (
        <div className='w-full pt-20 overflow-x-hidden'>
            <Hero />
            <About />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default HomeView