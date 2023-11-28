import './App.css'
import { BasketProvider } from './context/Basket'
import HomePage from './pages/Home'

function App() {

  return (
    <>
      <BasketProvider>
        <HomePage></HomePage>
      </BasketProvider>
    </>
  )
}

export default App
