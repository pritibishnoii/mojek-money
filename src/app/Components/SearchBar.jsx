"use client"
import React from 'react'
import Heading from './Headings'
import { RiSearchLine } from "react-icons/ri";
import { VscSend } from "react-icons/vsc";

const SearchBar = () => {
    return (
        <div className='w-full h-max  py-6 px-2 '>
            <div className='w-full h-68  flex justify-center'>
                <div className='w-3/4 flex  justify-center '>
                    <Heading
                        titleParts={ [
                            { text: "Search Anything.", color: "#1e6f5c", className: "" },
                            { text: "Summarise Everything.", color: "#64f07a", className: "" },

                        ] }
                    />
                </div>
            </div>

            {/* search input  */ }

            <div className='w-full flex justify-center '>
                <div className='w-[45%]  h-max border-3 border-[#1e6f5c] py-3 px-4 rounded-2xl flex justify-between shadow sahdow-bottom-[#d1dfe1]'>
                    <RiSearchLine className='text-3xl text-[#a6a6a6]' />
                    <input type="text" className=' outline-none   w-full px-6 ' />
                    <VscSend className='text-3xl text-[#a6a6a6]' />
                </div>
            </div>

            <div className='w-full h-max flex justify-center py-6 px-4'>

                <div className='w-[42%]   flex justify-center  h-max  '>
                    <p className='text-[#979d9d] text-md   text-center '>Just type in Starbucks for example and see all the times you have spent at Starbucks.
                        Get a summary of how much you’ve spent this month, last month and all time!</p>
                </div>
            </div>
        </div>
    )
}

export default SearchBar