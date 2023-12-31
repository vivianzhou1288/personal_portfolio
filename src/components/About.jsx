import React from 'react'
import { forwardRef } from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';
 

const About = () => {
  return (
    <div id = "about">
      <motion.div variants = {textVariant()}>
        <p className = {`${styles.sectionSubText} mt-20`}>Introduction</p>
        <h2 className = {styles.sectionHeadText}>About Me.</h2>
      </motion.div>
      <motion.p variants = {fadeIn("", "", 0.1, 1)} className = "mt-4 text-[#D3D3D3] text-[17px] max-w-3xl leading-[30px]">
        I am a sophomore majoring in Computer Science and minoring in Information Science at Cornell Engineering. I have experience in Python, Java, Swift, JavaScript, and ReactJS. I have basic knowledge in Vue.js, Node.js, and TypeScript. 
      </motion.p>
    </div>
  )
}

export default SectionWrapper(About, "about")