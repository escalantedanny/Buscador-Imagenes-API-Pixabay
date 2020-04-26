import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';
function App() {

  const [ busqueda, guardarBusqueda] = useState('');
  const [ imagenes, guardarImagenes] = useState([]);
  const [ paginaActual, guardarPagina] = useState(1);
  const [ totalPagina, guardarTotalPaginas] = useState(1);

  useEffect( () => {

    const consultarApi = async () =>{

      if(busqueda=== '') return;
        const imagenesXPagina = 30;
        const key = '15852422-bc035de3dacb4787553aa2191';
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesXPagina}&page=${paginaActual}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        
        guardarImagenes(resultado.hits);   
        guardarTotalPaginas(Math.ceil(resultado.totalHits / imagenesXPagina));

        const jumbotron = document.querySelector('.jumbotron');
        jumbotron.scrollIntoView({ behavior: 'smooth'});

    }
    consultarApi();
  }, [busqueda, paginaActual]);

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;
    if(nuevaPaginaActual === 0) return;
    guardarPagina(nuevaPaginaActual);
  }
  const paginaSiguiente = () => {
    const nuevaPaginaSiguiente = paginaActual + 1;
    if(nuevaPaginaSiguiente > totalPagina) return;
    guardarPagina(nuevaPaginaSiguiente);
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador De Imagenes</p>
        <Formulario 
        guardarBusqueda={guardarBusqueda}
        />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes 
          imagenes={imagenes}
        />
        { (paginaActual === 1) ? null : (
          <button 
            type="button"
            className="bbtn btn-info mr-1"
            onClick={paginaAnterior}
          >Anterior</button>
        )}
        { (paginaActual > totalPagina) ? null : (
          <button 
            type="button"
            className="bbtn btn-warning"
            onClick={paginaSiguiente}
          >Siguiente</button>
        )}
      </div>
    </div>
  );
}

export default App;
