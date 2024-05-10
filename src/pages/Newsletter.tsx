import { LuMail } from "react-icons/lu"

const Newsletter = () => {
  return (
    <div className='bg-slate-300 mt-16'>
        <div className='container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-Blue'>
            <div className='flex flex-shrink-0 items-center gap-4'>
                <LuMail className='text-[60px]' />
                    <div>
                        <h3 className='text-xl text-gray-800 sm:text-2xl font-semibold'>
                            Stay In Touch
                        </h3>
                    </div>
            </div>  
            <div className='w-full max-w-[500px] relative'>
                < input className='py-4 px-6 w-full rounded-full text-gray-800'
                type='text'
                placeholder='your Email Address'
                />
                
                <button className='bg-gray-500 absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full hover:bg-accent'>
                Subscribe    
                </button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter