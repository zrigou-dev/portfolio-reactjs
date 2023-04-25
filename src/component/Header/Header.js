import React from 'react'
import './Header.css'
import {Typewriter} from 'react-simple-typewriter'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";


const Header = () => {

  return (
    <div className='Header' id='home'>
      <div>
       <h3>HELLO I'M</h3>
       <h1> <Typewriter
        words= {['MOHAMED ZRIGOU', 'DEVELOPER']}
        loop={true}
        cursor
        delaySpeed={1400}
        typeSpeed={170}
        deleteSpeed={90}
      /> </h1>
      <p>I am a freelance front-end web developer for the past two years. I specialize in creating visually appealing and user-friendly website interfaces.</p>
      </div>
      <div className='arrow'><MdKeyboardDoubleArrowDown/></div>
    </div>
  )
}

export default Header
