import {React, useEffect, useState} from 'react'
import './Contact.css'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

const Contact = () => {
    const [nom, setNom]=useState()
    const [mail, setMail]=useState()
    const [subject, setSubject]=useState()
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
    <div className='Contact' ref={ref} id='contact'>
        <motion.div className="container" animate={animation}>
            <h3>Contact Us</h3>
            <div className="row">
                <div className="col-md-12">
                    <form className="m-auto">
                        <input type="text" placeholder='Nom' value={nom} onChange={(e)=> setNom(e.target.value)}/>
                        <br/>
                        <input type="email" placeholder='Email'  value={mail} onChange={(e)=> setMail(e.target.value)}/>
                        <br/>
                        <textarea value={subject} onChange={(e)=> setSubject(e.target.value)}/>
                        <br/>
                        <button type='submit'><a href='mailto:zrigoudev@gmail.com?subject="hello world"&body="hi mohamed"'>Submit</a></button>
                    </form>
                </div>
            </div>
        </motion.div>
      
    </div>
  )
}

export default Contact
