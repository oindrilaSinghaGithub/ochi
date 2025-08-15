
import React from 'react';
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
          <motion.h1 initial={{x:0}} animate={{x:"-100vw"}} transition={{ease:"linear", repeat:Infinity,duration:10}} className='text-[18.5vw] leading-none uppercase mb-1 pt-1 font-bold'>we are ochi</motion.h1>
          <motion.h1 initial={{x:0}} animate={{x:"-100vw"}} transition={{ease:"linear", repeat:Infinity,duration:10}} className='text-[18.5vw] leading-none uppercase mb-1 pt-1  font-bold'>we are ochi</motion.h1>
          <motion.h1 initial={{x:0}} animate={{x:"-100vw"}} transition={{ease:"linear", repeat:Infinity,duration:10}} className='text-[18.5vw] leading-none uppercase mb-1 pt-1  font-bold'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee