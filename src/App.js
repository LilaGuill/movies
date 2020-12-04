import React from "react"
import Movies from "./components/movies/Movies"
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <header>Movies List</header>
      <Movies />
      <footer>Footer</footer>
    </div>
  )
}

export default App
