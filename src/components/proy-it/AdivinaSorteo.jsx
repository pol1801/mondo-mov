import React, { useState } from 'react';
import './AdivinaSorteo.css';

function AdivinaSorteo() {
    const [numero, setNumero] = useState(1);
    const [sorteo, setSorteo] = useState(0);
    const [result, setResult] = useState(false);

    const sortear = () => {
        const ganador = Math.floor(Math.random() * 10 + 1);
        setSorteo(ganador);
        setResult(true) 
    }

    return (
        <div className="adivina-contenedor">
            {!result ?
            <div className="adivina">
                <h4>Jugar un numerito del 1 al 10</h4>
                <br></br>
                <input 
                type='number' 
                value={numero} 
                onChange={(e) => setNumero(e.target.value)} 
                placeholder='Ingrese su número.' 
                onKeyDown={(e) => { if (e.key === 'Enter') sortear(); }} ></input>
                <br></br>
                <button onClick={() => sortear()}>SORTEAR!</button>
            </div>
            :
            <div className="adivina-result">
                <hr></hr>
                <h3>Usted eligió el {numero}</h3>
                <h3>El número sorteado es: {sorteo}</h3>
                <h3>{ sorteo === numero ? "GANASTE!" : "Siga participando"}</h3>
                <br></br>
                <button onClick={() => {
                    setResult (false)
                    setNumero (1)
                    }}>Volver a jugar</button>

            </div>    
        }
        </div>
    );
};

export default AdivinaSorteo;
