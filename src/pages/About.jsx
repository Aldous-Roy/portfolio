import React from 'react'
import Model from '../components/Model'
const About = () => {
  return (
    <div className='md:pt-10 p-5'>
      <h2 className='text-center pb-4 font-bold text-3xl'>About Me</h2>
        <div className='md:flex '>
          <div className='md:w-1/2' ><Model/></div>
          <div className='md:w-1/2 bg-slate-100 text-justify p-4'>
            <p>Being a Computer Science student, I consider myself a responsible and orderly person.Capable of good communication. Aspiring web developer with an attitude of learning.Interested in learning new skills and technology and work in projects and enlarge my network.</p>
            <p>I excel at working with various frameworks and adapt quickly to new technologies. I value clear, structured documentation, which helps me understand and implement systems efficiently. I also prioritize following best development practices, ensuring that my work is both maintainable and high-quality.</p>
          </div>
        </div>
        <div>
        </div>
    </div>
  )
}

export default About