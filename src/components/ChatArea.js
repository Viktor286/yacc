import React from 'react';
import styled from 'styled-components';

const ChatAreaContainer = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
padding: ${(props) => props.theme.spacing.md};
overflow-y: auto;
`;

const EventContainer = styled.div`
display: flex;
flex-direction: column;
align-items: ${(props) => (props.sent ? 'flex-end' : 'flex-start')};
margin-bottom: ${(props) => props.theme.spacing.md};
`;

const ChatBubble = styled.div`
display: flex;
flex-direction: column;
background-color: ${(props) =>
    props.sent ? props.theme.colors.primary.main : props.theme.colors.background.light};
color: ${(props) =>
    props.sent
        ? props.theme.utils.contrastText(props.theme.colors.primary.main)
        : props.theme.utils.contrastText(props.theme.colors.background.light)};
padding: ${(props) => props.theme.spacing.md};
border-radius: ${(props) => props.theme.spacing.xs};
max-width: 70%;
`;

const SenderInfo = styled.div`
display: flex;
align-items: center;
margin-bottom: ${(props) => props.theme.spacing.sm};
`;

const SenderAvatar = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
margin-right: ${(props) => props.theme.spacing.sm};
`;

const SenderName = styled.span`
font-weight: ${(props) => props.theme.typography.fontWeightBold};
margin-right: ${(props) => props.theme.spacing.sm};
`;

const Timestamp = styled.span`
font-size: ${(props) => props.theme.typography.fontSizeSmall};
`;

const EventMessage = styled.p`
margin: 0;
`;

const EventImage = styled.img`
max-width: 100%;
cursor: pointer;
`;

const ChatArea = ({ events, onImageClick = () => {} }) => {
    return (
        <ChatAreaContainer>
            {events.map((event) => (
                <EventContainer key={event.id} sent={event.sent}>
                    <ChatBubble sent={event.sent}>
                        <SenderInfo>
                            <SenderAvatar src={event.sender.avatar} alt={`${event.sender.name} avatar`} />
                            <SenderName>{event.sender.name}</SenderName>
                            <Timestamp>{event.timestamp}</Timestamp>
                        </SenderInfo>
                        <EventMessage>{event.message}</EventMessage>
                        {event.image && (
                            <EventImage src={event.image} alt="Event image" onClick={() => onImageClick(event.image)} />
                        )}
                    </ChatBubble>
                </EventContainer>
            ))}
        </ChatAreaContainer>
    );
};

export default ChatArea;
