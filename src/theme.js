// theme.js

// Color palette
const colors = {
    primary: {
        main: '#2C3E50',
        light: '#34495E',
        dark: '#243342',
    },
    secondary: {
        main: '#2980B9',
        light: '#3498DB',
        dark: '#206A99',
    },
    accent: {
        main: '#E74C3C',
        light: '#F06A5D',
        dark: '#C0382B',
    },
    background: {
        main: '#F2F2F2',
        light: '#FAFAFA',
        dark: '#E0E0E0',
    },
    text: {
        primary: '#333',
        secondary: '#555',
        muted: '#999',
    },
};

// Typography
const typography = {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
};

// Spacing
const spacing = {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
};

// Responsive breakpoints
const breakpoints = {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1440px',
};

// Utility functions
const utils = {
    // Mix two colors
    mixColors: (color1, color2, weight) => {
        // ...implementation
    },

    // Generate box shadows
    boxShadow: (elevation) => {
        // ...implementation
    },

    // Get a contrasting text color for a given background color
    contrastText: (backgroundColor) => {
        // ...implementation
    },
};

const theme = {
    colors,
    typography,
    spacing,
    breakpoints,
    utils,
};

export default theme;
