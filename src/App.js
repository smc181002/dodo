import {useState} from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';

import themes from './themes';
import AppBar from './components/AppBar';


function App() {
  const [theme, setTheme] = useState('light');

  const GlobalStyles = createGlobalStyle`
  body, .App {
    background-color: ${({theme}) => theme.pageBackground};
    color: ${({theme}) => theme.textColor};
    transition: 0.2s ease-in-out;
  }
  `;
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles/>
        <AppBar theme={theme} setTheme={setTheme}/>
        <div className="App">
          Hello There!
        </div>
    </ThemeProvider>
  );
}

export default App;
