import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
z-index: 100;
`;

const ModalContent = styled.div`
background-color: ${(props) => props.theme.colors.background.main};
padding: ${(props) => props.theme.spacing.md};
border-radius: ${(props) => props.theme.spacing.xs};
width: 400px;
max-width: 100%;
`;

const ModalTitle = styled.h2`
margin: 0 0 ${(props) => props.theme.spacing.md} 0;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;

const InputField = styled.input`
margin-bottom: ${(props) => props.theme.spacing.md};
padding: ${(props) => props.theme.spacing.sm};
border: 1px solid ${(props) => props.theme.colors.text.muted};
border-radius: ${(props) => props.theme.spacing.xs};
font-size: ${(props) => props.theme.typography.fontSize};
`;

const CreateHubButton = styled.button`
background-color: ${(props) => props.theme.colors.primary.main};
color: ${(props) => props.theme.utils.contrastText(props.theme.colors.primary.main)};
border: none;
border-radius: ${(props) => props.theme.spacing.xs};
padding: ${(props) => props.theme.spacing.sm};
cursor: pointer;
font-size: ${(props) => props.theme.typography.fontSize};
font-weight: ${(props) => props.theme.typography.fontWeightRegular};
`;

const CreateHubModal = ({ isVisible, onCreateHub, onClose }) => {
    if (!isVisible) return null;

    return (
        <ModalBackground onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalTitle>Create Hub</ModalTitle>
                <Form onSubmit={onCreateHub}>
                    <InputField type="text" placeholder="Hub Name" />
                    <CreateHubButton>Create</CreateHubButton>
                </Form>
            </ModalContent>
        </ModalBackground>
    );
};

export default CreateHubModal;
