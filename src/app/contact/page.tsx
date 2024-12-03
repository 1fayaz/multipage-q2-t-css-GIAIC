import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'
import Header from "../components/Header";
import Footer from "../components/Footer";


function contact(){
   return(
      <div className="bg-gray-600 min-h-screen">
         <Header></Header>
      <div >
         <div className="md:w-1/2 md:pl-6">
            <h1 className="text-3xl mb-4 font-semibold">Contact Us</h1>
         
         <h2 className="mb-2 font-semibold text-2xl">Free Consultation</h2>

         </div>


         <div>
            <p className="mb-4 ">Email us for any resoning!</p>
         </div>
         <div className="mb-6">
            <ul className="list-disc pl-5">
               <li className="flex items-center mb-2"><i className="fa-solid fa-phone mr-2"></i>0123-4567891/0</li>
               <li className="flex items-center mb-2"><i className="fa-solid fa-mobile mr-2"></i>03124568856</li>
               <li className="flex items-center mb-2"><i className="fa-solid fa-envelope mr-2"></i>infoeventmanagmentpkcom</li>
            </ul>
         </div>
         <div >
            <h3 className="text-xl mb-4 font-semibold">Drop Us a Line</h3>
         </div>

         <form className="rounded-lg bg-gray-200 p-4 shadow-md" >
            <fieldset className="mb-4">
               <legend className="font-semibold text-black">Your Name</legend>
               <input className="w-full border border-gray-300 rounded p-2" type="text" />
            </fieldset>

            <fieldset className="mb-4">
               <legend className="font-semibold text-black">Your Email</legend>
               <input className="p-2 w-full border border-gray-400 rounded" type="email" />
            </fieldset>

            <fieldset className="mb-4">
               <legend className="font-semibold text-black">Your Contact Number</legend>
               <input className="p-2 w-full border border-gray-400 rounded" type="number" />
            </fieldset>

            <fieldset className="mb-4">
               <legend className="font-semibold text-black">Your Message</legend>
               <textarea className="w-full border border-gray-400 rounded h-24 p-2"  />
            </fieldset>

            <div>
               <button className="p-2 bg-blue-600 text-[#fff] rounded hover:bg-blue-700" type="submit" >SEND</button>
            </div>
         </form>
            <div className="p-6 max-w-6xl mx-auto flex flex-col md:flex-row "></div>
            <div className="md:w-1/2 md:mb-0 mb-6">
               <h3 className="text-2xl font-bold mb-4" > Find Us</h3>


            
            <iframe  className="w-full h-64 rounded-lg shadow-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.16999737747!2d68.28450432523398!3d25.383703648190032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70f6d444f3c3%3A0xc00bbc183d41e285!2sHyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731442069816!5m2!1sen!2s"
            allowFullScreen
            ></iframe>
            
            </div>
           
      </div>
         
         
         <Footer></Footer>
   </div>

         
      
   )
};

export default contact;