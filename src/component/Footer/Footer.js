import React from 'react'
import './Footer.css'
import { SiFacebook , SiInstagram , SiLinkedin , SiGmail , SiWhatsapp} from "react-icons/si";



const Footer = () => {
  return (
    <div className='Footer'>
      <div className="container">
      <div className="icon-social">
           <span><a href="https://www.facebook.com/profile.php?id=100022834394019"><SiFacebook/></a></span>
           <span><a href="https://instagram.com/zrigou_99?igshid=OTJhZDVkZWE="><SiInstagram/></a></span>
           <span><a href="https://www.linkedin.com/in/mohamed-zrigou-83015925a/"><SiLinkedin/></a></span>
           <span><a href="zrigoudev@gmail.com"><SiGmail/></a></span>
           <span><a href="https://wh.ms/212767496526"><SiWhatsapp/></a></span>
        </div>
        <div className="copyright">
            All Right Resceved 2023
        </div>
      </div>  
        
    </div>
  )
}

export default Footer


