import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap'
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home.js';
import Cart from './components/Cart.js';
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Route path='/' exact component={Home} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
      </BrowserRouter>
    </div>
  )
}

export default App;
