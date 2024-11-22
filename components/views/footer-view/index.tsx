import React from 'react'
import FooterHeader from './footer-header'
import FooterContent from './footer-content'
import FooterFooter from './footer-footer'

const Footer = () => {
    return (
        <footer className='w-full bg-secondary text-secondary-foreground'>
            <FooterHeader />
            <FooterContent />
            <FooterFooter />
        </footer>
    )
}

export default Footer