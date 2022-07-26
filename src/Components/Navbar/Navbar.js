import React from 'react'
import './Navbar.css'
import Toogle from '../Toogle/Toogle'
import {Link} from 'react-scroll'


function Navbar() {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
        <div className='n-name '>MYPortfolio</div>
        <Toogle/>
        </div>

        <div className='n-right'>
        <div className='n-list'>
            <ul style={{listStyleType: 'none'}}>
                <Link spy={true} to='Navbar' 
               smooth={true} activeClass='activeClass'>
                <li>Home</li>
                </Link>

                 <Link spy={true} to="Services"
                smooth={true}>
                <li>Services</li>
                </Link>

                 <Link spy={true} to='Tools' 
                smooth={true}>
                <li>Tools</li>
                </Link>

                 <Link spy={true} to='Portfolio' 
                smooth={true}>
                <li>Portfolio</li>
                </Link>
            </ul>
        </div>

                <Link spy={true} to='Contact' 
                smooth={true}>
        <button className='button n-button'>Contact Me</button>
        </Link>
        </div>
    </div>
  )
}

export default Navbar
