import HomePage from './pages/HomePage'
import ProductList from './pages/ProductList'
import AboutUs from './pages/AboutUs'
import DefaultLayout from './layout/DefaultLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'
import { BudgetProvider } from "./context/BudgetContext";

function App() {

  return (
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={HomePage} />
            <Route path='/product'>
              <Route path='' Component={ProductList} />
              <Route path=':id' Component={ProductDetail} />
            </Route>
            <Route path='/about-us' Component={AboutUs} />
            <Route path="*" Component={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetProvider>

  )
}

export default App
