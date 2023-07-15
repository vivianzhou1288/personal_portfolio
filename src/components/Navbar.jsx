import React ,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'

import { styles } from '../styles';
import "../styles.css"
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

function Navbar() {
  const [active, setActive] = useState(' ')
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav 
      className = {`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >
        <div className = "w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link to ="/" className = "flex items-center gap-2" onClick = {() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
            <img src = {logo} alt = "logo" className = "w-9 h-9 object-contain" />
            <p className = "text-white text-[18px] font-bold cursor-pointer flex">Vivian Zhou</p>
          </Link>
          <ul className = "list-none hidden sm:flex flex-row gap-7">
            <h1 className = "links text-white text-[18px]"><HashLink smooth to = "#about">About</HashLink></h1>
            <h1 className = "links text-[18px]"><HashLink smooth to = "#skills">Skills</HashLink></h1>
            <h1 className = "links text-[18px]"><HashLink smooth to = "#experiences">Experience</HashLink></h1>
            <h1 className = "links text-[18px]"><HashLink smooth to = "#extracurriculars">Extracurricular</HashLink></h1>
            <h1 className = "links text-[18px]"><HashLink smooth to = "#projects">Projects</HashLink></h1>
          </ul>
          <div className = "sm:hidden flex flex-1 justify-end items-center">
            <img src = {toggle ? close : menu} alt = "menu" className = "w-[28px] h-[28px] object-contain cursor-pointer" onClick = {() => setToggle(!toggle)} />

            <div className = {`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded x1`}>
            <ul className = "list-none flex justify-end items-start flex-col gap-4">
            {/* {navLinks.map((Link) => (
              <li key = {Link.id} className = {`${active === Link.title ? "text.white" : "text-secondary"}  font-medium cursor-pointer text-[16px]`} 
              onClick = {() => {
                setToggle(!toggle);
                setActive(Link.title);
                }}>
                <a href = {`#${Link.id}`}>{Link.title}</a>
              </li> */}
            {/* ))} */}
            <h1 className = "text-[15px]"><HashLink smooth to = "#about">About</HashLink></h1>
            <h1 className = "text-[15px]"><HashLink smooth to = "#skills">Skills</HashLink></h1>
            <h1 className = "text-[15px]"><HashLink smooth to = "#experiences">Experience</HashLink></h1>
            <h1 className = "text-[15px]"><HashLink smooth to = "#extracurriculars">Extracurricular</HashLink></h1>
            <h1 className = "text-[15px]"><HashLink smooth to = "#projects">Projects</HashLink></h1>
          </ul>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar