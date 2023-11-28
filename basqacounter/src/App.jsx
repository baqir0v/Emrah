import { Countprovider } from '../../salamqaqa/src/context/Countcontext'
import HomePage from '../../salamqaqa/src/pages/Home'
import './App.css'

function App() {

  return (
    <>
      <Countprovider>
        <HomePage/>
      </Countprovider>
    </>
  )
}

export default App
