import React from 'react'
import Leftheader from './Leftheader'
import CreatePost from './CreatePost'

function Header() {
  return (
    <div>
        <div className='flex flex-col lg:flex-row justify-between  '>
           <Leftheader/>
            <div className="scroll-smooth">
          <CreatePost/>
            </div>
            <div className=''>
              
            </div>
        </div>
    </div>
  )
}

export default Header