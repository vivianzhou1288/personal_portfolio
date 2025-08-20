import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn ,textVariant} from '../utils/motion'

const ProjectCard = ({index, name, description, tags, image, link, source_code_link}) => {
  return(
    <motion.div variants = {fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt 
        options = {{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className = "bg-[#02064a] p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className = "mt-2 mb-3 text-center">
            <h3 className = "text-white font-bold text-[24px]">{name}</h3>
          </div>
          <div className = "relative w-full h-[230px]">
            <img 
            src = {image}
            alt = {name}
            className = "w-full h-full object-cover rounded-2xl" />

          {/* Live Demo Link Button */}
          {link ? (
            <div className = "absolute inset-0 flex justify-start m-3">
              <div 
                onClick = {(e) => {
                  e.stopPropagation();
                  window.open(link, "_blank");
                }}
                className = "violet-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200 z-20"
                style={{ cursor: 'pointer' }}
                title="Live Demo"
              >
                <img 
                  src = "https://cdn-icons-png.flaticon.com/512/154/154613.png"
                  alt = "link"
                  className = "w-1/2 h-1/2 object-contain pointer-events-none" />
              </div>
            </div>
          ) : null}

          {/* GitHub Link Button */}
          <div className = "absolute inset-0 flex justify-end m-3">
            <div 
              onClick = {(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className = "black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200 z-20"
              style={{ cursor: 'pointer' }}
              title="Source Code"
            >
              <img 
                src = {github}
                alt = "github"
                className = "w-1/2 h-1/2 object-contain pointer-events-none" />
            </div>
          </div>

          </div>

          <div className = "mt-5 text-center">
            <p className ="text-secondary text-[14px]">{description}</p>
          </div>
          <div className = "mt-4 flex flex-wrap gap-2">
           {tags.map((tag) => (
             <p key = {tags.name} className = {`text-[14px] ${tag.color}`}>
              #{tag.name}
             </p>
           ))}

          </div>
      </Tilt>
    </motion.div>
  )

}

const Works = () => {
  return (
    <div id = "projects">
      <motion.div variants = {textVariant()}>
        <p className = {`${styles.sectionSubText} mt-20`}>My Work</p>
        <h2 className = {styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      {/* <div className = "w-full flex">
        <motion.p variants = {fadeIn("", "", 0.1, 1)} className = "mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          
        </motion.p>
      </div> */}

      <div className = "mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key = {`project-${index}`} 
            index = {index} 
            {...project} />
        ))}

      </div>
    </div>
  )
}

export default SectionWrapper(Works)