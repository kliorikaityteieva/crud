import './App.css';
import {useState as state, useEffect as effect} from 'react'
import http from "./plugins/Fetch"
import Upload from "./components/Upload";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = state([])

  effect(() => {
    http.get('/all').then(res => {
      setProducts(res.products)
    })
  }, [])


  return (
      <div className="App">
        <Upload set={setProducts}/>
        <div className="m-20">
          {products.map((prod, index) =>
              <Product key={index}
                       prod={prod}
                       set={setProducts}
              />
          )}
        </div>
      </div>
  );
}

export default App;