import {useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components';

import themes from './themes';
import GlobalStyles from './globalStyles';
import AppBar from './components/AppBar';
import SearchBar from './components/SearchBar';

function App() {

  // React State that will store the theme 
  // information from the local storage
  const [theme, setTheme] = useState(
      localStorage.getItem('theme') || 'light');

  // use Effect to change the theme inside the 
  // local storage whenever the theme is changed
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])

  return (
    // Theme Provider from styled components that will send
    // the theme information from the themes.js file to all the
    // styled comonents as props which will help to change the styles
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles/>
      {/* the theme and the set theme are passed to change the theme*/}
        <AppBar theme={theme} setTheme={setTheme}/>
        <SearchBar />
    </ThemeProvider>
  );
}

export default App;
