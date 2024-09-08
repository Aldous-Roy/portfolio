import React from 'react'
import { div } from 'three/webgpu'

const Skill = (props) => {
    return (
        <div className='p-3 bg-slate-300 rounded-xl w-32'>
        <div className="flex justify-center ">
          <img width={'100px'} height={'60px'} className="rounded-2xl" src={props.imageUrl} alt={props.title} />
        </div>
        <h1 className='text-center pt-2'>{props.title}</h1>
        </div>
    );
}

export default Skill