// MessageInput.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSend, FiImage } from 'react-icons/fi';

const InputContainer = styled.div`
  grid-column: 1/5;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
`;

const Input = styled.textarea`
  flex-grow: 1;
  resize: none;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const SendButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 50%;
  padding: 10px;
  margin-left: 10px;
  color: white;
  cursor: pointer;
  outline: none;
`;

const ImageUploadButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 5px;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  outline: none;
`;

const MessageInput = () => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        console.log('Send message:', message);
        setMessage('');
    };

    const handleImageUpload = () => {
        console.log('Image upload triggered');
    };

    return (
        <InputContainer>
            <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                rows="1"
            />
            <ImageUploadButton onClick={handleImageUpload}>
                <FiImage size="24px" />
            </ImageUploadButton>
            <SendButton onClick={handleSend}>
                <FiSend size="24px" />
            </SendButton>
        </InputContainer>
    );
};

export default MessageInput;
