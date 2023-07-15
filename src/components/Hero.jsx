import { motion } from 'framer-motion';
import { styles } from '../styles'

const Hero = () => {
  return (
    <section className = "relative w-full  h-screen mx-auto">
      <div className = {`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className = "flex flex-col justify-center items-center mt-5">
        </div>
        <div>
          <h1 className = {`${styles.heroHeadText} text-white mt-[170px]`}>Hi, I'm <span className = "text-[#6495ED]">Vivian</span></h1>
          <p className = {`${styles.heroSubText} mt-2 text-white-100`}>
            I am a student at Cornell University <br className ="sm:block hidden" /> majoring in Computer Science and <br  className ="sm:block hidden" /> minoring in Information Science.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero