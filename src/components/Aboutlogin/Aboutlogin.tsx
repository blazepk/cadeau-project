function Aboutlogin() {
    return(

<Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <div className='flex justify-between items-center pt-8'>
                            <div className='relative w-full max-w-[500px]'>
                            <input
                            
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            type='text'
                            placeholder='Search Product' />
                            <BsSearch
                                className='absolute top-0 right-0 mt-4 mr-5 text-grey-500'
                                size={20}
                            />
                        </div>
                    </div>
    )
}
export default Aboutlogin;