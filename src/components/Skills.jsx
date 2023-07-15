import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { technologies } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const TechnologyCard = ({ index, name, icon}) => {
  return (
    <Tilt className = "xs:w-[250px] w-full">
      <motion.div variants = {fadeIn("right", "spring", 0.5 * index, 0.75)} className = "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options = {{
          max: 45,
          scale: 1,
          speed: 450
        }} className = "bg-[#02064a] rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col">
          <img src = {icon} alt = {name} className = "w-16 h-16 object-contain" />
          <h3 className = "text-white text-[20px] font-bold text-center">{name}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const Skills = () => {
  return (
    <div id = "skills">
      <p className = {`${styles.sectionSubText} mt-20`}>What I can do</p>
        <h2 className = {styles.sectionHeadText}>Skills.</h2>
      <div className = "mt-5 flex flex-wrap gap-10">
        {technologies.map((technology, index) => (
          <TechnologyCard key = {technology.name} index = {index} {...technology} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Skills, "skills")