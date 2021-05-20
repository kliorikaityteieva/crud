import {useRef as ref} from 'react';
import http from "../plugins/Fetch"

function Upload({set}) {
    const name = ref()
    const age = ref()
    const email = ref()
    const password = ref()

    const post = () => {
        const data = {
            name: name.current.value,
            age: age.current.value,
            email: email.current.value,
            password: password.current.value,
        }
        http.post('/upload', data).then(res => {
            set(res.users)
        })
    }

    return (
        <div>
            <input ref={name} type="text" placeholder="Vardas"/>
            <input ref={age} type="number" placeholder="Amžius"/>
            <input ref={email} type="text" placeholder="El.paštas"/>
            <input ref={password} type="text" placeholder="Slaptažodis"/>
            <button onClick={post}>Add user</button>
        </div>
    );
}

export default Upload;