import { Button } from '@/components/atoms/button'
import Container from '@/components/atoms/container'
import OrbitingCircles from '@/components/atoms/orbiting-circles'
import { ArrowRightCircle, SendHorizontalIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { IoLogoJavascript, IoLogoNodejs, IoLogoFirebase } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiRedux } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";

const Hero = () => {
    return (
        <Container id="hero" className='pb-20'>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 py-10'>
                <div>
                    <p className='text-lg font-medium'>Hi 👋 I{"'"}m Kopal</p>
                    <h1 className='uppercase text-4xl font-extrabold'>Welcome to my personal website</h1>
                </div>
                <div className='space-y-2 flex items-start justify-end flex-col'>
                    <p>Discover my work and learn more about my professional services and qualifications</p>
                    <Button variant={'outline'} size={"lg"} className='gap-x-4 rounded-full'>
                        <ArrowRightCircle />
                        See my work
                    </Button>
                </div>
            </section>
            <section className='pt-6 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 relative'>
                <div>
                    <Image src={'/assets/kopal.jpg'} alt='hero' width={300} height={500} className='rounded-lg' />
                </div>
                <div className='backdrop-blur-[1px]'>
                    <h1 className='text-xl font-bold'>Let me introduce myself</h1>
                    <p>I am a 22 year old, Frontend Developer who is passionate about building web applications. I have a strong background in web development.</p>
                    <Button className='gap-x-4 mt-5' variant={"default"}>
                        Contact Me
                        <SendHorizontalIcon size={20} />
                    </Button>
                </div>
                <div className="relative flex h-[400px] w-max pl-10 sm:px-20 md:px-20 flex-col items-center justify-center overflow-hidden md:absolute md:bottom-0 md:-z-50 md:right-10">
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                        Skills
                    </span>
                    <OrbitingCircles
                        className="size-[30px] border-none bg-transparent"
                        duration={20}
                        delay={20}
                        radius={80}
                    >
                        <IoLogoJavascript size={30} />
                    </OrbitingCircles>
                    <OrbitingCircles
                        className="size-[30px] border-none bg-transparent"
                        duration={20}
                        delay={10}
                        radius={80}
                    >
                        <FaHtml5 size={30} />
                    </OrbitingCircles>
                    <OrbitingCircles
                        className="size-[50px] border-none bg-transparent"
                        radius={190}
                        duration={20}
                        reverse
                    >
                        <FaCss3Alt size={30} />
                    </OrbitingCircles>
                    <OrbitingCircles
                        className="size-[50px] border-none bg-transparent"
                        radius={190}
                        duration={20}
                        delay={20}
                        reverse
                    >
                        <RiTailwindCssFill size={30} />
                    </OrbitingCircles>
                    <OrbitingCircles
                        className="size-[30px] border-none bg-transparent"
                        duration={20}
                        delay={15}
                        radius={80}
                    >
                        <FaReact size={30} />
                    </OrbitingCircles>
                    <OrbitingCircles
                        className="size-[30px] border-none bg-transparent"
                        duration={20}
                        delay={25}
                        radius={80}
                    >
                        <RiNextjsFill size={30} />
                    </OrbitingCircles>
                    <OrbitingCircles
                        className="size-[50px] border-none bg-transparent"
                        radius={190}
                        duration={20}
                        delay={15}
                        reverse
                    >
                        <SiExpress size={30} />
                    </OrbitingCircles>
                    <OrbitingCircles
                        className="size-[50px] border-none bg-transparent"
                        radius={190}
                        duration={20}
                        delay={25}
                        reverse
                    >
                        <BiLogoMongodb size={30} />
                    </OrbitingCircles>
                    <OrbitingCircles
                        className="size-[50px] border-none bg-transparent"
                        radius={190}
                        duration={20}
                        delay={12.5}
                        reverse
                    >
                        <IoLogoNodejs size={30} />
                    </OrbitingCircles>
                    <OrbitingCircles
                        className="size-[50px] border-none bg-transparent"
                        radius={190}
                        duration={20}
                        delay={18}
                        reverse
                    >
                        <FaBootstrap size={30} />
                    </OrbitingCircles>
                    <OrbitingCircles
                        className="size-[50px] border-none bg-transparent"
                        radius={190}
                        duration={20}
                        delay={23}
                        reverse
                    >
                        <SiRedux size={30} />
                    </OrbitingCircles>
                    <OrbitingCircles
                        className="size-[50px] border-none bg-transparent"
                        radius={190}
                        duration={20}
                        delay={27.5}
                        reverse
                    >
                        <IoLogoFirebase size={30} />
                    </OrbitingCircles>
                </div>
            </section>
        </Container >
    )
}

export default Hero