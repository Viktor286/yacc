import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: ${(props) => (props.isOpen ? 'flex' : 'none')};
align-items: center;
justify-content: center;
z-index: 9999;
`;

const ModalContent = styled.div`
width: 600px;
background-color: ${(props) => props.theme.colors.background.main};
border-radius: ${(props) => props.theme.spacing.md};
padding: ${(props) => props.theme.spacing.lg};
display: flex;
flex-direction: column;
`;

const ModalHeader = styled.h2`
font-size: ${(props) => props.theme.typography.fontSizeLarge};
margin-bottom: ${(props) => props.theme.spacing.lg};
`;

const ModalSection = styled.div`
margin-bottom: ${(props) => props.theme.spacing.lg};
`;

const ModalLabel = styled.label`
display: block;
font-weight: ${(props) => props.theme.typography.fontWeightBold};
margin-bottom: ${(props) => props.theme.spacing.sm};
`;

const ModalInput = styled.input`
width: 100%;
padding: ${(props) => props.theme.spacing.sm};
border-radius: ${(props) => props.theme.spacing.xs};
border: 1px solid ${(props) => props.theme.colors.text.muted};
`;

const ModalButton = styled.button`
align-self: flex-end;
background-color: ${(props) => props.theme.colors.accent.main};
color: ${(props) => props.theme.utils.contrastText(props.theme.colors.accent.main)};
border: none;
border-radius: ${(props) => props.theme.spacing.xs};
padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
cursor: pointer;
font-size: ${(props) => props.theme.typography.fontSize};
font-weight: ${(props) => props.theme.typography.fontWeightRegular};
`;

const UserSettingsModal = ({ isOpen, onClose, settings, onUpdateSettings }) => {
  const handleChange = (e) => {
    onUpdateSettings({ ...settings, [e.target.name]: e.target.value });
  };

  return (
    <ModalBackdrop isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>User Settings</ModalHeader>

        <ModalSection>
          <ModalLabel>Display Name</ModalLabel>
          <ModalInput
            type="text"
            name="displayName"
            value={settings.displayName}
            onChange={handleChange}
          />
        </ModalSection>

        <ModalSection>
          <ModalLabel>Avatar URL</ModalLabel>
          <ModalInput type="text" name="avatar" value={settings.avatar} onChange={handleChange} />
        </ModalSection>

        <ModalSection>
          <ModalLabel>Status Message</ModalLabel>
          <ModalInput
            type="text"
            name="statusMessage"
            value={settings.statusMessage}
            onChange={handleChange}
          />
        </ModalSection>

        {/* Add additional sections for appearance and notification settings */}

        <ModalButton onClick={onClose}>Save</ModalButton>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default UserSettingsModal;
