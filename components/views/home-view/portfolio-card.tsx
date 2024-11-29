import { buttonVariants } from '@/components/atoms/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/atoms/card'
import { LinkPreview } from '@/components/atoms/link-preview'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import React from 'react'

interface IPortfolio {
    id: number,
    title: string,
    "tect-stack": string[],
    description: string,
    src: string,
    repoHref: string,
    webHref: string
}

interface IProps {
    portfolio: IPortfolio
}

const PortfolioCard = ({ portfolio }: IProps) => {
    return (
        <Card className='cursor-pointer'>
            <CardHeader>
                <Image src={portfolio.src} alt={portfolio.title} width={300} height={500} className='aspect-video object-cover w-full' />
            </CardHeader>
            <CardContent>
                <h1 className='text-2xl font-bold' >{portfolio.title}</h1>
                <p className='mt-2 flex flex-wrap line-clamp-2'>
                    <span className='text-base font-bold'>
                        Tech stack :
                    </span>
                    {portfolio['tect-stack'].map((stack, index) => (
                        <span key={index} className='ml-2'>
                            {stack}
                        </span>
                    ))}
                </p>
                <p className='mt-2 line-clamp-4'>
                    <span className='text-base font-bold'>
                        Description : {" "}
                    </span>
                    {portfolio.description}
                </p>
            </CardContent>
            <CardFooter className='space-x-4'>
                <LinkPreview url={portfolio.repoHref} className={cn(buttonVariants(), "flex items-center justify-start md:justify-between gap-x-4")}>
                    View Repo
                </LinkPreview>
                <LinkPreview url={portfolio.webHref} className={cn(buttonVariants({ variant: "secondary" }), "flex items-center justify-start md:justify-between gap-x-4")}>
                    View Web
                </LinkPreview>
            </CardFooter>
        </Card>
    )
}

export default PortfolioCard