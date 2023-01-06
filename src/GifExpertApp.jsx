import { useState } from "react";
import { AddCategory } from "./components/addcategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Piece', 'Metal Gear']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        console.log(newCategory);
        setCategories([newCategory, ...categories])
    }

    console.log(categories);

    return (
        <>
            {/* titulo */}
            <h1>Gif Expert App</h1>

            {/* Input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={(event) => onAddCategory(event)}
            />

            {/* Listado de Gif */}
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
            {/* Gif Item */}
        </>
    )
}