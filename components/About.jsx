import React from 'react'

function About() {
  return (
    <div className='w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black text-[3vw] px-20'>
       <h1 classNam='px-20 tracking-tight' > Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
       <div className='w-full flex gap-5 border-t-[1px] mt-20 border-[#a1b562]'>
        <div className="w-1/2">
          <h1 className='text-6xl'>Our approach :</h1>
          <button className='flex uppercases gap-8 px-8 py-5 bg-zinc-900 mt-10 rounded-full  text-white'>Read More
            <div className="w-15 h-15 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]'></div>
       </div>
    </div>
  )
}

export default About