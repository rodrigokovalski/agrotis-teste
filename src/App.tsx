import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaul";
import { GlobalStyle } from "./styles/global";
import Header from "./components/Header/Header";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header></Header>
    </ThemeProvider>
  );
}

export default App;
