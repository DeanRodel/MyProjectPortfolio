import React from 'react'
import './FloatingNav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {GrServices} from 'react-icons/gr'
import {FaTools} from 'react-icons/fa'
import {GoProject} from 'react-icons/go'
import {AiFillContacts} from 'react-icons/ai'
import {Nav} from 'react-bootstrap'

const Navbar = () => {
	return(
		<Nav>
			<a href="active"><AiOutlineHome /></a>
			<a href="#services"><GrServices /></a>
			<a href="#Tools"><FaTools /></a>
			<a href="#Portfolio"><GoProject /></a>
			<a href="#contact"><AiFillContacts /></a>
		</Nav>
		)
}
export default Navbar ;