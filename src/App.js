import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Products from './components/Products';
import ShowProd from './components/ShowProd';
import Category from './components/Category';
import NewProduct from './components/NewProduct';

function App() {
  return (
    <>
      <div className="container">
        <h2>Shopping App</h2>
        <Navigation />
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/showprod' Component={ShowProd}></Route>
          <Route path='/products' Component={Products}></Route>
          <Route path='/category' Component={Category}></Route>
          <Route path='/newproduct' Component={NewProduct}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;