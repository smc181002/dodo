import styled from 'styled-components';

const ThemeWrapper = styled.div`
  color: ${({theme}) => theme.textColor};
  transition: 0.2s ease-in-out;
`;


export {ThemeWrapper};
