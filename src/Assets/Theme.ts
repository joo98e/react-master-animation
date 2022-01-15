import { DefaultTheme } from 'styled-components';

const dark: DefaultTheme = {
    textColor: '#222222',
    accentColor: "#44bd32",
    btnColor: '#2e3341',
    boardColor: "#DADFE9",
    cardColor: "white",
    bgDefaultColor: "#FFFFFF",
    bgSecondaryColor: '#353b48',
    borderColor: '#2e3341',
    borderAccentColor: "#4b9440",
    boardHoverColor: "rgba(0, 0, 0, 0.2)"
}

const white: DefaultTheme = {
    textColor: '#333333',
    accentColor: "#000000",
    btnColor: '#E2E2E2',
    bgDefaultColor: '#FDFDFD',
    bgSecondaryColor: '#EDEDED',
    borderColor: '#000',
    borderAccentColor: "#4b9440",
}

const theme = {
    white: white,
    dark: dark
}

export default theme;