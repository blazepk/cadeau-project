
/*import { CIcon, cilEnvelopeClosed } from '@coreui/icons-react';*/

function Contact() {
  return (
    <div className="py-16 bg-white">
          <div className="flex w-full min-h-screen justify-center items-center">
              <div className= 'flex- flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white'>
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

                  <div className='bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80'>
                    <form action='' className='flex flex-cols space-y-4'>
                      <div>
                        <label className='text-sm'>Your Name</label> 
                          <input type='text' 
                          placeholder='your Name' 
                          className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'/>
                      </div>
                      <div>
                        <label className='text-sm'>Email Address</label> 
                          <input type='email' 
                          placeholder='Your Email' 
                          className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'/>
                      </div>
                      <div>
                        <label className='text-sm'>Message</label> 
                          <textarea
                          placeholder='Message' 
                          rows='4'
                          className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'></textarea>
                      </div>

                      <button className='inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase-sm'>Send Message</button>
                    </form>
                  </div>
              </div>
            </div>
          </div>     
                  

                      

          
                  
                
        
    
  )
}

export default Contact