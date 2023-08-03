import { StyledEngineProvider } from "@mui/material";
import ReactDOM from "react-dom";
import App from "./app/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>,
  rootElement
);
