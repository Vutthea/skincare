import logo from './logo.svg';
import './App.css';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import RoutePage from './routePage';
import Home from './pages/Home';
import AboutAs from'./pages/AboutAs';
import Product from './pages/Product';
import Context from './pages/Context';
import Register from './pages/Register';


function App() {
  return (
  
   <BrowserRouter>
    <RoutePage />
    <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<AboutAs />} path='/aboutas' />
        <Route element={<Product />} path='/product' />
        <Route element={<Context />} path='/context' />
        <Route element={<Register />} path='/register' />
        <Route element={<Home />} path='/' />

        {/* <Route path="/Register" component={Register} />
        <Route path="/" component={RoutePage} /> */}
    </Routes>
   </BrowserRouter>
  );
}

export default App;
