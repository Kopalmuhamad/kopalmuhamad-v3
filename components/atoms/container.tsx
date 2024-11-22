import { cn } from '@/utils/cn'
import React from 'react'

interface IProps {
    children: React.ReactNode
    className?: string
    id?: string
}

const Container = ({ children, className, id }: IProps) => {
    return (
        <div id={id} className={cn(className, 'max-[640px]:container mx-auto px-2 sm:px-0 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl')}>{children}</div>
    )
}

export default Container