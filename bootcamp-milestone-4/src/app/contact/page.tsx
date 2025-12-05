'use client'

import styles from "./contact.module.css";
import { useRef, FormEvent } from "react" ;
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  // storing key variables
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current || !serviceId || !templateId || !publicKey) {
      alert("Email service not configured properly.");
      console.error("Missing EmailJS Environment variables");
      return;
    }

    emailjs
    .sendForm(
      serviceId, 
      templateId, 
      form.current, 
      publicKey
    )
    .then(
    ()=> {
      alert("Message sent successfully!");
      form.current?.reset();

    },
    (error) => {
      alert("Failed to send message, please try again.");
      console.log("EmailJS Error:", error);
    }
    );
  }
  return (
  <main className="main">
      <div className="page-wrap">
        <h1 className="page-title">Contact</h1>
        <div className={styles.wrap}>
          <p>Need to reach out?</p>
          <p>Fill out the form below, or email <a href="mailto:vinvyle06@gmail.com">vinvyle06@gmail.com</a></p>

          <form ref={form} id="contact-form" className={styles.form} onSubmit={sendEmail}>
            <label htmlFor="subject" className={styles.label}>Subject</label>
            <input className={styles.input}
            id="subject" 
            name="subject"
            required 
            placeholder="Subject" 
            />
            <label htmlFor="name" className={styles.label}>Name</label>
            <input className={styles.input}
            id="name" 
            name="name" 
            required
            placeholder="First and Last Name"  
            />
            <label htmlFor="email" className={styles.label}>Email</label>
            <input className={styles.input}
            id="email" 
            type="email" 
            name="email"
            required
            placeholder="Email" 
            />
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea className={styles.textarea}
            id="message" 
            name="message" 
            rows={6}  />
            <button type="submit" className={styles.submit}>Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
