import React, {useState} from 'react';
import styled from 'styled-components';

const StreamListContainer = styled.div`
display: flex;
flex-direction: column;
width: 240px;
height: 100%;
background-color: ${(props) => props.theme.colors.background.light};
padding: ${(props) => props.theme.spacing.md};
`;

const StreamItem = styled.div`
display: flex;
align-items: center;
padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
margin-bottom: ${(props) => props.theme.spacing.sm};
border-radius: ${(props) => props.theme.spacing.xs};
cursor: pointer;

${(props) =>
    props.selected &&
    `
  background-color: ${props.theme.colors.accent.light};
color: ${props.theme.utils.contrastText(props.theme.colors.accent.light)};
`}
`;

const StreamIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: ${(props) => props.theme.spacing.sm};
  border-radius: 50%;
`;

const StreamName = styled.span`
  font-size: ${(props) => props.theme.typography.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
`;

const UnreadCount = styled.span`
  margin-left: auto;
  background-color: ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.utils.contrastText(props.theme.colors.primary.main)};
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  border-radius: ${(props) => props.theme.spacing.xs};
  padding: 0 ${(props) => props.theme.spacing.xs};
`;

const CreateStreamButton = styled.button`
  align-self: flex-start;
  background-color: ${(props) => props.theme.colors.secondary.main};
  color: ${(props) => props.theme.utils.contrastText(props.theme.colors.secondary.main)};
  border: none;
  border-radius: ${(props) => props.theme.spacing.xs};
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  margin-top: auto;
`;

const StreamList = ({ streams, onStreamSelect, onCreateStream }) => {
    const [selectedStream, setSelectedStream] = useState(streams[0]);

    return (
        <StreamListContainer>
            {streams.map((stream) => (
                <StreamItem
                    key={stream.id}
                    selected={stream.id === selectedStream.id}
                    onClick={() => onStreamSelect(stream)}
                >
                    {stream.icon && <StreamIcon src={stream.icon} alt={`${stream.name} icon`} />}
                    <StreamName>{stream.name}</StreamName>
                    {stream.unreadCount > 0 && <UnreadCount>{stream.unreadCount}</UnreadCount>}
                </StreamItem>
            ))}
            <CreateStreamButton onClick={onCreateStream}>Create Stream</CreateStreamButton>
        </StreamListContainer>
    );
};

export default StreamList;
