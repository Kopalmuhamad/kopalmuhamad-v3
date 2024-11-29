import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/atoms/carousel'
import Container from '@/components/atoms/container'
import React from 'react'
import PortfolioCard from './portfolio-card'

const portfolios = [
    {
        id: 1,
        title: "Excelent Car",
        "tect-stack": ["React", "Tailwind", "Express", "MongoDB", "NodeJS"],
        description: "Excelent Car is an Web Application for car rental. Create use React JS, Tailwind CSS, Express JS, MongoDB and Node JS. I work as a Fullstack Developer for this project.",
        src: "https://res.cloudinary.com/dtw7lls9f/image/upload/v1732088835/cars/x5wjpywuxryejok5htmc.jpg",
        repoHref: "https://github.com/Kopalmuhamad/excelent-car-client",
        webHref: "https://excelent-car.vercel.app/"
    },
    {
        id: 2,
        title: "Movie List",
        "tect-stack": ["React", "Tailwind", "TMDB API"],
        description: "Movie List is an Web Application for movie. Create use React JS, Tailwind CSS and TMDB API. I work as a Frontend Developer for this project.",
        src: "https://res.cloudinary.com/dtw7lls9f/image/upload/v1732088723/cars/m5wbtqifsbf4ocstrnol.jpg",
        repoHref: "https://github.com/Kopalmuhamad/movie-list-kopal",
        webHref: "https://movie-list-kopal.vercel.app/"

    },
    {
        id: 3,
        title: "Petpal App",
        "tect-stack": ["React", "Tailwind", "Golang"],
        description: "Petpal App is an Web Application for pet. Create use React JS, Tailwind CSS, Create use ReactJS, Tailwind CSS, and my backend team use golang for create API. I work as a Frontend Developer for this project. Petpal app create for helping people take care their Pet with provides utilities and services for pets.",
        src: "https://res.cloudinary.com/dtw7lls9f/image/upload/v1732088735/cars/jwpj1jtq0bxqr7sihp0o.jpg",
        repoHref: "https://github.com/Kopalmuhamad/Petpal-App",
        webHref: "https://petpal-nu.vercel.app/"
    }

]

const Portfolio = () => {
    return (
        <Container id='portfolio' className='pb-20'>
            <header className='text-4xl font-extrabold uppercase border-b border-border'>
                Portfolio
            </header>
            <Carousel className='relative mt-4'>
                <CarouselContent>
                    {portfolios.map((portfolio) => (
                        <CarouselItem key={portfolio.id} className='md:basis-1/2 xl:basis-1/3'>
                            <PortfolioCard portfolio={portfolio} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='left-1' />
                <CarouselNext className='right-1' />
            </Carousel>
        </Container>
    )
}

export default Portfolio