import React from 'react'

const PrimaryButton = ({onClick, text}) => {
    return (
        <div onClick={onClick} className='max-w-42 bg-brand-300 px-4 py-2 rounded-lg text-white text-center font-bold cursor-pointer flex justify-center items-center'>
            {text}
        </div>
    )
}

export default PrimaryButton