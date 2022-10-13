import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { DiGithubBadge } from "react-icons/di";
import { AiOutlineLinkedin } from "react-icons/ai";
import './contact.css'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_grk14o9';
            const templateId = 'template_8snj4o7';
            const userId = 'gCYUdtydV0dxlgKG6';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <div id="contact-form">
            <h3>Contact me! 
                <a className="contact-icons" href='https://github.com/Ville34'><DiGithubBadge /></a>
                <a className="contact-icons" href='https://www.linkedin.com/in/ville-suutari-188646228/'><AiOutlineLinkedin /></a></h3>
            <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
            <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button onClick={submit}>Send Message</button>

            <span id='contact-span'className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
        </div>
    );
};

export default Contact;