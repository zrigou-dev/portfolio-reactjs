import {React , useEffect} from 'react'
import './Skils.css'
import { SiHtml5 , SiCss3 ,SiJavascript , SiReact , SiGit ,SiBootstrap} from "react-icons/si";
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'


const Skils = () => {
  const {ref , inView}= useInView({
    threshold:0.2
});
const animation = useAnimation()
useEffect(()=>{
if(inView){
    animation.start({
        x:0 ,
        opacity:1,
        transition:{
            type: 'spring' , duration:2 , bounce:0.1
        }
    })
}
if(!inView){
    animation.start({
        x:'-100vw',
        opacity:0 ,
    })
}
},[inView])
  return (
    <div className='Skils' ref={ref} id='skils'>
      <motion.div className="container" 
      animate={animation}
      >
        <h3>My Skils</h3>
         <div className="html"><SiHtml5  className='icon'/> <div><span>90%</span></div></div>
         <div className="css"><SiCss3  className='icon'/> <div><span>80%</span></div></div>
         <div className="js"><SiJavascript  className='icon'/> <div><span>85%</span></div></div>
         <div className="react"><SiReact  className='icon'/> <div><span>90%</span></div></div>
         <div className="git"><SiGit  className='icon'/> <div><span>80%</span></div></div>
         <div className="bootstrap"><SiBootstrap  className='icon'/> <div><span>95%</span></div></div>
      </motion.div>
    </div>
  )
}

export default Skils

