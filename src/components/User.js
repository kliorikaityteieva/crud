import React from 'react';
import http from "../plugins/Fetch"

function User({user, set}) {

    const del = () => {
        http.get('/delete/'+user._id).then(res => {
            set(res.users)
        })
    }

    const update = (side) => {
        http.get(`/update/${side}/${user._id}/${user.name}`).then(res => {
            set(res.users)
        })
    }

    return (
        <div className="d-flex prod">
            <div>Vardas: {user.name}</div>
            <div className="d-flex">
                <button onClick={() => update('minus')}>Minus</button>
                <div>Amžius: {user.age}</div>
                <button onClick={() => update('plus')}>Plus</button>
            </div>
            <div>El.paštas: {user.email}</div>
            <div>Slaptažodis: {user.password}</div>

            <button onClick={del}>Delete</button>
        </div>
    );
}

export default User;