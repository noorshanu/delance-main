import React,{useState } from 'react'
// import Toast from "./Toast";
// import './Model.css'
// import OutsideClickDetector from "hooks/OutsideClickDetector";
// import  { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { FaTelegram } from "react-icons/fa";

function Model({ setIsModal }) {
    // const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('service_kz0dtx4', 'template_tly8pl6', form.current, 'mnctSEDuRTEVNoe0i')
    //     .then((result) => {
    //       e.preventDefault();
    //       setShowToast(true);
    //         console.log(result.text);
    //         form.current.reset();
            
            
           
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };


    // const [showToast, setShowToast] = useState(false);
    // const toastRef = OutsideClickDetector(() => setShowToast(false));
    
    
  return (
    <div className="modalBackground">
    <div className="modalContainer" >
    {/* <Toast
        title="Your Response has been submitted"
        state={showToast}
        stateSetter={setShowToast}
        toastRef={toastRef}
      /> */}
      <div className="titleCloseBtn">
        <button
          onClick={() => {
            setIsModal(false);
          }}
        >
          X
        </button>
      </div>
    <div className="">
    <section>
      <div className="formWrapper">
        <header>
          <h2 className="text-center fs-34px white weight-3 mb-10px lh-1">
          You can also send directly on Telegram;
          </h2>
          <h1 className="fs-55px weight-7 text-center white lh-1">
          Request  <span className="red">Audit / KYC / Escrow</span>
          </h1>
        </header>
        <form  > 
          {/* onSubmit={sendEmail} ref={form} */}
          <input
            type="text"
            className="fs-26px white weight-3"
            placeholder="Project Name :"
            name="projectname"
          />
          <input
            type="email"
            className="fs-26px white weight-3"
            placeholder="Email :"
            name="email"
          />
          <input
            type="text"
            className="fs-26px white weight-3"
            placeholder="Project Telegram :"
            name="telegram"
          />
             <input
            type="text"
            className="fs-26px white weight-3"
            placeholder="Source Code Link (Github) :"
            name="github"
          />
          <textarea
            className="fs-26px white weight-3"
            placeholder="Message :"
            name="message"
          ></textarea>
<div className='btn-modal'>
          <button type="submit" className="fs-26px white weight-5 pointer" >
            Send
          </button>
          <a href='https://t.me/BlockAuditReport' target='_blank' rel='noreferrer' className="fs-26px white weight-5 pointer" >
            Telegram 
          </a>
          </div>
        </form>
      </div></section></div>
      </div>
      </div>
  )
}

export default Model