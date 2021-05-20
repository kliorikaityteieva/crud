import './App.css';
import {useState as state, useEffect as effect} from 'react'
import http from "./plugins/Fetch"
import Upload from "./components/Upload";
import Consumer from "./components/User";

function App() {
  const [users, setUsers] = state([])

  effect(() => {
    http.get('/all').then(res => {
      setUsers(res.users)
    })
  }, [])


  return (
      <div className="App">
        <Upload set={setUsers}/>
        <div className="m-20">
          {users.map((prod, index) =>
              <Consumer key={index}
                       user={users}
                       set={setUsers}
              />
          )}
        </div>
      </div>
  );
}

export default App;