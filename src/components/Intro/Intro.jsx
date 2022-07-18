import React from "react";
import './Intro.css';
import FloatingDiv from '../../components/FloatingDiv/FloatingDiv'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import {themeContext} from '../../context'
import { useContext } from 'react';
import {motion} from 'framer-motion';
const Intro = ()=>{
    const transition ={duration:2,type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color:darkMode?'white':''}}>Hey! I am</span>
                    <span>Akhilesh Rawat</span>
                    <span>Programmer, Web Developer, Curious Guy, Team First For Me Always</span>
                </div>
                <button className="button i-button">Hire Me</button>
                <div className="i-icons">
                    <a href="https://github.com/Akhileshrawat01" target="_blank">
                    <img src={Github}alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/akhilesh-rawat-anonymous/" target="_blank">
                    <img src={LinkedIn}alt="" />
                    </a>
                    <a href="https://www.instagram.com/akhileshrawat22/" target="_blank">
                    <img src={Instagram} alt="" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                initial={{left:'-36%'}}
                whileInView={{left:'-24%'}}
                transition={transition}
                 src={glassesimoji}/>
                <motion.div 
                initial={{top:'-4%',left:'74%'}}
                whileInView={{left:'68%'}}
                transition={transition}
                style={{top:'-4%',left:'68%'}}
                className="floating-div"
                >
                    <FloatingDiv image={thumbup} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div
                initial={{left:'9rem',top:'18rem'}}
                whileInView={{left:'1rem'}}
                transition={transition}
                 style={{top:'18rem', left:'1rem'}}
                 className="floating-div"
                 >
                    <FloatingDiv image={Crown} txt1='Programmer'/>
                </motion.div>
                <div className="blur" style={{background: "rgba(238 210 255)"}}>
                </div>
                <div className="blur" style={{background: '#C1F5FF', top:'17rem', width:'21rem',height:'11rem',left:'-9rem'}}></div>
                

            </div>
        </div>
    )
}
export default Intro;