import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLOR } from '../contstants';
import background from '../images/back.webp'
import maskChi from '../images/mask-chi.svg';
import maskKC from '../images/mask-kc.svg';
import emailJS from '@emailjs/browser'
import { EMAILJS_API_KEY } from '../keys';

export const ContactContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 12vw 8vw 64px 8vw;
  padding-top: max(64px, 12vw);
  background-image: url(${background});
  background-repeat: repeat;
  & h2 {
      color: ${COLOR.darkPurple};
      z-index: 20;
  }
  & input, textarea {
    transition-duration: 0.3s;
    width: 100%;
    max-width: 400px;
    font-weight: 200;
    border: none;
    background-color: ${COLOR.lightPurple};
    border-radius: 6px;
    height: 36px;
    color: ${COLOR.white};
    padding: 8px;
    font-size: 1rem;
    outline: none;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
  }
  & input::placeholder, textarea::placeholder {
    color: ${COLOR.white};
    opacity: 0.5;
  }
  & input:focus, textarea:focus {
    border: 2px solid ${COLOR.darkPurple}
  }
  & textarea {
    height: 200px;
    resize: none;
    border-radius: 6px 6px 0px 0px;
  }
  & label {
    margin-top: 1rem;
    font-weight: 800;
    width: 100%;
    text-align: left;
    color: ${COLOR.darkPurple}
  }
  & form {
    width: 400px;
    max-width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 20;
  }
  & button {
    cursor: pointer;
    width: 100%;
    max-width: 400px;
    font-weight: 800;
    border: none;
    background-color: ${COLOR.darkPurple};
    border-radius: 0px 0px 6px 6px;
    height: 64px;
    color: ${COLOR.white};
    font-size: 1.25rem;
    text-transform: uppercase;
    outline: none;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.5);
  }
`;

export const RangeChi = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  mask-image: url(${maskChi});
  mask-repeat: no-repeat;
  mask-size: cover;
  transform: rotate(180deg);
  width: 100%;
  height: 15vw;
  background: ${COLOR.darkPurple};
`;

export const RangeKC = styled.div`
  position: absolute;
  top: -5px;
  left: 0;
  mask-image: url(${maskKC});
  transform: rotate(180deg);
  mask-repeat: no-repeat;
  mask-size: cover;
  z-index: 10;
  width: 100%;
  height: 10vw;
  background: #B48EAE;
`;

export default function Contact() {
  return (
    <ContactContainer>
      <RangeChi id='contact' />
      <RangeKC />
        <h2>Contact</h2>
        <form onSubmit={(e) => {
          emailJS.sendForm('service_eaytc49', 'template_f4aq5kq', '#form', EMAILJS_API_KEY)
          e.currentTarget.reset()
          e.preventDefault()
        }} id='form'>
            <label>Preferred Name</label>
            <input name='from_name' required placeholder='Preferred Name' />
            <label>Email</label>
            <input type='email' name='reply_to' required placeholder='Email' />
            <label>Message</label>
            <textarea name='message' required placeholder='Message' />
            <button type='submit'>Send</button>
        </form>
    </ContactContainer>
  );
}
