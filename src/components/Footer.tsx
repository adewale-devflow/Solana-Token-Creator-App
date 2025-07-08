import React, {FC} from 'react';
import { useForm } from "@formspree/react";
import { 
    TiSocialFacebook, 
    TiSocialLinkedin, 
    TiSocialTwitter, 
    TiSocialYoutube,
} from "react-icons/ti";



export const Footer: FC = () => {
  const [state, handleSubmit] = useForm("xjvljqgk");

  if(state.succeeded) {
    return (
      <h1 className="md:text-5xl/t1 my-4 
      max-w-lg text-4xl font-medium text-white">
        Thamks for Sending your message!
      </h1>
    );
  }

  const menuOne = [
    "Support Center",
    "Customer Support",
    "About us",
    "Project",
    "Return Policy",];

  
  const menuTwo = [
    "Press Inquiries",
    "Social Media Support",
    "Image & B-roll",
    "Project",
    "Site Map",];


  return (
    <footer className="bg-default-950/40
    backdrop-blur-3xl">
      <div className="container py-20 lg:px-20">
        <div className="grid grid-cols2 gap-10
        lg:grid-cols-12 lg:gap-16">
          <div className="col-span-2 sm:col-span-1
          lg:col-span-3">
            <ul className="flex flex-col gap-3">
              <h5 className="text-default-200 mb-2
              font-medium lg:text-lg xl:text-xl">
                About Us
              </h5>
              {
                menuOne.map((item, index) => (
                  <li>
                    <a href="#" className="text-default-300
                    text-base transaction-all
                    hove:text-white">
                      <i data-lucide="gauge-circle"
                      className="me-2 inline-block
                      h-4 w-4"
                      >
                        {item}
                      </i>
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}