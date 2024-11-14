import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className='flex flex-col text-center items-center mt-6'>
            <center><div className='flex flex-row gap-4 space-x-1'>
                <a href='#' className='text-gray-700 opacity-60 text-sm'>Meta</a>
                <a href='#'className='text-gray-700 opacity-60 text-sm'>About </a>
                <a href='#' className='text-gray-700 opacity-60 text-sm'>Blog </a>
                <a href='#' className='text-gray-700 opacity-60 text-sm'>Jobs </a>
                <a href='#' className='text-gray-700 opacity-60 text-sm'>Help </a>
                <a href='#' className='text-gray-700 opacity-60 text-sm'>Api </a>
                <a href='#' className='text-gray-700 opacity-60 text-sm'>Privacy </a>
                <a href='#' className='text-gray-700 opacity-60 text-sm'>Terms </a>
                <a href='#' className='text-gray-700 opacity-60 text-sm'>Location </a>
                <a href='#' className='text-gray-700 opacity-60 text-sm'>Instagram lite </a>
                <a href='#' className='text-gray-700 opacity-60 text-sm'>Threads </a>
                <a href='#' className='text-gray-700 opacity-60 text-sm'>Meta Verified </a>
            </div></center>
            <span className='flex text-center text-gray-700 opacity-60 items-center'>© 2024 Instagram from Meta</span>
        </div>
    </>
  )
}

export default Footer