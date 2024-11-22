import Container from '@/components/atoms/container'
import React from 'react'

const About = () => {
    return (
        <Container className='pb-20'>
            <header className='text-4xl font-extrabold uppercase border-b border-border'>
                About
            </header>
            <section className='mt-4'>
                <p>
                    Hello! My name is Muhamad Kopal Aljamili, a 22-year-old web developer based in Bogor, Indonesia. I am a proud graduate of Alterra Academy, where I honed my skills in modern web development.
                </p>
                <br />
                <p>
                    I specialize in HTML, CSS, and JavaScript, and I have experience working with modern frameworks and libraries such as React, Next.js, Vue.js, as well as design tools like Tailwind CSS and Bootstrap. Additionally, I am proficient in state management using React Redux and handling API requests with Axios.
                </p>
                <br />
                <p>
                    Outside of coding, I enjoy playing soccer and futsal, watching movies, and hiking mountains to embrace the beauty of nature.
                </p>
                <br />
                <p>
                    I believe web development is a blend of creativity and technology, and I strive to deliver innovative and efficient solutions in every project I take on.
                </p>
            </section>
        </Container >
    )
}

export default About