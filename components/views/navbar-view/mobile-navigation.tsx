import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/atoms/sheet"
import { Button } from '@/components/atoms/button'
import { MenuIcon } from 'lucide-react'
import {
    Accordion,
    AccordionItem,
    accordionTriggerStyle,
} from "@/components/atoms/accordion"
import Logo from '@/components/atoms/logo'
import Link from 'next/link'


const MobileNavigation = () => {
    return (
        <Sheet>
            <SheetTrigger className='md:hidden' asChild>
                <Button variant={"outline"} rounded={"default"} size={"icon"}>
                    <MenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle><Logo /></SheetTitle>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <Link className={accordionTriggerStyle} href="/">
                                Home
                            </Link>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <Link className={accordionTriggerStyle} href="/about">
                                About
                            </Link>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <Link className={accordionTriggerStyle} href="/portfolio">
                                Portfolio
                            </Link>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <Link className={accordionTriggerStyle} href="/contact">
                                Contact
                            </Link>
                        </AccordionItem>
                    </Accordion>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default MobileNavigation