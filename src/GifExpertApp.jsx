import { useState } from "react";
import { AddCategory } from "./components/addcategory";
import { GifGrid } from "./components/gifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Piece', 'Metal Gear']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    console.log(categories);

    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory
                onNewCategory={(event) => onAddCategory(event)}
            />

            {
            categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))
            }
        </>
    )
}