import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import store from "./app/store"
import { ThemeProvider } from "styled-components"
import * as serviceWorker from "./serviceWorker"
import GlobalStyle from "./styles/globalstyle"
import "./styles/index.css"

const theme = {
  primaryColor: "#0a043c",
  secondaryColor: "#03506f",
  redColor: "#EE225F",
  borderRadius: "6px",
  transition: "0.3s ease-in-out",
  boxShadow: "0 0 8px rgba(140, 140, 140, 0.1)",
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
