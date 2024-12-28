import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import ImportSeed from './pages/ImportSeed'
import GenerateSeed from './pages/GenerateSeed'
import Wallet from './pages/Wallet'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/import' element={<ImportSeed/>} />
          <Route path='/generate' element={<GenerateSeed/>} />
          <Route path='/wallet' element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
