import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Input from './components/common/input'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Login />
    </div>
  )
}

export default App
