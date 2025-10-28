import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/page'
import Layout from './pages/page'

function App() {

  return (<BrowserRouter>
    <Routes> 
        <Route path='/*' element={<Layout/>}>
          <Route index element={<Home/>} />
        </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
