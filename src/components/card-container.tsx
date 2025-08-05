import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import MagneticButton from "./ui/megnatic-button";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsMobile from "./isMobile";

gsap.registerPlugin(ScrollTrigger)

type CardProp = {
    id: number;
    title: string;
    category: string[];
    description: string;
    image: string;
};

export default function CardContainer() {
    const container = useRef<HTMLDivElement>(null)
    const isMobile = useIsMobile()
    useGSAP(()=> {

        gsap.utils.toArray<HTMLElement>(".card-block").forEach((card)=> {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: isMobile ? "top 5%" : "top 10%",
                    end: "+=80%",
                    pin: true,
                    scrub: true,
                },
                scale: 0.8,
                opacity: 0,
                background: "#f1f1f1",
            })
        })

    }, [])
    return (
        <div ref={container} className='py-10 h-[450vh] container mx-auto relative'>

            {webProjects.map(blog => (
                <div key={blog.id} className="lg:p-10 p-3 card-block flex lg:items-center items-start justify-between gap-8 bg-white lg:h-[80vh] h-auto rounded-3xl lg:rounded-[45px] lg:flex-row flex-col-reverse sticky top-10 -mb-[400px]">
                    {/* information */}
                    <div className="flex flex-col lg:gap-8 gap-2 items-start w-full lg:w-2/5">
                        <h1 className="lg:text-7xl text-xl font-medium">{blog.title}</h1>
                        <div className="flex flex-wrap items-center justify-start">
                            {blog.category.map((cate,idx) => <Badge key={idx} variant={"secondary"} className="lg:px-4 lg:py-2 m-2 rounded-full bg-background hover:bg-foreground hover:text-background outline outline-gray-300 hover:outline-none transition-all duration-300">{cate}</Badge>)}
                        </div>
                        <p className="lg:text-xl text-muted-foreground text-sm">{blog.description}</p>
                        <MagneticButton distance={0.6}>
                            <Button className="border-2 border-slate-800 rounded-full" variant={"ghost"}>Find out more <ArrowRight /> </Button>
                        </MagneticButton>
                    </div>

                    {/* image */}
                    <div className=" h-full w-full lg:w-3/5">
                        <img src={`${blog.image}`} alt="image" className="w-full h-full object-cover lg:rounded-tr-[200px] rounded-2xl " />
                    </div>
                </div>
            ))}

        </div>
    )
}

const webProjects: CardProp[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: ["React", "Next.js", "Stripe", "MongoDB", "Tailwind", "Authentication"],
        description: "A fully functional e-commerce website with user authentication, product management, and secure payments.",
        image: "/MainAfter.avif"
    },
    {
        id: 2,
        title: "Portfolio Website",
        category: ["React", "Next.js", "TypeScript", "Tailwind", "Animation"],
        description: "A clean and modern personal portfolio website to showcase skills and projects.",
        image: "/MainAfter.avif"
    },
    {
        id: 3,
        title: "Blog Platform",
        category: ["Next.js", "MDX", "SEO", "Tailwind", "Content Management"],
        description: "A blog platform with SEO optimization, markdown support, and dynamic content management.",
        image: "/MainAfter.avif"
    },
    {
        id: 4,
        title: "Real-time Chat App",
        category: ["React", "Socket.io", "Tailwind", "Node.js", "MongoDB"],
        description: "A real-time chat application with authentication, responsive design, and group chats.",
        image: "/MainAfter.avif"
    }
];