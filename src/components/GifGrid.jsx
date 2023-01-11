import { getGifs } from '../helpers/getGifs.js'
import { useState, useEffect } from 'react';

export const GifGrid = ({ category }) => {
    const [counter, setCounter] = useState(10);

    useEffect( () => {
        getGifs(category);
    }, []);

    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}