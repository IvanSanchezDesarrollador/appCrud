import React ,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const endpoint = 'http://localhost:8000/api/product/';


export const EditProduct = () => {
  const [descripcion, setDescripcion] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();
  const {id} = useParams()

  const update = async (e) =>{
    e.preventDefault();
    await axios.put(`${endpoint}${id}`,{
      descripcion:descripcion,
      price:price,
      stock: stock
    });
    navigate('/');
  }

  useEffect(()=>{
    const getProductById = async () =>{
      const response = await axios.get(`${endpoint}${id}`)
      setDescripcion(response.data.descripcion);
      setPrice(response.data.price);
      setStock(response.data.stock);
    }
    getProductById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>
      <h3>Edit Product</h3>
      <form onSubmit={update}>

        <div className="mb-3">
          <label className="from-label"> Descripcion</label>
          <input 
          value={descripcion}
          onChange={(e)=>setDescripcion(e.target.value)}
          type="text"
          className="form-control"
          ></input>
        </div>

        <div className="mb-3">
          <label className="from-label">Precio</label>
          <input 
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          type="number"
          className="form-control"
          ></input>
        </div>

        <div className="mb-3">
          <label className="from-label">Stock</label>
          <input 
          value={stock}
          onChange={(e)=>setStock(e.target.value)}
          type="text"
          className="form-control"
          ></input>
        </div>

        <button type="submit" className="btn btn-primary"> Crear</button>

      </form>
    </div>
  )
}
