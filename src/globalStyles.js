import {createGlobalStyle} from 'styled-components';

// Global Styles that need to be changed when the 
// `theme` state is changed
const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${({theme}) => theme.pageBackground};
    color: ${({theme}) => theme.textColor};
    transition: 0.2s ease-in-out;
  }
`;

export default GlobalStyles;
