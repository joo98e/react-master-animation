import React from 'react'
import './Assets/common.css'
import GlobalStyle from './Assets/GlobalStyle'
import Second from './Components/Draggable/Second'
import Fifth from './Components/Fifth'
import Fourth from './Components/Fourth'
import Seventh from './Components/Seventh'
import Third from './Components/Third'


const App = (props: {}) => {

  return (
    <>
      <GlobalStyle />
      <Seventh />
      <Fifth /> {/* with sixth */}
      <Fourth />
      <Third />
    </>
  )
}

export default App
