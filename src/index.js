import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import * as serviceWorker from "./serviceWorker"
import store from "./app/store"
import App from "./App"
import { GlobalStyle } from "./styles/globalstyle"
import { theme } from "./styles/theme"

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
