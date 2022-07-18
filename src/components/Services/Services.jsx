import React from 'react';
import './Services.css';
import Card from "../Card/Card";
import HeartEmoji from '../../img/heartemoji.png';
import Humble from '../../img/humble.png';
import Glasses from '../../img/glasses.png'
import Resume from './Akhileshrawatresume.pdf'
import {themeContext} from '../../context'
import { useContext } from 'react';
import {motion} from 'framer-motion';
const Services = () => {
    const transition={duration:1,type: 'spring'};
    const theme = useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return (
        <div className="services" id="Services">
            <div className="awesome">
                <span style={{color:darkMode?'white':''}}>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nulla.</span>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="cards">
                <motion.div 
                initial={{left:'25rem'}}
                whileInView={{left:'14rem'}}
                transition={transition}
                style={{ left: '14rem' }}>
                    <Card emoji={HeartEmoji}
                        heading={'Programmer'}
                        detail={"C++,C,Java,Python"} />
                </motion.div>
                <motion.div
                initial={{ left: "-11rem", top: "12rem" }}
                whileInView={{ left: "-4rem" }}
                transition={transition}
                 style={{ top: "12rem", left: '-4rem' }}>
                    <Card emoji={Glasses}
                        heading={'Developer'}
                        detail={"HTML,CSS,JavaScript,React"} />
                </motion.div>
                <motion.div
                 initial={{ top: "19rem", left: "25rem" }}
                 whileInView={{ left: "12rem" }}
                 transition={transition}
                 style={{ top: "19rem", left: '12rem' }}>
                    <Card emoji={Humble}
                        heading={'Cloud Computing'}
                        detail={"Google Cloud Platform, Amazon Web Services"} />
                </motion.div>
                <div
                    className="blur s-blur2"
                    style={{ background: "var(--purple)" }}
                ></div>
            </div>

        </div>
    )
}
export default Services;