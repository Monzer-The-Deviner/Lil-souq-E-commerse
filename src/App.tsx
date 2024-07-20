import {Header} from './components'
import { LandingPage,HomePage, Footer } from './pages'
function App() { 
  const isLoggedIn: boolean = false
  return (
    <>
    <Header /><br />
    <main>

      {isLoggedIn? <LandingPage /> : <HomePage /> }
    </main>
    <Footer />
    </>      
  )
}

export default App
