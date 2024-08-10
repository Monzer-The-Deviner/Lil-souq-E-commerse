import {Header,Footer} from './components'
import { LandingPage,HomePage,  } from './pages'
import { linkObj } from './types'
function App() { 
  const isLoggedIn: boolean = true
  const links:linkObj[] = [
    {title:"home",url:'#'},
    {title:"products",url:'#'},
    {title:"about",url:'#'},
    {title:"contact",url:'#'},
  ]
  return (
    <div className='min-h-screen flex flex-col bg-[#F5FBF9]'>
    <Header links={links}/><br />
    <main className=' mt-8 flex-1 flex flex-col gap-4 self-center p-2 w-full max-w-5xl'>

      {isLoggedIn? <LandingPage /> : <HomePage /> }
    </main>
    <Footer />
    </div>      
  )
}

export default App
