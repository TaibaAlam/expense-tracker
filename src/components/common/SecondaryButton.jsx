const SecondaryButton = ({onClick, text}) => {
    return (
        <div onClick={onClick} className='max-w-42 border border-brand-300 text-brand-300 px-4 py-2 rounded-lg text-center font-bold cursor-pointer flex justify-center items-center'>
            {text}
        </div>
    )
}

export default SecondaryButton