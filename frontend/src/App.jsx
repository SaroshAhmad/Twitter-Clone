import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center py-6 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Home />
    </div>
  )
}

export default App




{/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */ }