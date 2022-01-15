import React from 'react'
import './Assets/common.css'
import GlobalStyle from './Assets/GlobalStyle'
import Second from './Components/Draggable/Second'
import Third from './Third'

const App = (props: {}) => {

  return (
    <>
      <GlobalStyle />
      <Third />
    </>
  )
}

export default App
