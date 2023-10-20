import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from "../../img/linkedin.png";
import Facebook from '../../img/facebook.jpg'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/MyProfile.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import {motion} from 'framer-motion'
import {themeContext} from '../../Context'
import {useContext} from 'react'
import { Link } from "react-scroll";
import Typical from 'react-typical'

function Intro() {

  const transition = {duration: 2, type: 'spring'}

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='intro'>
    <div className='i-left'>
    <div className='i-name'>
    <span style = {{color: darkMode? 'white': ''}}>HI! I Am</span>
    <span>Dean Rodel Legada</span>
    <Typical
    loop={Infinity}
    className='typical'
    steps={[
      "Front-End Developer 😁",
      3000,
      "Back-End Developer 🙂",
      3000,
      "MERN Stack Developer 😊",
      3000,
      "FullStack Developer 😄",
      3000,
      "React(Front-end) Developer 🥰",
      3000,
      ]}

    />
    <span>I'm a Full Stack Web Developer Focusing on Frontend development with good analytical skills and webpages Responsive designing. I have experience in developing ecommerce website using MERN tech stack (MongoDB, Express.js, React.js, Node.js). I also engaged in several tools, languages, and frameworks such as: HTML, CSS, JavaScript, Bootstrap, Git bash, GitHub, Gitlab, Heroku, Postman, and Sublime Text.</span>
        </div> 
    <Link smooth={true} spy={true} to="Contact">
    <button className='button i-button' >
    Hire Me!</button>
    </Link>
    <div className='i-icons'>
          <a href="https://github.com/DeanRodel">
          <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/dean-rodel-legada-12b325197/">
          <img src={LinkedIn} alt="" /></a>
          <a href="https://web.facebook.com/deanz.legada.9">
          <img src={Facebook} alt="" />
          </a>
    </div>
    </div>  
    <div className='i-right'>
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img 
        initial={{left: '-36%'}}
        whileInView={{left: '-24%'}}
        transition={transition}

        src={Glassesimoji} alt="" />

        <motion.div 
        initial={{ top: "-4%", left: "30%" }}
        whileInView={{ left: "70%" }}
        transition={transition}
        style = {{color: darkMode? 'black': ''}}
        className='floating-div'
        >
          <FloatingDiv image={Crown} txt1="ReactJS" txt2="Developer" />
        </motion.div>


        <motion.div 
        initial={{ left: "9rem", top: "18rem" }}
        whileInView={{ left: "2rem" }}
        transition={transition}
        className='floating-div'
        style = {{color: darkMode? 'black': ''}}
        >
          <FloatingDiv image={Thumbup} txt1="FullStack" txt2="Developer" />
        </motion.div>
        <div className="blur" style={{background: "rgb(238 210 225"}}></div>
        <div className="blur" style={{background: '#C1F5FF',
          top: '17rem',
          width: '21rem',
          height: '11rem',
          left: '-9rem'
      }}></div>
    </div>  
    </div>
  )
}

export default Intro
