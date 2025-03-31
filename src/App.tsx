import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaul";
import { GlobalStyle } from "./styles/global";

import Header from "./components/Header/Header";

import { RegistersProvider } from "./contexts/RegistersContext";

import Registers from "./pages/Registers";
import RegisterForm from "./pages/RegisterForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header></Header>
      <RegistersProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Registers />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </Router>
      </RegistersProvider>
    </ThemeProvider>
  );
}

export default App;
