import React, {useState} from 'react';
import Error from './Error';

const Formulario = ({guardarBusqueda}) => {

    const [ termino, guardarTermino] = useState('');
    const [ error, guardarError] = useState(false);

    const buscarImagenes = e => {
        e.preventDefault();

        if(termino.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

        guardarBusqueda(termino);

    }

    return ( 
        <form
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-sm-12">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Buscar una imagen, ejemplo: Tecnología"
                        onChange={ e => guardarTermino(e.target.value)}
                    />
                    <input 
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            { error ? <Error mensaje="Agrega un término de Búsqueda" /> : null}
        </form>
     );
}
 
export default Formulario;