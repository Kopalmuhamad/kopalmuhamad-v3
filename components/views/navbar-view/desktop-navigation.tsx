import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/atoms/navigation-menu"
import Link from 'next/link'


const DesktopNavigation = () => {
    return (
        <NavigationMenu className='hidden md:flex'>
            <NavigationMenuList className='space-x-3'>
                <NavigationMenuItem>
                    <Link href={'#hero'} className={navigationMenuTriggerStyle()}>Home</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={'#about'} className={navigationMenuTriggerStyle()}>About</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={'#portfolio'} className={navigationMenuTriggerStyle()}>Portfolio</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href={'#contact'} className={navigationMenuTriggerStyle()}>Contact</Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    )
}

export default DesktopNavigation