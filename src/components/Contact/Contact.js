import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 100px 0;
  background: ${props => props.theme.colors.lightGray2};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: ${props => props.theme.colors.dark};
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoCard = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.small};
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 50%;
  margin-right: 20px;
`;

const InfoContent = styled.div``;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: ${props => props.theme.colors.dark};
`;

const InfoText = styled.p`
  color: ${props => props.theme.colors.secondary};
`;

const ContactForm = styled.form`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.small};
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.dark};
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  
  &:hover {
    background: ${props => props.theme.colors.primaryLight};
  }
`;

const SuccessMessage = styled.div`
  color: green;
  text-align: center;
  margin-top: 10px;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-top: 10px;
`;

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xzbnpzrv', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <ContactSection>
      <Container>
        <Title>Get in Touch</Title>
        <ContactWrapper>
          <ContactInfo>
            <InfoCard
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <IconWrapper><FaPhone /></IconWrapper>
              <InfoContent>
                <InfoTitle>Phone</InfoTitle>
                <InfoText>0775752653 / 0765816135</InfoText>
              </InfoContent>
            </InfoCard>

            <InfoCard
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <IconWrapper><FaEnvelope /></IconWrapper>
              <InfoContent>
                <InfoTitle>Email</InfoTitle>
                <InfoText>flickcoprosocial@gmail.com</InfoText>
              </InfoContent>
            </InfoCard>

            <InfoCard
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <IconWrapper><FaMapMarkerAlt /></IconWrapper>
              <InfoContent>
                <InfoTitle>Location</InfoTitle>
                <InfoText>Negombo, Sri Lanka</InfoText>
              </InfoContent>
            </InfoCard>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Name</Label>
              <Input 
                type="text" 
                name="name" 
                required 
                placeholder="Your name"
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input 
                type="email" 
                name="email" 
                required 
                placeholder="Your email"
              />
            </FormGroup>
            <FormGroup>
              <Label>Subject</Label>
              <Input 
                type="text" 
                name="subject" 
                required 
                placeholder="Subject"
              />
            </FormGroup>
            <FormGroup>
              <Label>Message</Label>
              <TextArea 
                name="message" 
                required 
                placeholder="Your message"
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            {status === 'success' && (
              <SuccessMessage>Message sent successfully!</SuccessMessage>
            )}
            {status === 'error' && (
              <ErrorMessage>Failed to send message. Please try again.</ErrorMessage>
            )}
          </ContactForm>
        </ContactWrapper>
      </Container>
    </ContactSection>
  );
};

export default Contact;
