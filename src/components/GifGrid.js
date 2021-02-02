import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {
    //variables
    const {data:images,loading} = useFetchGifs(category);

    //funciones
    console.log(loading);
    //retorno
    return (
        <>
            <h3 className="card animate__animated animate__fadeIn">{category}</h3>
            { loading && <p className="card animate__animated animate__flash">Cargando</p> }
            <div className="card-grid">
                {
                    images.map( (img) => {
                        return <GifGridItem
                        key={img.id}
                        {...img} />
                    })
                }
            </div>
        </>
    );
}

// GifGrid.propTypes = {

// }

export default GifGrid;
