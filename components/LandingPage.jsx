import React from 'react';
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1 '>
        <div className='textstructure  mt-35 px-20 '>
            <div className='masker'>
                <h1 className='text-8xl uppercase leading-[6vw] tracking-tighter font-semibold'>we create</h1>
            </div>
             <div className='masker flex items-center justify-centre'>
                <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.45, 0, 0.55, 1], duration:1 }} className="w-[9vw] h-[4.8vw] mr-[1vw] rounded-md bg-red-500 relative top-[0.5vw]"> </motion.div>
                <h1 className='text-8xl uppercase leading-[6vw] tracking-tighter font-semibold'>eye opening</h1>
            </div>
            <div className='masker'>
                <h1 className='text-8xl uppercase leading-[6vw] tracking-tighter font-semibold'>presentations</h1>
            </div>
        </div>
        <div className="border-t-[1px] border-zinc-600 mt-32 flex justify-between items-center px-20 py-5">
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(<p className="text-md font-light tracking-tight leading-none">{item}</p>))}
            <div className="start flex items-center gap-2">
                <div className="px-4 py-2 border-[2px] border-zinc-700 font-light text-sm uppercase rounded-full">start the project</div>
                <div className="w-10 h-10 flex items-center justify-center  border-[2px] border-zinc-700 rounded-full">
                    <span className="rotate-[45deg]">
                    <FaArrowUp />
                    </span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default LandingPage