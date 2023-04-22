import React from 'react';
import styled from 'styled-components';

const EventThreadContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background.dark};
  padding: ${(props) => props.theme.spacing.md};
  overflow-y: auto;
`;

const OriginalEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.utils.contrastText(props.theme.colors.primary.main)};
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.spacing.xs};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const OriginalEventInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

const OriginalEventAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: ${(props) => props.theme.spacing.sm};
`;

const OriginalEventSenderName = styled.span`
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  margin-right: ${(props) => props.theme.spacing.sm};
`;

const OriginalEventTimestamp = styled.span`
  font-size: ${(props) => props.theme.typography.fontSizeSmall};
`;

const OriginalEventMessage = styled.p`
  margin: 0;
`;

const ReplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.sent ? 'flex-end' : 'flex-start')};
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

const ReplyBubble = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.sent ? props.theme.colors.secondary.main : props.theme.colors.background.light};
  color: ${(props) =>
    props.sent
        ? props.theme.utils.contrastText(props.theme.colors.secondary.main)
        : props.theme.utils.contrastText(props.theme.colors.background.light)};
  padding: ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.spacing.xs};
  max-width: 80%;
`;

const ReplyInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

const ReplyAvatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: ${(props) => props.theme.spacing.xs};
`;

const ReplySenderName = styled.span`
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  margin-right: ${(props) => props.theme.spacing.xs};
`;

const ReplyTimestamp = styled.span`
  font-size: ${(props) => props.theme.typography.fontSizeSmall};
`;

const ReplyMessage = styled.p`
  margin: 0;
`;

const EventThreadArea = ({ originalEvent, replies }) => {
    return (
        <EventThreadContainer>
            <OriginalEventContainer>
                <OriginalEventInfo>
                    <OriginalEventAvatar src={originalEvent.sender.avatar} alt={`${originalEvent.sender.name} avatar`} />
                    <OriginalEventSenderName>{originalEvent.sender.name}</OriginalEventSenderName>
                    <OriginalEventTimestamp>{originalEvent.timestamp}</OriginalEventTimestamp>
                </OriginalEventInfo>
                <OriginalEventMessage>{originalEvent.message}</OriginalEventMessage>
            </OriginalEventContainer>
            {replies.map((reply) => (
                <ReplyContainer key={reply.id} sent={reply.sent}>
                    <ReplyBubble sent={reply.sent}>
                        <ReplyInfo>
                            <ReplyAvatar src={reply.sender.avatar} alt={`${reply.sender.name} avatar`} />
                            <ReplySenderName>{reply.sender.name}</ReplySenderName>
                            <ReplyTimestamp>{reply.timestamp}</ReplyTimestamp>
                        </ReplyInfo>
                        <ReplyMessage>{reply.message}</ReplyMessage>
                    </ReplyBubble>
                </ReplyContainer>
            ))}
        </EventThreadContainer>
    );
};

export default EventThreadArea;
