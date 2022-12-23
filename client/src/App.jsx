import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Clients from './components/Clients'
import Header from './components/Header'
// import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    <div className="App container">
      <Clients/>
    </div>
    </>
  )
}

export default App
