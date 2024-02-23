import './App.css'
import { Route, Routes } from 'react-router-dom'
import Books from './comp/books'
import Forms from './comp/form'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Books/>}/>
        <Route path='/register' element={<Forms/>}/>
      </Routes>
    </>
  )
}

export default App
