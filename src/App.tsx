import {Header,Footer} from './components'
import { SearchPage, ProductPage ,NotFound,MainPage,CollectionPage } from './pages'
import { linkObj } from './types'
import AuthPage from './pages/AuthPage'
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom'




function App() {

  const links:linkObj[] = [
    {title:"Home",url:'/'},
    {title:"Products",url:'/products'},
    {title:"About",url:'/about'},
    {title:"Contact",url:'/contact'},
  ]

  return (
    <Router>
        <div className='min-h-screen flex flex-col bg-fill'>
        <Header links={links}/><br />
        
        <main className='my-8 flex-1 flex flex-col gap-4 self-center px-2 w-full max-w-5xl'>
          <Routes>
            <Route path='/' element = {<MainPage />} />
            <Route path='/product/:id/*' element = {<ProductPage />} />
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
