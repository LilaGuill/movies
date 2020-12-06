import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import App from "./App"
import store from "./app/store"
import * as serviceWorker from "./serviceWorker"
import GlobalStyle from "./styles/globalstyle"
import "./styles/index.css"

const theme = {
  primaryColor: "#0a043c",
  secondaryColor: "#03506f",
  redColor: "#ed2654",
  lightGrey: "#f6f9fb",
  mediumGrey: "#e4edf3",
  darkenGrey: "#D3E2EB",
  borderRadius: "20px",
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
