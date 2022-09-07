import React, { useRef, useEffect, useState, createRef } from 'react';
import styled from 'styled-components';
import { COLOR } from '../contstants';
import background from '../images/back.webp'
import maskChi from '../images/mask-chi.svg';
import maskKC from '../images/mask-kc.svg';
import emailJS from '@emailjs/browser'
import { EMAILJS_API_KEY } from '../keys';

interface contactProps {
  $disabled?: boolean;
}

export const ContactContainer = styled.section<contactProps>`
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
    border-radius: 0px;
    text-shadow: 2px 2px 0px ${COLOR.darkPurple};
    background: linear-gradient(0deg, rgba(180,142,174,0) 25%, rgba(180,142,174,1) 25%, rgba(180,142,174,1) 50%, rgba(180,142,174,0) 50%);
    clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
    z-index: 20;
    border: none;
    &::before {
      border: none;
    }
    &::after {
      border: none;
    }
  }
  & input, textarea {
    transition-duration: 0.3s;
    cursor: ${props => props.$disabled ?  'not-allowed' : 'text'};
    width: 100%;
    max-width: 400px;
    font-weight: 200;
    border: 2px solid black;
    background-color: ${COLOR.lightPurple};
    border-radius: 6px;
    height: 36px;
    color: ${COLOR.white};
    padding: 8px;
    overflow: visible;
    font-size: 1rem;
    outline: none;
    z-index: 10;
  }
  & input::placeholder, textarea::placeholder {
    color: ${COLOR.white};
    opacity: 0.5;
  }
  & input:focus, textarea:focus, input:not(:placeholder-shown), textarea:not(:placeholder-shown) {
    background: ${COLOR.darkPurple};
  }
  & form:valid button {
    background: ${props => props.$disabled ?  COLOR.darkPurple : COLOR.lightPurple};
  }
  & input:not(:placeholder-shown):not(:focus):invalid {
    color: pink;
  }
  & input:nth-of-type(2):not(:placeholder-shown):not(:focus):valid {
    color: lightgreen;
  }
  & textarea {
    height: 300px;
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
    position: relative;
    width: 400px;
    max-width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 20;
    & :not(p) {
      filter: ${props => props.$disabled ?  'brightness(50%)' : 'brightness(100%)'};
    }
  }
  & button {
    transition-duration: 0.3s;
    cursor: ${props => props.$disabled ?  'not-allowed' : 'pointer'};
    width: 100%;
    max-width: 400px;
    font-weight: 800;
    border: none;
    background-color: ${COLOR.darkPurple};
    border-radius: 0px 0px 6px 6px;
    border: 2px solid black;
    border-top: none;
    height: 64px;
    color: ${COLOR.white};
    font-size: 1.25rem;
    text-transform: uppercase;
    outline: none;
  }
  & p {
    display: ${props => props.$disabled ? 'flex' : 'none'};
    position: absolute;
    bottom: 64px;
    z-index: 20;
    width: 100%;
    border-radius: 6px 6px 0px 0px;
    border: 2px solid black;
    border-bottom: none;
    justify-content: center;
    align-items: center;
    font-weight: 200;
    padding: 0px 16px;
    background: rgba(255,255,255,0.8);
    backdrop-filter: blur(5px);
    text-align: center;
    height: 100px;
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
  const [disabled, setDisabled] = useState(false)
  return (
    <ContactContainer $disabled={disabled}>
      <RangeChi id='contact' />
      <RangeKC />
        <h2>Contact</h2>
        <form onSubmit={(e) => {
          emailJS.sendForm('service_eaytc49', 'template_f4aq5kq', '#form', EMAILJS_API_KEY)
          e.currentTarget.reset()
          e.preventDefault()
          setDisabled(true)
        }} id='form'>
            <label htmlFor='from_name'>Preferred Name</label>
            <input disabled={disabled} name='from_name' id='from_name' required placeholder='Preferred Name' />
            <label htmlFor='email'>Email</label>
            <input disabled={disabled} type='email' name='reply_to' id='reply_to' required placeholder='Email' />
            <label htmlFor='message'>Message</label>
            <textarea disabled={disabled} name='message' id='message' required placeholder='Message' />
            <p>Thank you for your interest! I'll get back to you as soon as possible!</p>
            <button disabled={disabled} type='submit'>Send</button>
        </form>
    </ContactContainer>
  );
}
