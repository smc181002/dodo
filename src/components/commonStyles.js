import styled from 'styled-components';

// ThemeWrapper which has the basic color bad background color rules
const ThemeWrapper = styled.div`
  background-color: ${({theme}) => theme.pageBackground};
  color: ${({theme}) => theme.textColor};
  transition: 0.2s ease-in-out;
`;

export {ThemeWrapper};
