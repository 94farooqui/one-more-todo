import React from 'react'

const TagElement = ({children}) => {
  return (
    <div className='px-2 py-1 bg-slate-200 rounded-lg text-md font-semibold'>
        {children}
    </div>
  )
}

export default TagElement