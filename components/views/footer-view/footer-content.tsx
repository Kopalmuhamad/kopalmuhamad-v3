import { Button } from '@/components/atoms/button'
import Container from '@/components/atoms/container'
import { ArrowRightCircleIcon } from 'lucide-react'
import React from 'react'
import DesktopNavigation from '../navbar-view/desktop-navigation'

const FooterContent = () => {
    return (
        <Container className='flex items-center justify-center flex-col py-6'>
            <h1 className='uppercase text-2xl font-semibold'>Have an Idea?</h1>
            <h1 className='uppercase text-4xl font-extrabold'>Lets Do It Together!</h1>
            <Button variant={'outline'} className='gap-x-4 mt-5 rounded-full mb-4'>
                <ArrowRightCircleIcon />
                Contact Us
            </Button>
            <DesktopNavigation />
        </Container>
    )
}

export default FooterContent