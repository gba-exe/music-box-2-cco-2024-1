import api from "./api";
import { useState } from "react";

function App() {

    const [musicas, setMusicas] = useState([]);

    function listar() {
        api.get()
            .then((resposta) => {
                console.log(resposta);
                console.log(resposta.status);
                console.log(resposta.data);

                setMusicas(resposta.data)
            })
            .catch((resposta) => {
                console.log(resposta);
            })
    }

    return (
        <>
            <h1>Hello World!</h1>
            <button onClick={listar}>Listar</button>
            {
                musicas.map(musica => (
                    <div key={musica.id}>
                        <h1>{musica.nomeMusica} - {musica.artista}</h1>
                        <h2>{musica.genero}</h2>
                        <p>{musica.ano}</p>
                        <img src={musica.imagem} alt="Gato"></img>
                    </div>
                ))
            }
        </>
    );
}

export default App;
