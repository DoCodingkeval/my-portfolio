const Avatar = () => {
    return (
        <div className='bg-offblue mb-8 md:mb-10 flex flex-col justify-between h-20 w-20 md:w-24 border-3 md:h-24 p-3 md:p-4.5'>
            <div className='flex flex-col gap-1 items-center justify-between'>
                <div className='flex justify-between w-full'>
                    <span className='size-3 rounded-full bg-black inline-block' />
                    <span className='size-3 rounded-full bg-black inline-block' />
                </div>
                <svg
                    className="inline-block w-4 h-4"
                    viewBox="0 0 10 12"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <polygon points="5,0 10,12 0,12" fill="black" />
                </svg>
            </div>
            <span className='h-1 mx-auto bg-black inline-block w-full' />
        </div>
    )
}
export default Avatar;

