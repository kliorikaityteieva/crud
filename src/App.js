import './App.css';
import {useState as state, useEffect as effect} from 'react'
import http from "./plugins/Fetch"
import Upload from "./components/Upload";
import Consumer from "./components/Consumer";

function App() {
  const [consumers, setConsumers] = state([])

  effect(() => {
    http.get('/all').then(res => {
      setConsumers(res.consumers)
    })
  }, [])


  return (
      <div className="App">
        <Upload set={setConsumers}/>
        <div className="m-20">
          {consumers.map((prod, index) =>
              <Consumer key={index}
                       prod={prod}
                       set={setConsumers}
              />
          )}
        </div>
      </div>
  );
}

export default App;