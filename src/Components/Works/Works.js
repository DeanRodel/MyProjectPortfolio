import React from 'react'
import './Works.css'
import Html from "../../img/html.png";
import Css from "../../img/css.png";
import Node from "../../img/nodejs.png";
import Postman from "../../img/postman.png";
import Mongo from "../../img/mongodb.png";
import Express from "../../img/expressjs.png";
import Github from "../../img/github.png";
import Gitlab from "../../img/gitlab.png";
import Heroku from "../../img/heroku.png";
import Sublime from "../../img/sublime-text-3.png";
import Javascript from "../../img/javascript.png";
import Bootstrap from "../../img/bootstrap.png";
import Reacts from "../../img/logo-react.png";
import Rest from "../../img/logo-rest.png";
import Git from "../../img/git.png";
import {motion} from 'framer-motion'
import { Link } from "react-scroll";
import {themeContext} from '../../Context'
import {useContext} from 'react'


const Works = () => {

		 const theme = useContext(themeContext)
	  const darkMode = theme.state.darkMode
	return(
     <div className="works" id='Tools'>
     	<div className="awesome" >
     		<span style = {{color: darkMode? 'white': ''}}>Works for all these</span>
     		<span>Programming Tools</span>
     		<span> Git, HTML5, CSS, Bootstrap4, Javascript, MongoDB, Node.js, Express.js, Postman
            <br />
            Heroku, React.js, Github, Gitlab, Rest API, and SublimeText.</span>
     			
     			<Link smooth={true} spy={true} to="Contact">
     		<button className='button s-button'>Hire Me</button>
     		</Link>
     		
     		<div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
     	</div>
     	<div className="w-right">
     		<motion.div 
     		initial={{rotate: 70}}
     		whileInView={{rotate: 0}}
     		viewport={{margin: '-40px'}}
     		transition={{duration: 4.5, type: 'spring'}}

     		className="w-mainCircle">
     			<div className="w-secCircle">
            <img src={Javascript} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Bootstrap} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Reacts} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Rest} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Express} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Css} alt="" />
          </div>
           <div className="w-secCircle">
            <img src={Html} alt="" />
          </div>
            <div className="w-secCircle">
            <img src={Node} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Postman} alt="" />
          </div>
             <div className="w-secCircle">
            <img src={Mongo} alt="" />
          </div>
           <div className="w-secCircle">
            <img src={Git} alt="" />
          </div>
            <div className="w-secCircle">
            <img src={Github} alt="" />
          </div>
           <div className="w-secCircle">
            <img src={Gitlab} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Heroku} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Sublime} alt="" />
          </div>
     		</motion.div>
     		<div className="w-backCircle blueCircle"></div>
     		<div className="w-backCircle yellowCircle"></div>
     	</div>

     </div>


		)
}

export default Works;