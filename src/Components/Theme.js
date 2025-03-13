import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  background: "#F4F6FC",
  cardBg: "#FFFFFF",
  text: "#333333",
  secondaryText: "#A1A5B7",
  buttonColor: "#7B78F0",
  buttonHover: "#6B66E3",
  shadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
};

export const darkTheme = {
  background: "#181818",
  cardBg: "#252525",
  text: "#FFFFFF",
  secondaryText: "#A1A5B7",
  buttonColor: "#7B78F0",
  buttonHover: "#6B66E3",
  shadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
};


export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;
