import React, {useRef, useState}from 'react'
import './Contact.css'
import emailjs from "emailjs-com";
import {themeContext} from '../../Context'
import {useContext} from 'react'


const Contact = () => {
	const theme = useContext(themeContext)
  	const darkMode = theme.state.darkMode
	const form = useRef();
	const [done, setDone] = useState(false)


	const sendEmail = (e) => {
	  e.preventDefault();

	  emailjs.sendForm(
	      "service_p1tcdzv",
	      "template_j6m3r6o",
	      form.current,
	      "SVB6mNOxveAVt9fev"
	    )
	    .then(
	      (result) => {
	        console.log(result.text);
	        setDone(true);
	        form.current.reset();
	      },
	      (error) => {
	        console.log(error.text);
	      }
	    );
	};
	return(
		<div className="contact-form" id="Contact">
			<div className="w-left">
				<div className="awesome">
					<span style = {{color: darkMode? 'white': ''}}>Get in Touch</span>
					<span>Contact Me</span>
					<div
					className="blur s-blur1"
					style={{background: "#ABF1FF94"}}
					></div>
				</div>
			</div>


			<div className="c-right">
				<form ref={form} onSubmit={sendEmail}>
					<input type="text" name="user_name" className="user" placeholder="Name" />
					<input type="email" name="user_email" className="user" placeholder="Email" />
					<textarea name="message" className="user" placeholder="Message" />  
					<input type="submit" value="Send" className="button" />
					<span>{done && "Thanks for Contacting me, I Appreciate that 😀"}</span>

					<div className="blur c-blur1"
					style={{background: "var(--purple)"}}
					>
						
					</div>
				</form>
			</div>
		</div>
		)
}


export default Contact;