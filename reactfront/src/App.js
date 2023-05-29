
import './App.css';
import { CrearProduct } from './components/CrearProduct';
import { EditProduct } from './components/EditProduct';
import { ShowProducts } from './components/ShowProducts';


import { BrowserRouter, Routes , Route } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<ShowProducts></ShowProducts>}></Route>
        <Route path='/create' element={<CrearProduct></CrearProduct>}></Route>
        <Route path='/edit/:id' element={<EditProduct></EditProduct>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
