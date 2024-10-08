"use client"; 

import Link from "next/link"; 
import { usePathname } from "next/navigation";


const links = [
    {
        name:"home",
        path:'/',

    },

    {
        name:"About me",
        path:'/aboutme',

    },    
    {
        name:"Project",
        path:'/project',

    },
    {
        name:"Contact",
        path:'/contact',

    },
];



const Nav = () =>{
    const pathName = usePathname() 
    return(
        <nav className="flex gap-10">
            {links.map((link, index) =>{
                return <Link href={link.path} key={index} className={`${link.path === pathName &&
                    "text-accent border-b-2 border-accent" 
                } capitalize font-bold hover:text-accent transition-all`}>
                    {link.name}</Link>
            })
            }
        </nav>
    )
};



export default Nav

