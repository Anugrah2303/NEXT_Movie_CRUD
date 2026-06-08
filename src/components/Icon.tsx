import type { IconProp } from '@/types/types'
import React from 'react'

const Icon = ({Icon, options, className, onClick}:IconProp) => {
  return (
    <>
        <div className={`${className} p-3 flex justify-center items-center rounded-full hover:scale-[0.9] hover:shadow-(--shadow-md) transition-all duration-200`} onClick={onClick}>
            <Icon {...options} />
        </div>
    </>
  )
}

export default Icon