import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;

const LoadingIndicatorContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`;

const Spinner = styled.div`
width: 50px;
height: 50px;
border: 4px solid ${(props) => props.theme.colors.background.main};
border-top-color: ${(props) => props.theme.colors.primary.main};
border-radius: 50%;
animation: ${rotate} 1s linear infinite;
`;

const LoadingIndicator = () => (
    <LoadingIndicatorContainer>
        <Spinner />
    </LoadingIndicatorContainer>
);

export default LoadingIndicator;
