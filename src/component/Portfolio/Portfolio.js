import {React, useEffect} from 'react'
import './Portfolio.css'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import iptv from '../../assets/iptv.png'
import filterr from '../../assets/filter.png'
import porfolio from '../../assets/portfolio.png'
import weather from '../../assets/weather.png'
import store from '../../assets/store.png'
import todo from '../../assets/todoApp.png'


const Portfolio = () => {
  const {ref , inView}= useInView({
    threshold:0.2
});
const animation = useAnimation()
useEffect(()=>{
if(inView){
    animation.start({
      transform: 'rotateY(0deg)',
      opacity:1,
        transition:{
             duration:0.5 , bounce:0.1
        }
    })
}
if(!inView){
    animation.start({
      transform: 'rotateY(90deg)',
    })
}
},[inView])



  return (
    <div className='Portfolio' ref={ref} id='portfolio'>
      <div className="container">
        <motion.h3 animate={animation}>My Portfolio</motion.h3>
        <div className="row">
            <motion.div className="col-md-4" animate={animation}>
                <a href="https://iptvforme.store/"> <img src={iptv} alt="iptv" /> </a>
            </motion.div>
            <motion.div className="col-md-4" animate={animation}>
            <a href="http://beautyfilterr.eb2a.com/"> <img src={filterr} alt="filter" /></a>
            </motion.div>
            <motion.div className="col-md-4" animate={animation}>
            <a href="#home"> <img src={porfolio} alt="porfolio" /></a>
            </motion.div>
            <motion.div className="col-md-4" animate={animation}>
            <a href="https://64381cb847ecc70af0ebf321--superlative-narwhal-a09fb8.netlify.app/"> <img src={weather} alt="weather" /> </a>
            </motion.div>
            <motion.div className="col-md-4" animate={animation}>
            <a href="http://ecommerceonline.eb2a.com/"> <img src={store} alt="store" /></a>
            </motion.div>
            <motion.div className="col-md-4" animate={animation}>
            <a href="https://64382c59a5b6a51a4b4318ae--wonderful-klepon-b849b3.netlify.app/"> <img src={todo} alt="todo" /> </a>
            </motion.div>
            
        </div>
      </div>
    </div>
  )
}

export default Portfolio
