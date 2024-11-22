'use client'
import Container from "@/components/atoms/container"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/atoms/form"
import { Input } from "@/components/atoms/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Textarea } from "@/components/atoms/textarea"
import { Button } from "@/components/atoms/button"
import { Send, SendHorizontalIcon } from "lucide-react"
import { LinkPreview } from "@/components/atoms/link-preview"
import { FaGithub, FaInstagramSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useState } from "react"
import axios, { AxiosError } from "axios"
import toast from "react-hot-toast"

const mediaSocial = [
    {
        id: 1,
        label: 'Github',
        href: 'https://github.com/Kopalmuhamad',
        icon: FaGithub
    },

    {
        id: 2,
        label: 'Linkedin',
        href: 'https://linkedin.com/in/muhamad-kopal',
        icon: FaLinkedin
    },

    {
        id: 3,
        label: 'Instagram',
        href: 'https://www.instagram.com/kopallmuhamad/',
        icon: FaInstagramSquare
    },

    {
        id: 4,
        label: 'Whatsapp',
        href: "https://wa.me/62895620140500",
        icon: FaWhatsapp
    }
]

const formSchema = z.object({
    email: z.string().email(),
    message: z.string().min(6),
})

const Contact = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            email: '',
            message: '',
        },
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setLoading(true);
        try {
            await axios.post("https://formspree.io/f/mkgwwpny", {
                email: data.email,
                message: data.message,
            });
            toast.success("Message sent successfully!");
            form.reset();
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                console.error(error.response.data);
            } else {
                console.error(error);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container id="contact" className="pb-20">
            <header className='text-4xl font-extrabold uppercase border-b border-border'>
                Contact
            </header>
            <section className="mt-4 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8">
                <ul className="pt-0 md:pt-5 space-y-2">
                    {mediaSocial.map((media) => (
                        <li key={media.id}>
                            <LinkPreview url={media.href} className="flex items-center justify-start md:justify-between gap-x-4">
                                <span><media.icon size="30" /></span>
                                <span className="text-base font-bold">{media.label}</span>
                            </LinkPreview>
                        </li>
                    ))}
                </ul>
                <div className="bg-secondary py-4 px-2 rounded-md space-y-4">
                    <header className="text-xl font-bold text-primary">
                        <h1 className="drop-shadow-xl">Get in touch with me</h1>
                    </header>
                    <Form {...form}>
                        <form action="https://formspree.io/f/movqlzvl" method="POST" onSubmit={form.handleSubmit(onSubmit)} >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="johndoe@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem className="mt-2">
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Write your message..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="mt-4">
                                Send {loading ? <Send /> : <SendHorizontalIcon />}
                            </Button>
                        </form>
                    </Form>
                </div>
            </section>
        </Container >
    )
}

export default Contact