// import { useState } from 'react'
import App from './App'
import StyleContext from './StyleContext'

function MainApp() {

  // const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <StyleContext isDarkMode={true}>
      <App />
    </StyleContext>
  )
}

export default MainApp
