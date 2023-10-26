/*import {useState} from 'react';

function ListaDeNotas(){
    return(
        <>

        <h1>Lista De Notas</h1>
        <input   type='text' placeholder="Nueva Nota" ></input>
        <button >Agregar Nota</button>
        </> 

    );
}
export default ListaDeNotas;*/

import React, { useState } from 'react';

function ListaDeNotas() {
  const [textArray, setTextArray] = useState([]);
  const [inputText, setInputText] = useState('');

  const addText = () => {
    if (inputText) {
      setTextArray([...textArray, inputText]);
      setInputText('');
    }
  };

  const deleteText = (i) => {
    const newArray = [...textArray];
    newArray.splice(i, 1);
    setTextArray(newArray);
  };

  return (
    <div>
      <h1>Lista de Notas</h1>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addText}>Agregar Nota</button>
      </div>
      <ul>
        {textArray.map((text, i) => (
          <li key={i}>
            {text}
            <button onClick={() => deleteText(i)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeNotas;