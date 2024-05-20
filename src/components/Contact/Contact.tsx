
/*import { CIcon, cilEnvelopeClosed } from '@coreui/icons-react';*/

function Contact() {
  return (
    
          <div className="grid gap-4 m-4 sm:grid-cols-12 bg-white">
              <div className= 'min-h-[100px] rounded  bg-yellow-700 w-full shadow-xl text-white sm:col-span-4'>
                  < div className='flex flex-col space-y-8 justify-between'>
                        <div >
                            <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
                              <p className='pt-2 text-cyan-100 text-sm'>Please fill out the form to get connected</p>
                        </div>
                        <div className='flex flex-col space-y-6' >
                            <div className='inline-flex space-x-2 items-center'>
                              <span>+91 123456789</span>
                            </div>
                            <div className='inline-flex space-x-2 items-center'>
                              <span>Email: Contact@gmail.com</span>
                            </div>
                            <div className='inline-flex space-x-2 items-center'>
                              <span>Address:222,thane,Mumbai India</span>
                            </div>
                        </div>

                        <div className='flex space-4 text-lg'>
                          facebook,Instagram
                        </div>
                        
                  </div>
                  
                  <div className='bg-white min-h-[100px] rounded w-full shadow-xl md:col-span-8 text-gray-600'>
                    <form action='' className='flex flex-cols space-y-4'>
                      <div>
                        <label className='text-sm'>Your Name</label> 
                          <input type='text' 
                          placeholder='your Name' 
                          className='min-h-[50px] ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'/>
                      </div>
                      <div>
                        <label className='text-sm'>Email Address</label> 
                          <input type='email' 
                          placeholder='Your Email' 
                          className='ring-1 ring-gray-300 w-full rounded-md px-4 py-4 mt-2 outline-none focus:ring-2 focus:ring-teal-300'/>
                      </div>
                      <div>
                        <label className='text-sm'>Message</label> 
                          <textarea
                          placeholder='Message' 
                          rows= {4}
                          className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'></textarea>
                      </div>

                      <button className='inline-block self-end bg-yellow-700 text-white font-bold rounded-lg px-6 py-2 uppercase-sm'>Send Message</button>
                    </form>
                  </div>
              </div>
            </div>
             
                  

                      

          
                  
                
        
    
  )
}

export default Contact