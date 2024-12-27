import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import ImportSeed from './pages/ImportSeed'
import GenerateSeed from './pages/GenerateSeed'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/import' element={<ImportSeed/>} />
          <Route path='/generate' element={<GenerateSeed/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
