import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div className='flex justify-center items-center h-[250px]'>
        <h2 className='text-2xl font-bold'>404- Not Found Page : <Link to='/'><span className='text-blue-500'>Go to Home page </span></Link></h2>
    </div>
  )
}

export default NotFound