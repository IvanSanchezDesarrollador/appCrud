import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//Punto de acceso a la Api
const endpoint = 'http://localhost:8000/api';


export const ShowProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await axios.get(`${endpoint}/products`);
    setProducts(response.data);
  }


  const deleteProducts = async (id) => {
    await axios.delete(`${endpoint}/product/${id}`);
    getAllProducts();
  }



  return (
    <div>
      <div className='d-grid gap2'>
        <Link to='/create' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
      </div>

      <table className='table table-striped'>
        <thead className='bg-primary text-white'>
          <tr>
            <th>Descripcion</th>
            <th>Prince</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((e)=>(
            <tr key={e.id}>
              <td>{e.descripcion}</td>
              <td>{e.price}</td>
              <td>{e.stock}</td>
              <td>
                <Link to={`/edit/${e.id}`} className='btn btn-warning'> Editar </Link>
                <button onClick={()=> deleteProducts(e.id)} className='btn btn-danger'>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
