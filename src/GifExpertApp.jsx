import { useState } from "react";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'One Punch', 'Metal Gear' ]);

    const onAddCategory = () => {

    }

    console.log(categories);

    return (
        <>
            {/* titulo */}
            <h1>Gif Expert App</h1>

            {/* Input */}

            {/* Listado de Gif */}
            <button>Agregar</button>
            <ol>
                { categories.map( category => {
                    return <li key={category}>{ category }</li>
                }) }
            </ol>
                {/* Gif Item */}
        </>
    )
}