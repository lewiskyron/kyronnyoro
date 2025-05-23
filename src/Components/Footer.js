import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Kyron Nyoro</h4>
      <h4>Copyright &copy; 2023 KR</h4>
      <div className='footerLinks'>
        <a href="https://github.com/lewiskyron" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/lewis-kyron-nyoro/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:kyronnyoro.m@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/Kyronnyoro1/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer