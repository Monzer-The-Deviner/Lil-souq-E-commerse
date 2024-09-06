import { useState } from 'react'
import {Header,Footer} from './components'
import { SearchPage, ProductPage ,NotFound } from './pages'
import { linkObj } from './types'
import { productsData } from './assets/data'
import AuthPage from './pages/AuthPage'
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './store'
import MainPage from './pages/Mainpage'


function App() { 
  const [selectedProd] = useState(productsData(10)[0])
  const isLoggedIn= useSelector((state:RootState)=>state.auth.isLoggedIn)
  console.log(isLoggedIn);
  
  const links:linkObj[] = [
    {title:"home",url:'/'},
    {title:"products",url:'/products'},
    {title:"about",url:'/about'},
    {title:"contact",url:'/contact'},
  ]
  const searched = 'some words'
  return (
    <Router>
        <div className='min-h-screen flex flex-col bg-fill'>
        <Header links={links}/><br />
        <main className='mt-4 flex-1 flex flex-col gap-4 self-center px-2 w-full max-w-5xl'>
        
          <Routes>
            <Route path='/' element = {<MainPage />} />
            <Route path='/product' element = {<ProductPage selectedProd={selectedProd} />} />
            <Route path='/auth' element = {<AuthPage />} />
            <Route path='/search' element = {<SearchPage searched={searched} />} />
            <Route path='*' element = {<NotFound />} />          
          </Routes>
        
        </main>
        <Footer />
        </div>      
    </Router>
  )
}

export default App
