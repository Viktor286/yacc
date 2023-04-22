import React, { useState } from 'react';
import styled from 'styled-components';

const HubListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background.main};
  padding: ${(props) => props.theme.spacing.md};
`;

const HubItem = styled.div`
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

const HubIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: ${(props) => props.theme.spacing.sm};
  border-radius: 50%;
`;

const HubName = styled.span`
  font-size: ${(props) => props.theme.typography.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
`;

const CreateHubButton = styled.button`
  align-self: flex-start;
  background-color: ${(props) => props.theme.colors.accent.main};
  color: ${(props) => props.theme.utils.contrastText(props.theme.colors.accent.main)};
  border: none;
  border-radius: ${(props) => props.theme.spacing.xs};
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  margin-top: auto;
`;

const HubList = ({ hubs, onHubSelect = () => {}, onCreateHub = () => {}}) => {
    const [selectedHub, setSelectedHub] = useState(hubs[0]);
    return (
        <HubListContainer>
            {hubs.map((hub) => (
                <HubItem
                    key={hub.id}
                    selected={hub.id === selectedHub.id}
                    onClick={() => onHubSelect(hub)}
                >
                    <HubIcon src={hub.icon} alt={`${hub.name} icon`} />
                    <HubName>{hub.name}</HubName>
                </HubItem>
            ))}
            <CreateHubButton onClick={onCreateHub}>Create Hub</CreateHubButton>
        </HubListContainer>
    );
};

export default HubList;

