import Link from "next/link"


import {FaGithub, FaYoutube, FaFacebook , FaLinkedinIn} from "react-icons/fa"

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/btlam02"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/lambui02"},
    {icon: <FaYoutube/>, path: "https://www.youtube.com/@labeos02"},
    {icon: <FaFacebook/>, path: "https://www.facebook.com/btlam02"},
]


const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return <Link key={index} href={item.path} className = {iconStyles}>{item.icon}</Link>
        })}

    </div>
  )
}

export default Socials
