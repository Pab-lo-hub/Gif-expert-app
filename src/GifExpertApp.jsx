import { useState } from "react";
import { Addcategory } from "./components/addcategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'One Piece', 'Metal Gear' ]);

    const onAddCategory = () => {
        setCategories([...categories, 'Star Wars'])
    }

    console.log(categories);

    return (
        <>
            {/* titulo */}
            <h1>Gif Expert App</h1>

            {/* Input */}
            <Addcategory />

            {/* Listado de Gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                { categories.map( category => {
                    return <li key={category}>{ category }</li>
                }) }
            </ol>
                {/* Gif Item */}
        </>
    )
}