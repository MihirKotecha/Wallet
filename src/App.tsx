import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import ImportSeed from './pages/ImportSeed'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/import' element={<ImportSeed/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
