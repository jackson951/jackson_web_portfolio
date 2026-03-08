import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

const ContactContainer = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(180deg, var(--bg-color), var(--bg-secondary));
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 10% 10%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 90% 90%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const SectionHeader = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--accent-color), #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    color: var(--text-secondary);
    font-size: 1.2rem;
  }
`

const ContactInfo = styled(motion.div)`
  background: var(--card-bg);
  padding: 3rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  font-family: 'Courier New', Courier, monospace;
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.5rem;
`

const InfoContent = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
  }
`

const ContactForm = styled(motion.form)`
  background: var(--card-bg);
  padding: 3rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
`

const FormGroup = styled.div`
  margin-bottom: 2rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
    font-weight: 500;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--bg-color);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.1);
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--bg-color);
  color: var(--text-primary);
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.1);
  }
`

const SubmitButton = styled.button`
  background: var(--terminal-green);
  color: white;
  border: none;
  padding: 1rem 3rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  font-family: 'Courier New', Courier, monospace;
  position: relative;
  overflow: hidden;

  &:hover {
    background: #238636;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(46, 160, 67, 0.3);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::after {
    left: 100%;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    background: #30363d;
  }
`

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 2000)
  }

  return (
    <ContactContainer id="contact">
      <Container>
        <SectionHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss your project and how I can help you achieve your goals
          </motion.p>
        </SectionHeader>

        <ContactInfo
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 style={{ marginBottom: '3rem', color: 'var(--text-primary)' }}>Contact Information</h3>
          
          <InfoItem>
            <InfoIcon>
              <FiMail />
            </InfoIcon>
            <InfoContent>
              <h4>Email</h4>
              <p>jacksonkhuto591@gmail.com</p>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <FiPhone />
            </InfoIcon>
            <InfoContent>
              <h4>Phone</h4>
              <p>+27 66 180 2747</p>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <FiMapPin />
            </InfoIcon>
            <InfoContent>
              <h4>Location</h4>
              <p>Johannesburg, South Africa</p>
            </InfoContent>
          </InfoItem>

          <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '12px' }}>
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Available for</h4>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '2' }}>
              <li>Full-time positions</li>
              <li>Contract work</li>
              <li>Freelance projects</li>
              <li>Consulting opportunities</li>
            </ul>
          </div>
        </ContactInfo>

        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 style={{ marginBottom: '3rem', color: 'var(--text-primary)' }}>Send Me a Message</h3>
          
          <FormGroup>
            <label htmlFor="name">Your Name</label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">Your Email</label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="subject">Subject</label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="message">Message</label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            <FiSend />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                marginTop: '1rem',
                padding: '1rem',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '8px',
                color: '#22c55e',
                textAlign: 'center'
              }}
            >
              Thank you! Your message has been sent successfully.
            </motion.div>
          )}
        </ContactForm>
      </Container>
    </ContactContainer>
  )
}

export default Contact