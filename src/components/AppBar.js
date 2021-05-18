import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';

import {ThemeWrapper} from './commonStyles';

// AppBarRoot components as a wrapper for 
// application of the theme from ThemeProvider

// ThemeWrapper is a styled component which has the basic
// background color and textColor update according to the ThemeProvider
const AppBarRoot = styled(ThemeWrapper)`
  display: flex;
  place-items: center;
  background-color: ${({theme}) => theme.pageBackground};
  height: 80px;
  justify-content: flex-end;
`;

// ThemeProvider to change the colors of incons in the
// actions and some alignment css rules 
const Actions = styled(ThemeWrapper)`
  display: flex;
  place-items: center;
  height: 80px;
  justify-content: space-around;
  margin-right: 10px;
  & svg {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

function AppBar({theme, setTheme}) {
  return (
    <AppBarRoot>
      <Actions>
        <FeatherIcon style={{cursor: "pointer"}} icon={theme === 'light' ? "moon" : "sun"} 
            onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))} />

        <FeatherIcon style={{cursor: "pointer"}} icon="settings" />
      </Actions>
    </AppBarRoot>
  );
}

export default AppBar;
