import React from 'react'
import './Assets/common.css'
import GlobalStyle from './Assets/GlobalStyle'
import Second from './Components/Draggable/Second'
import Eighth from './Components/Eighth'
import Fifth from './Components/Fifth'
import Fourth from './Components/Fourth'
import Ninth from './Components/Ninth'
import Seventh from './Components/Seventh'
import Third from './Components/Third'


const App = (props: {}) => {

  return (
    <>
      <GlobalStyle />
      <Ninth />
      <Eighth />
      <Seventh />
      <Fifth /> {/* with sixth */}
      <Fourth />
      <Third />
    </>
  )
}

export default App
