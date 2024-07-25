import { motion } from 'framer-motion';
import { styles } from '../styles'
import { fadeIn } from '../utils/motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className = "relative w-full  h-screen mx-auto">
      <motion.div 
            variants = {fadeIn('up', 0.75)} initial = "hidden" 
            whileInView = "show"
            viewport = {{ once: true, amount: 0.25}}>
      <div className = {`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className = "flex flex-col justify-center items-center mt-5">
        </div>
        <div>
          <h1 className = {`${styles.heroHeadText} text-white mt-[170px]`}>Hi, I'm <span className = "text-[#6495ED]">Vivian</span></h1>
          <p className = {`${styles.heroSubText} mt-2 text-white-100`}>
            I am a student at Cornell University <br className ="sm:block hidden" /> majoring in Computer Science.
          </p>
          <div className = "mt-5">
            <a href="https://drive.google.com/file/d/1NWGaqyOsZ0XI2BWYXbdCqKLywkoN_zRd/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <button className = "p-3 rounded border-0 cursor-pointer">Resume</button>
            </a>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  )
}

export default Hero