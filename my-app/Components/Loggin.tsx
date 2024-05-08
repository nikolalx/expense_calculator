'use client'
import React from 'react'

const Loggin = () => {
    return (
        <>
            <form action="#" className='blur-none relative group text-white flex flex-col w-full gap-10 flex-wrap justify-center items-center '>
                <label className='z-20 text-xl font-medium ' htmlFor="userName">Username:</label>
                <input type="text" placeholder='Username' className='input z-20 border-black border-[1px] placeholder:text-slate-700 p-1 text-center rounded-tr-lg rounded-bl-lg transition-all ease-in-out duration-400 focus:hue-rotate-90 focus:rounded-lg bg-gradient-to-r from-[#10abff] to-[#1beabd] ' id='userName' name='userName' />

                <label className='text-xl font-medium z-20' htmlFor="password">Password:</label>
                <input type="password" placeholder='Password' className='input z-20 border-black border-[1px] placeholder:text-slate-700 p-1 text-center rounded-tr-lg rounded-bl-lg transition-all ease-in-out duration-300 focus:hue-rotate-90 focus:rounded-lg bg-gradient-to-r from-[#10abff] to-[#1beabd]' id='password' name='password' />
            <div id='blurovaniBackground' className={" group-hover:shadow-xl group-hover:bg-indigo-500/[.20] group-hover:backdrop-blur-2xl absolute top-0 bottom-0 right-0 left-0 -z-100 group-hover:shadow-indigo-600/60 transition-all ease-in-out duration-400"}></div>


                <input type="submit" value="Loggin" className='bg-blue-500 z-20 focus:rounded hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-tr-lg rounded-bl-lg cursor-pointer transition-all ease-in-out duration-400' />
            </form>
        </>
    )
}

export default Loggin