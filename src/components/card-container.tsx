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
    // const cardContainer = useRef<HTMLDivElement>(null)
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
                <div className="p-10 card-block flex items-center justify-between gap-8 bg-white h-[80vh] rounded-[45px] sticky top-10 -mb-[600px]">
                    {/* information */}
                    <div className="flex flex-col gap-8 items-start w-2/5">
                        <h1 className="text-7xl">{blog.title}</h1>
                        <div>
                            {blog.category.map(cate => <Badge variant={"secondary"} className="px-4 py-2 m-2 rounded-full bg-background hover:bg-foreground hover:text-background outline outline-gray-300 hover:outline-none transition-all duration-300">{cate}</Badge>)}
                        </div>
                        <p className="text-xl ">{blog.description}</p>
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

            <div className="flex items-center justify-center">
                <h1 className="text-7xl ">
                    Thank you very much for the show
                </h1>
            </div>
        </div>
    )
}

const webProjects: CardProp[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: ["React", "Next.js", "Stripe", "MongoDB", "Tailwind", "Authentication"],
        description: "A fully functional e-commerce website with user authentication, product management, and secure payments.",
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jzakjbq3eb093xmvf53dg747%2F1751629018_img_0.webp?st=2025-07-04T12%3A55%3A54Z&se=2025-07-10T13%3A55%3A54Z&sks=b&skt=2025-07-04T12%3A55%3A54Z&ske=2025-07-10T13%3A55%3A54Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=6LZ3cIXp2dKJH4y27%2FHa%2FivPvABdzTV%2BglZ2x1USQxY%3D&az=oaivgprodscus"
    },
    {
        id: 2,
        title: "Portfolio Website",
        category: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        description: "A clean and modern personal portfolio website to showcase skills and projects.",
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jzaksg6wfcct9w0rgdfvwtw3%2F1751629380_img_0.webp?st=2025-07-04T13%3A16%3A40Z&se=2025-07-10T14%3A16%3A40Z&sks=b&skt=2025-07-04T13%3A16%3A40Z&ske=2025-07-10T14%3A16%3A40Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=iqScBIWyFQc%2BdKrtbXpMazrZ2Wnm8M3V%2FLXG1ZK3Zlo%3D&az=oaivgprodscus"
    },
    {
        id: 3,
        title: "Blog Platform",
        category: ["Next.js", "MDX", "SEO", "Tailwind", "Content Management"],
        description: "A blog platform with SEO optimization, markdown support, and dynamic content management.",
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jz5e7phme6wvt20qfh6h6nek%2F1751455642_img_1.webp?st=2025-07-04T14%3A09%3A25Z&se=2025-07-10T15%3A09%3A25Z&sks=b&skt=2025-07-04T14%3A09%3A25Z&ske=2025-07-10T15%3A09%3A25Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=WwNwwF2MsZ%2FC8f9eviuH8s%2BlD99FRG7QCgk3o%2BJazeY%3D&az=oaivgprodscus"
    },
    {
        id: 4,
        title: "Real-time Chat App",
        category: ["React", "Socket.io", "Tailwind", "Node.js", "MongoDB"],
        description: "A real-time chat application with authentication, responsive design, and group chats.",
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jzawnpdzfxgtdaya7d7x61nf%2F1751638719_img_1.webp?st=2025-07-04T14%3A10%3A45Z&se=2025-07-10T15%3A10%3A45Z&sks=b&skt=2025-07-04T14%3A10%3A45Z&ske=2025-07-10T15%3A10%3A45Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=1jXKOIYOkIojY%2BWUj67FM3lcB6wxjCvVscruExvJ52A%3D&az=oaivgprodscus"
    }
];