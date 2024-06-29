
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import {useForm} from 'react-hook-form' 
import { z } from "zod"
import{ zodResolver } from "@hookform/resolvers/zod"

const schema= z.object({
  fullName:z.string().regex(new RegExp(/^[A-Za-z]+$/i),"name should contain Alphabets")
            .min(3,"name is required"),
            
  email:z.string().min(1,"Email is a required").email("this is not a valid Email")
});


type FormValues = z.infer<typeof schema>;



  

  function Contact() {

  const {register, handleSubmit, formState:{ errors} } = useForm<FormValues>({
    defaultValues:{
      fullName:" ",
      email:" "
    },
    resolver: zodResolver(schema)}
  );

 

  const onSubmit = (data:FormValues) => {
    console.log(data);
  };
    
  
  

  return (
    <div className="grid grid-cols-12 bg-brown-400 w-full">
      <div className="min-h-[100px] rounded  bg-brown-400 w-full shadow-xl text-brown-900  col-span-6">
        <div className="p-4 text-center flex flex-col justify-aroud h-full">
          <div className="flex flex-col gap-y-2">
            <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
            <p className=" text-blue text-l">
              What are you Waiting for?
            </p>
            <p className='text-brown-900 text-xl'>
              we would like to help you!
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="">+91 83619 41810 <br></br>
            +91 99203 64165</div>
            <div className="">
              <span className="font-bold">Email</span> : parkhaventure@gmail.com
            </div>
            <div className="">
              <span className="font-bold">Address</span>:5, Devendra Smurti
                Opp.Janseva Bank
                Kasturba X Road, Borivali (East)
                Mumbai - 401034
            </div>
          </div>

          <div className="flex gap-x-4 text-4xl text-blue">
            <a
              href="https://www.facebook.com/pratyush.khandelwal.7"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <FaInstagramSquare />
          </div>
        </div>
      </div>
      <div onSubmit={handleSubmit(onSubmit)} className="bg-blue min-h-[100px] rounded w-full shadow-xl  text-brown-900 col-span-6 p-5">
        <form  className=" form flex flex-col space-y-4" >
          <div className="font-bold text-xl text-center">
            Kindly enter your details
          </div>
          <div>
            <label className="text-sm">Name</label>
            <input
              type="text"
              
              id="your Name" {...register ("fullName")}
              className="min-h-[50px] ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
            />
             {errors.fullName && <span className="error" >{errors?.fullName?.message}</span>}
            
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
             type="email"
             id="email" {...register("email")}
               className="ring-1 ring-gray-300 w-full rounded-md px-4 py-4 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
            />
            {errors.email && <span>{errors?.email?.message}</span>}
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea
              placeholder="Message"
              rows={4}
              className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button type= "submit" className="inline-block self-end bg-brown-900 text-blue font-bold rounded-lg px-6 py-2 uppercase-sm">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
