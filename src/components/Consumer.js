import React from 'react';
import http from "../plugins/Fetch"

function Consumer({prod, set}) {

    const del = () => {
        http.get('/delete/'+prod._id).then(res => {
            set(res.consumers)
        })
    }

    const update = (side) => {
        http.get(`/update/${side}/${prod._id}/${prod.quantity}`).then(res => {
            set(res.consumers)
        })
    }

    return (
        <div className="d-flex prod">
            <div>Vardas: {prod.name}</div>
            <div className="d-flex">
                <button onClick={() => update('minus')}>Minus</button>
                <div>Amžius: {prod.age}</div>
                <button onClick={() => update('plus')}>Plus</button>
            </div>
            <div>El.paštas: {prod.email}</div>
            <div>Slaptažodis: {prod.password}</div>

            <button onClick={del}>Delete</button>
            <button onClick={ed}>Edit</button>
        </div>
    );
}

export default Consumer;