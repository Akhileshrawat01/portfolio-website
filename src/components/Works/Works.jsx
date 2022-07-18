import React from 'react';
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from '../../img/amazon.png';
import Facebook from '../../img/Facebook.png';
import Shopify from '../../img/Shopify.png';
import {themeContext} from '../../context'
import { useContext } from 'react';
import { motion } from "framer-motion";
const Works = () => {
    const theme = useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return (
        <div className="works">
            <div className="awesome">
                <span style={{color: darkMode?'white':''}}>Worked for all these</span>
                <span>Brands & clients</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nulla.
                <br/>
                lorem ipsum dolor sit amet consectetur
                <br/>
                lorem ipsum dolor sit amet
                </span>
                <button className="button s-button">Hire Me</button>
                <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="w-right">
                <motion.div
                 initial={{ rotate: 45 }}
                 whileInView={{ rotate: 0 }}
                 viewport={{ margin: "-40px" }}
                 transition={{ duration: 3.5, type: "spring" }}
                 className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork}/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr}/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon}/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify}/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook}/>
                    </div>
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}
export default Works;