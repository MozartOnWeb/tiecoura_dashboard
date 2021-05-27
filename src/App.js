import React from 'react'
import {Switch, Route} from 'react-router-dom'

// Import Global Styles
import { createGlobalStyle, ThemeProvider } from "styled-components";

// Import Comonents
import PhotoSerie from './components/PhotoSerie'

// Import Pages
import Home from './pages/Home'

// Create Global Styles
const GlobalStyles = createGlobalStyle`

* {
  font-family: "Poppins";
}

html, body {

}

`


const Theme = {
  mainFont: "Poppins",
  linkFont: "Monument",
  red: "#E2293F",
  white: "#FFFDFF",
  black: "#161616",
  breakpoints: {
    s: "320px",
    xs: "375px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:serie" component={PhotoSerie} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
