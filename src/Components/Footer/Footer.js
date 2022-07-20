import React from 'react'
import './Footer.css'
	import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
	import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
	import Github from '@iconscout/react-unicons/icons/uil-github'

import Wave from '../../img/wave.png'

const Footer = () => {
	return(
		<div className="footer">
			<img src={Wave} alt="" style={{width: '100%'}} />
			<div className="f-content">
				<span className='email'>deanzdeluxe@gmail.com
				<br />
				+63-9757694432</span>

				<div className="f-icons">
				 <a href="https://www.linkedin.com/in/dean-rodel-legada-12b325197">
					<LinkedIn color='white' size="3rem"/>
					</a>
					<a href="https://web.facebook.com/deanz.legada.9">
					<Facebook color='white' size="3rem"/>
					</a>
					<a href="https://github.com/DeanRodel">
					<Github color='white' size="3rem"/>
					</a>
				</div>
			</div>
		</div>

		)
}

export default Footer;