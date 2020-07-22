import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItemApp } from './GifGridItemApp';

export const GifGridApp = ({category}) => {


    const {data:images, loading} = useFetchGifs( category );
    


    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="animate__animated animate__fadeIn">Loadding</p>}
            

             <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItemApp 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div> 
        </>
    )
}

