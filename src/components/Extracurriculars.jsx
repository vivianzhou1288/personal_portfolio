import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { extracurriculars } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExtracurricularCard = ({ extracurricular }) => (
  <VerticalTimelineElement 
    contentStyle = {{background: '#1d1836',  border: '3px solid white'}} 
    contentArrowStyle={{ borderRight: '10px solid white' }}
    date = {extracurricular.date}
    iconStyle = {{background: extracurricular.iconBg}}
    icon = {
      <div className = "flex justify-center items-center w-full h-full">
        <img
          src = {extracurricular.icon}
          alt = {extracurricular.company_name}
          className = "w-[60%] h-[60%] object-contain" />
      </div>
    }
  >
    <div>
      <h3 className = "text-white text-[24px] font-bold">{extracurricular.title}</h3>
      <p className = "text-[#D3D3D3] text-[16px] font-semibold" style = {{margin: 0}}>{extracurricular.club_name}</p>
    </div>
    
    <ul className = "mt-5 list-disc ml-5 space-y-2">
      {extracurricular.points.map((point, index) => (
        <li key = {`extracurricular-point-${index}`}
        className = "text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Extracurriculars = () => {
  return (
    <div id = "extracurriculars">
      <motion.div variants = {textVariant()}>
        <p className = {`${styles.sectionSubText} mt-20`}>What I have done outside of work</p>
        <h2 className = {styles.sectionHeadText}>Extracurricular Activities.</h2>
      </motion.div>

      <div className = "mt-20 flex flex-col">
        <VerticalTimeline>
          {extracurriculars.map((extracurricular,index) => (
            <ExtracurricularCard key = {index} extracurricular = {extracurricular} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper(Extracurriculars, "extracurricular")