import Container from '@/components/atoms/container';
import Logo from '@/components/atoms/logo'
import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa6"
import { LinkPreview } from '@/components/atoms/link-preview';

const FooterHeader = () => {
    return (
        <header className='py-5'>
            <Container className='flex items-center justify-between'>
                <Logo />
                <div className='flex items-center justify-end gap-x-4'>
                    <LinkPreview url={"https://www.instagram.com/kopallmuhamad/"} className="flex items-center justify-start md:justify-between gap-x-4">
                        <RiInstagramFill size={30} />
                    </LinkPreview>
                    <LinkPreview url={"https://wa.me/62895620140500"} className="flex items-center justify-start md:justify-between gap-x-4">
                        <FaSquareWhatsapp size={30} />
                    </LinkPreview>
                    <LinkPreview url={"https://linkedin.com/in/muhamad-kopal"} className="flex items-center justify-start md:justify-between gap-x-4">
                        <FaLinkedin size={30} />
                    </LinkPreview>
                    <LinkPreview url={"https://github.com/Kopalmuhamad"} className="flex items-center justify-start md:justify-between gap-x-4">
                        <FaGithub size={30} />
                    </LinkPreview>
                </div>
            </Container>
        </header>
    )
}

export default FooterHeader