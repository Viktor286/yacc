import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
display: flex;
align-items: center;
background-color: ${(props) => props.theme.colors.background.dark};
border-radius: ${(props) => props.theme.spacing.xs};
padding: ${(props) => props.theme.spacing.sm};
`;

const SearchIcon = styled.span`
margin-right: ${(props) => props.theme.spacing.sm};
`;

const SearchInput = styled.input`
background-color: transparent;
border: none;
color: ${(props) => props.theme.colors.text.primary};
font-size: ${(props) => props.theme.typography.fontSize};
width: 100%;

&:focus {
    outline: none;
}
`;

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSearch}>
            <SearchBarContainer>
                <SearchIcon>🔍</SearchIcon>
                <SearchInput
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </SearchBarContainer>
        </form>
    );
};

export default SearchBar;
