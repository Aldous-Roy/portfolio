import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const Large = () => {
   
  return (
    <div className='bg-[url(/Users/aldousroy/Developer/portfoliio/src/assets/backiee-195633-landscape.jpg)] bg-no-repeat bg-cover h-screen ' >
        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <h2 className='text-4xl text-white font-bold'>Hello I'm Aldous Roy</h2>
            <h1 className='text-xl text-white text-center'>
        <Typewriter
          words={["I'm a MERN stack Developer" , "I'm a Software Developer ","I'm a Public Speaker"]}
          loop={5}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
        </div>
        
    </div>
  )
}

export default Large