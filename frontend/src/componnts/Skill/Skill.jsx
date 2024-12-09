import React from 'react'
import './Skill.css'
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'


const Skill = () => {
    return (
        <div className='skill' id='skill'>

            <h1>Technologies</h1>

            <div className='skill-icons'> 
                <div className='icons'>
                    <SiHtml5 />
                </div>

                <div className='icons'>
                    <SiCss3 />
                </div>

                <div className='icons'>
                <BiLogoJavascript />
                </div>

                <div className='icons'>
                    <RiReactjsLine />
                </div>


                <div className='icons'>
                    <FaNodeJs />
                </div>

                <div className='icons'>
                    <SiMongodb />
                </div>
            </div>

        </div>

    )
}

export default Skill
