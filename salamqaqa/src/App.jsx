import { Countprovider } from './context/Countcontext'
import './App.css'
import HomePage from './pages/Home'

function App() {

  return (
    <>
      <Countprovider>
        <HomePage />
      </Countprovider>
    </>
  )
}

export default App
