import { useState } from 'react'
import App from './App'
import StyleContext from './StyleContext'

function MainApp() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  console.log(isDarkMode)

  return (
    <StyleContext isDarkMode={isDarkMode}>
      <App setIsDarkMode={setIsDarkMode}/>
    </StyleContext>
  )
}

export default MainApp
