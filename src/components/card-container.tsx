import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import MagneticButton from "./ui/megnatic-button";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    useGSAP(()=> {

        gsap.utils.toArray<HTMLElement>(".card-block").forEach((card)=> {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 10%",
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
                <div className="p-10 card-block flex items-center justify-between gap-8 bg-white h-[80vh] rounded-[45px] sticky top-10 -mb-[500px]">
                    {/* information */}
                    <div className="flex flex-col lg:gap-8 gap-2 items-start w-2/5">
                        <h1 className="lg:text-7xl text-2xl font-medium">{blog.title}</h1>
                        <div>
                            {blog.category.map(cate => <Badge variant={"secondary"} className="px-4 py-2 m-2 rounded-full bg-background hover:bg-foreground hover:text-background outline outline-gray-300 hover:outline-none transition-all duration-300">{cate}</Badge>)}
                        </div>
                        <p className="lg:text-xl text-muted-foreground text-sm">{blog.description}</p>
                        <MagneticButton distance={0.6}>
                            <Button className="border-2 border-slate-800 rounded-full" variant={"ghost"}>Find out more <ArrowRight /> </Button>
                        </MagneticButton>
                    </div>

                    {/* image */}
                    <div className=" h-full w-3/5">
                        <img src={`${blog.image}`} alt="image" className="w-full h-full object-cover rounded-tr-[200px]" />
                    </div>
                </div>
            ))}

            {/* <div className="flex items-center justify-center">
                <h1 className="text-7xl ">
                    Thank you very much for the show
                </h1>
            </div> */}
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
        category: ["React", "Next.js", "TypeScript", "", "Tailwind", "Authentication"],
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