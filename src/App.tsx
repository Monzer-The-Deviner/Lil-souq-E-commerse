import {Header,Footer, CartSide} from './components'
import { SearchPage, ProductPage ,NotFound,MainPage,CollectionPage, AboutPage } from './pages'
import { linkObj } from './types'
import AuthPage from './pages/AuthPage'
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'




function App() {

  const links:linkObj[] = [
    {title:"Home",url:'/'},
    {title:"Products",url:'/products'},
    {title:"About",url:'/about'},
    
  ]

  return (
    <Router>
        <div className='min-h-screen flex flex-col bg-fill'>
        <CartSide />
        <Header links={links}/><br />
        
        <main className='my-8 flex-1 flex flex-col gap-4 self-center overflow-hidden px-2 w-full max-w-5xl'>
          <Routes>
            <Route path='/' element = {<MainPage />} />
            <Route path='/about' element = {<AboutPage />} />
            <Route path='/product/:id/*' element = {<ProductPage />} />
            <Route path='/products' element = {<ProductsPage />} />
            <Route path='/collection/:id/*' element = {<CollectionPage />} />
            <Route path='/auth' element = {<AuthPage />} />
            <Route path='/search' element = {<SearchPage  />} />
            <Route path='*' element = {<NotFound />} />
          </Routes>
        </main>
        <br /><br />
        <Footer />
        </div>
    </Router>
  )
}

export default App
