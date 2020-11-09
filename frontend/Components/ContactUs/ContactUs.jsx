import React, { useEffect, useState } from 'react'
import styles from './ContactUs.module.css'
import { Animated } from 'react-animated-css'
import { createContact } from '../util/contact_api'

const ContactUs = () => {

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')

  useEffect(() => {

  }, [])

  const update = (form) => {
    switch (form) {
      case 'name':
        return (e) => {
          setName(e.currentTarget.value)
        }
      case 'subject':
        return (e) => {
          setSubject(e.currentTarget.value)
        }
      case 'message':
        return (e) => {
          setMessage(e.currentTarget.value)
        }
      case 'email':
        return (e) => {
          setEmail(e.currentTarget.value)
        }
      default:
        break;
    }
  }

  const handleSubmit = () => {
    createContact({
      name,
      email,
      message,
      subject
    }).then((res) => console.log(res))
  }

  return (
    <div className={styles.contactUsWrapper}>
      <Animated animationIn="fadeIn" >
        <h1 id="contact">Contact Us</h1>
      </Animated>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name
            <input value={name} onChange={update('name')} />
          </label>
          <label>
            Email
            <input value={email} onChange={update('email')} />
          </label>
        </div>
        <div>
          <label>
            Subject
          <input value={subject} onChange={update('subject')} />
          </label>
          <label>
            Message
          <textarea value={message} onChange={update('message')}>{message}</textarea>
          </label>
        </div>
        <button type="submit" onClick={handleSubmit}>Send Message</button>
      </form>
    </div>
  )
}

export default ContactUs
