import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './MyResume.pdf'
import {motion} from 'framer-motion'
import {themeContext} from '../../Context'
import {useContext} from 'react'

const Services = () => {

	const theme = useContext(themeContext)
  	const darkMode = theme.state.darkMode
	const transition = {duration: 2, type: 'spring'}
	return(
		<div className="services" id='Services'>
			<div className="awesome">
				<span style = {{color: darkMode? 'white': ''}}>My Awesome</span>
				<span>Services</span>
				<span>
				        Just like what developer said, being a Web Developer and develop 
				     
				          <br />
				         highly competitive works, makes me become more productive and 
				         <br />it enhace my skills to get this kind of knowledge I want.
				        </span>
					<a href={Resume} download>
				<button className='button s-button'>Download CV</button>
				</a>
				<div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
			</div>

			<div className='cards'>
				<motion.div 
				initial={{ left: "25rem"}}
				whileInView={{ left: "20rem" }}
				transition={transition}
				>
					<Card
            emoji={HeartEmoji}
            heading={"Front-End Developer"}
            detail={"Git, HTML5, CSS, Bootstrap4"}
            button="https://share.zertify.zuitt.co/certificate/e792e78c-c726-4bd2-aa9d-e90617d4a4f2"
          />
				</motion.div>

				<motion.div 
				initial={{ left: "-11rem", top: "12rem" }}
				whileInView={{ left: "2rem" }}
				transition={transition}
				>
					<Card
            emoji={Glasses}
            heading={"Back-End Developer"}
            detail={"JavaScript, MongoDB, Node.js, Postman, Express.js, and Heroku"}
            button="https://share.zertify.zuitt.co/certificate/8c2a407b-c535-496a-aadd-9ce8eaef729f"
          />
				</motion.div>

				<motion.div
				initial={{ top: "19rem", left: "25rem" }}
				whileInView={{ left: "18rem" }}
				transition={transition}
				><Card
            emoji={Humble}
            heading={"FullStack Developer"}
            detail={
              "MERN stack (MongoDB, Express.js, React.js, Node.js) with Heroku"
            }
            button="https://share.zertify.zuitt.co/certificate/4814fb2a-51f7-408d-b796-44082fcdfe35"
            color="rgba(252, 166, 31, 0.45)"
          />
				</motion.div>
				<div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
			</div>
		</div>


		)
}

export default Services;