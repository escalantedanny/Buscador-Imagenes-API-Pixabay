import React from 'react';

const Imagen = ({imagen}) => {

    const {largeImageURL, likes, previewURL, pageURL, tags,  views} = imagen;

    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"/>
            </div>
            <div className="card-body">
                 <p className="card-text"> {likes} Me Gusta! </p>
                 <p className="card-text"> {views} Vistas </p>
            </div>
            <div className="card-footer">
                <div className="btn btn-group">
                    <a href={largeImageURL} target="_blank" rel="noopener norefer" className="btn btn-primary"><small>Ver Imágen</small></a>
                    <a href={pageURL} target="_blank" rel="noopener norefer" className="btn btn-primary"><small>Pagina Original</small></a>
                </div>
            </div>
        </div>
     );
}
 
export default Imagen;