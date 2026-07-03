import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Main from "./containers/Main";
import { GlobalStyles } from "./global";
import { ThemeContextProvider, ThemeContext } from "./contexts/ThemeContext";

function AppContent() {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={currentTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

export default App;
