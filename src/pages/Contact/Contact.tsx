import { useState } from "react" ;
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


function Contact() {
  const [email, setEmail] = useState("")
  const [fullName, setName] = useState("")
  return (
    <div className="grid grid-cols-12 bg-white w-full">
      <div className="min-h-[100px] rounded  bg-yellow-700 w-full shadow-xl text-white  col-span-5">
        <div className="p-4 text-center flex flex-col justify-around h-full">
          <div className="flex flex-col gap-y-2">
            <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
            <p className=" text-cyan-100 text-sm">
              Please fill out the form to get connected
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

          <div className="flex gap-x-4 text-lg">
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
      <div className="bg-white min-h-[100px] rounded w-full shadow-xl  text-teal-600 col-span-7 p-5">
        <form action="" className="flex flex-col space-y-4">
          <div className="font-bold text-xl text-center">
            Kindly enter your details
          </div>
          <div>
            <label className="text-sm">Your Name</label>
            <input
              value ={fullName}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              placeholder="your Name"
              className="min-h-[50px] ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>
          <div>
            <label className="text-sm">Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Your Email"
              className="ring-1 ring-gray-300 w-full rounded-md px-4 py-4 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea
              placeholder="Message"
              rows={4}
              className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button className="inline-block self-end bg-yellow-400 text-teal font-bold rounded-lg px-6 py-2 uppercase-sm">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
