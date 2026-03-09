import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FiMail, FiPhone, FiMapPin, FiSend, FiTerminal, FiDownload } from 'react-icons/fi'

const ContactContainer = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(180deg, #1e1b4b, #0f172a);
  position: relative;
  overflow: hidden;
`

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
  opacity: 0.3;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const ContactInfo = styled.div`
  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, #ff00ff, #00f5ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Inter', sans-serif;
    text-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
    animation: neon-flicker 2s infinite;
  }

  p {
    color: #94a3b8;
    margin-bottom: 3rem;
    line-height: 1.8;
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
  }
`

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 27, 75, 0.8));
  border-radius: 12px;
  border: 1px solid rgba(255, 0, 255, 0.3);
  transition: transform 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 10px 30px rgba(255, 0, 255, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(0, 245, 255, 0.2));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff00ff;
  font-size: 1.5rem;
  border: 1px solid rgba(255, 0, 255, 0.5);
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.3);
`

const ContactLabel = styled.div`
  h3 {
    color: #fff;
    margin: 0 0 0.5rem 0;
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
  }

  p {
    color: #94a3b8;
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
  }
`

const ContactForm = styled(motion.form)`
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 27, 75, 0.8));
  padding: 3rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 0, 255, 0.3);
  box-shadow: 0 20px 40px rgba(255, 0, 255, 0.2);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 0, 255, 0.1), transparent);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`

const FormHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 0, 255, 0.3);

  h3 {
    color: #fff;
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
  }

  .terminal-icon {
    color: #00f5ff;
    font-size: 1.5rem;
  }
`

const FormGroup = styled.div`
  margin-bottom: 2rem;
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #94a3b8;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
`

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 0, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Inter', sans-serif;

  &:focus {
    outline: none;
    border-color: #ff00ff;
    box-shadow: 0 0 15px rgba(255, 0, 255, 0.3);
  }

  &::placeholder {
    color: #64748b;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 0, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Inter', sans-serif;

  &:focus {
    outline: none;
    border-color: #ff00ff;
    box-shadow: 0 0 15px rgba(255, 0, 255, 0.3);
  }

  &::placeholder {
    color: #64748b;
  }
`

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff00ff, #00f5ff);
  color: #0f172a;
  border: none;
  padding: 1rem 3rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(255, 0, 255, 0.4);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 0, 255, 0.6);
  }
`

const FloatingOrbs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`

const Orb = styled(motion.div)`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 0, 255, 0.3), transparent);
  filter: blur(3px);
`

const CyberpunkContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <ContactContainer id="contact">
      <GridOverlay />
      <FloatingOrbs>
        <Orb
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ top: '10%', left: '10%' }}
        />
        <Orb
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </FloatingOrbs>
      
      <Container>
        <ContactInfo>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Establish Connection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to collaborate on your next digital project? Let's interface and create something extraordinary together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactItem
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ContactIcon>
                <FiMail />
              </ContactIcon>
              <ContactLabel>
                <h3>Direct Line</h3>
                <p>jacksonkhuto591@gmail.com</p>
              </ContactLabel>
            </ContactItem>

            <ContactItem
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ContactIcon>
                <FiPhone />
              </ContactIcon>
              <ContactLabel>
                <h3>Signal Channel</h3>
                <p>+27 66 180 2747</p>
              </ContactLabel>
            </ContactItem>

            <ContactItem
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ContactIcon>
                <FiMapPin />
              </ContactIcon>
              <ContactLabel>
                <h3>Location</h3>
                <p>Johannesburg, South Africa</p>
              </ContactLabel>
            </ContactItem>

            <ContactItem
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ContactIcon>
                <FiDownload />
              </ContactIcon>
              <ContactLabel>
                <h3>Download CV</h3>
                <p>Access full resume</p>
              </ContactLabel>
            </ContactItem>
          </motion.div>
        </ContactInfo>

        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <FloatingOrbs>
            <Orb
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ top: '10%', right: '10%' }}
            />
          </FloatingOrbs>
          
          <FormHeader>
            <FiTerminal className="terminal-icon" />
            <h3>Transmit Message</h3>
          </FormHeader>
          
          <FormGroup>
            <Label htmlFor="name">Operator Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your designation"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Communication Protocol</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.system@domain.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="subject">Transmission Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project inquiry, collaboration, etc."
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message Content</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your project requirements..."
              required
            />
          </FormGroup>

          <SubmitButton 
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiSend style={{ marginRight: '0.5rem' }} />
            Initiate Transmission
          </SubmitButton>
        </ContactForm>
      </Container>
    </ContactContainer>
  )
}

export default CyberpunkContact