import React from 'react'

const HeaderItem = ({name,Icon}) => {
  return (
    <div className='text-white mb-3 flex items-center gap-3 text-[16px] font-semibold cursor-pointer hover:underline underline-offset-8'>
      <Icon />
      <h2 className='hidden md:block'>{name}</h2>
    </div>
  )
}

export default HeaderItem