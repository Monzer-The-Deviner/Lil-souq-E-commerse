import { useState } from 'react'
import {Header,Footer} from './components'
import { LandingPage,HomePage, SearchPage, ProductPage  } from './pages'
import { linkObj } from './types'
import { productsData } from './assets/data'
import AuthPage from './pages/AuthPage'
function App() { 
  const [selectedProd] = useState(productsData()[0])
  const isLoggedIn: boolean = true
  const links:linkObj[] = [
    {title:"home",url:'#'},
    {title:"products",url:'#'},
    {title:"about",url:'#'},
    {title:"contact",url:'#'},
  ]
  return (
    <div className='min-h-screen flex flex-col bg-fill'>
    <Header links={links}/><br />
    <main className=' mt-8 flex-1 flex flex-col gap-4 self-center p-2 w-full max-w-5xl'>

      {isLoggedIn? 
      <AuthPage />
      // <ProductPage selectedProd={selectedProd} />
      // <SearchPage searched={'nice'} />
      //  <LandingPage /> 
       : <HomePage /> }
    </main>
    <Footer />
    </div>      
  )
}

export default App
