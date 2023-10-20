import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Home from '../../img/home.png'
import HomeReact from '../../img/homeReact.png'
import Fullstack from '../../img/fullstack.png'
import ReactNew from '../../img/cjwedding.png'
import {themeContext} from '../../Context'
import {useContext} from 'react'



const Portfolio = () => {

	 const theme = useContext(themeContext)
 	 const darkMode = theme.state.darkMode
	return(
		<div className="portfolio" id='Portfolio'>
			<span style = {{color: darkMode? 'white': ''}}>Recent Projects</span>
			<span>Portfolio</span>

			<Swiper
			spaceBetween={30}
			slidesPerView={3}
			grabCursor={true}
			className="portfolio-slider"
			>
				<SwiperSlide className="home" style = {{color: darkMode? 'white': ''}}>
				
				Front-end using HTML, CSS, and Bootstrap
				
				  <img src={Home} className="home1" alt="home using HTML, CSS, Bootstrap" />
				  <br/>
				  <a href="https://deanrodel.github.io/ProjectPortfolio/" className="link">Click Here</a>
				</SwiperSlide>

				<SwiperSlide className="home" style = {{color: darkMode? 'white': ''}}>
				Front-end using ReactJS
				  <img src={HomeReact} className="home1" alt="Home using Reactjs" />
				  <br/>
				  <a href="https://portfoliofinal-lyart.vercel.app/" className="link">Click Here</a>
				</SwiperSlide>

				<SwiperSlide className="home" style = {{color: darkMode? 'white': ''}}>
				Fullstack Project
				  <img className="home1" src={Fullstack} alt="Fullstack project" />
				  <br/>
				  <a href="https://fullstack-capstone3-capstone3-final-seven.vercel.app/" className="link">Click Here</a>
				</SwiperSlide>

				<SwiperSlide className="home">
				Mobile responsive Wedding Invitation
				  <img src={ReactNew} className="home1" alt="Home page only" />
				  <br/>
				  <a href="https://charles-jienchien-wedding-invitation.netlify.app/?fbclid=IwAR3NqVg777DCuPydM89ZxpaK-v3mmAt1dmpqQDLqk3bCj7PLLpOhiEQnrh4" className="link">Click Here</a>
				</SwiperSlide>
			</Swiper>

		</div>

		)
}

export default Portfolio;