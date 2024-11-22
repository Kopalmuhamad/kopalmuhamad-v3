import Container from '@/components/atoms/container';
import Logo from '@/components/atoms/logo'
import Link from 'next/link'
import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa6"

const FooterHeader = () => {
    return (
        <header className='py-5'>
            <Container className='flex items-center justify-between'>
                <Logo />
                <div className='flex items-center justify-end gap-x-4'>
                    <Link href="/">
                        <RiInstagramFill size={30} />
                    </Link>
                    <Link href="/">
                        <FaSquareWhatsapp size={30} />
                    </Link>
                    <Link href="/">
                        <FaLinkedin size={30} />
                    </Link>
                    <Link href="/">
                        <FaGithub size={30} />
                    </Link>
                </div>
            </Container>
        </header>
    )
}

export default FooterHeader