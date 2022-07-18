import React from 'react';
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Akhilesh Rawat</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyle: 'None'}}>
                        <Link spy={true} to='Navbar' activeClass="activeClass">
                        <li>Home</li>  
                        </Link>
                        <Link spy={true} to='Services' >
                        <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' >
                        <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' >
                        <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonials' >
                        <li>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <button className="button n-button">Contact</button>
            </div>
        </div>
    )
}

export default Navbar;
