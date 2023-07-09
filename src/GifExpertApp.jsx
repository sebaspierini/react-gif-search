import { useState } from 'react';
import { AddCategory, GiftGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
    const onAddCategory = (newCategory) => {
        const eqCategory = categories.includes(newCategory);
        if(!eqCategory)
        {setCategories([...categories, newCategory])}
    }
    return (
        <div>
            <h1>
                Hola
            </h1>
            <AddCategory 
                agregarCategoria={onAddCategory}
            />
            
            {
                categories.map((category)=>(<GiftGrid key={category} category={category} />))
            }
        </div>
    );
}