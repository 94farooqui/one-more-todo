import React from 'react'

const TagElement = ({children}) => {
  return (
    <div className='px-2 py-1 border-2 border-slate-200 hover:bg-slate-200 hover:cursor-pointer hover:text-black rounded-full text-md font-semibold'>
        {children}
    </div>
  )
}

export default TagElement