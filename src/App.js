import {useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components';

import themes from './themes';
import GlobalStyles from './globalStyles';
import AppBar from './components/AppBar';
import SearchBar from './components/SearchBar';

const searchEngines = {
    "google": "https://www.google.com/search",
    "bing": "https://www.bing.com/search",
    "duckduckgo": "https://www.duckduckgo.com/"
}


function App() {

  // React State that will store the theme 
  // information from the local storage
  const [theme, setTheme] = useState(
      localStorage.getItem('theme') || 'light');
  
  const [searchEngine, setSearchEngine] = useState(
      localStorage.getItem('searchEngine') || 'google');

  // use Effect to change the theme inside the 
  // local storage whenever the theme is changed
  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('searchEngine', searchEngine);
  }, [theme])

  return (
    // Theme Provider from styled components that will send
    // the theme information from the themes.js file to all the
    // styled comonents as props which will help to change the styles
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles/>
      {/* the theme and the set theme are passed to change the theme*/}
        <AppBar theme={theme} setTheme={setTheme}/>
        <SearchBar searchEngine={searchEngine} searchEngines={searchEngines}/>
    </ThemeProvider>
  );
}

export default App;
