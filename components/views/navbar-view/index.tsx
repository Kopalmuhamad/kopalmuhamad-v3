import Container from '@/components/atoms/container'
import Logo from '@/components/atoms/logo'
import React from 'react'
import DesktopNavigation from './desktop-navigation'
import MobileNavigation from './mobile-navigation'

const NavbarView = () => {
    return (
        <nav className='w-full bg-background fixed top-0 left-0 right-0 z-50 shadow-xl'>
            <Container className='w-full py-3 flex items-center justify-between'>
                <Logo />
                <DesktopNavigation />
                <MobileNavigation />
            </Container>
        </nav>
    )
}

export default NavbarView