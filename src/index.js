import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import * as serviceWorker from "./serviceWorker"
import App from "./App"
import store from "./app/store"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/globalstyle"
import { theme } from "./styles/theme"
import "./styles/index.css"

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

serviceWorker.unregister()
