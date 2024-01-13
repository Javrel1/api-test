import React, {useEffect, useState} from 'react';
import {Main} from "./components/Main";
import axios from "axios";
import {IProduct} from "./model";

function App() {

  const [products, setProducts] = useState<IProduct[]>([])

  async function Async(){
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
    setProducts(response.data)
  }


  useEffect(()=>{
    Async()
  }, [])


  return (
    <div className="App">
        {products.map(products => <Main product={products} key={products.id} />)}
    </div>
  );
}

export default App;
