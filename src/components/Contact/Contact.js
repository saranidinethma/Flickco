"use client"

import { useState, useRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import emailjs from "@emailjs/browser"

const ContactSection = styled.section`
  padding: 80px 0;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContactContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`

const ContactHeader = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #333;
`

const ContactContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #FF7F50; /* Hardcoded coral color */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`

const InfoTitle = styled.h4`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`

const InfoText = styled.p`
  margin: 5px 0 0;
  color: #666;
  font-size: 0.9rem;
`

const ContactForm = styled.form`
  flex: 1.5;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const FormRow = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`

const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 8px;
  color: #555;
  display: none;
`

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #eee;
  border-radius: 5px;
  font-size: 1rem;
  background: #f9f9f9;
  
  &:focus {
    outline: none;
    border-color: #FF7F50; /* Hardcoded coral color */
    background: white;
  }
  
  &::placeholder {
    color: #aaa;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #eee;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  background: #f9f9f9;
  
  &:focus {
    outline: none;
    border-color: #FF7F50; /* Hardcoded coral color */
    background: white;
  }
  
  &::placeholder {
    color: #aaa;
  }
`

const SubmitButton = styled(motion.button)`
  background: #FF7F50; /* Hardcoded coral color */
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  
  &:hover {
    background: #FF9E7D; /* Lighter coral for hover */
  }
`

const SuccessMessage = styled.div`
  color: green;
  text-align: center;
  margin-top: 10px;
`

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-top: 10px;
`

const Contact = () => {
  const [status, setStatus] = useState("")
  const form = useRef() // ✅ Use ref for the form

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const result = await emailjs.sendForm(
        "service_pb0t4te", // Replace with your actual EmailJS Service ID
        "template_29r636i", // Replace with your actual EmailJS Template ID
        form.current,
        "vGpSpxBq5g8vNI34u", // Replace with your actual EmailJS Public Key
      )

      console.log("Success:", result.text)
      setStatus("success")
      form.current.reset()
    } catch (error) {
      console.error("Error:", error)
      setStatus("error")
    }
  }

  return (
    <ContactSection>
      <ContactContainer>
        <ContactHeader>Get in Touch</ContactHeader>
        <ContactContent>
          <ContactInfo>
            <InfoItem>
              <IconWrapper>
                <FaPhone />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Phone</InfoTitle>
                <InfoText>0775752653/0765816135</InfoText>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Email</InfoTitle>
                <InfoText>flickcoprosocial@gmail.com</InfoText>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <IconWrapper>
                <FaMapMarkerAlt />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Location</InfoTitle>
                <InfoText>Negombo, Sri Lanka</InfoText>
              </InfoContent>
            </InfoItem>
          </ContactInfo>

          <ContactForm ref={form} onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="from_name" required placeholder="Your Name" />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" name="from_email" required placeholder="Your Email" />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label>Subject</Label>
                <Input type="text" name="subject" required placeholder="Subject" />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label>Message</Label>
              <TextArea name="message" required placeholder="Your Message" />
            </FormGroup>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </SubmitButton>

            {status === "success" && <SuccessMessage>Message sent successfully!</SuccessMessage>}
            {status === "error" && <ErrorMessage>Failed to send message. Please try again.</ErrorMessage>}
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  )
}

export default Contact

