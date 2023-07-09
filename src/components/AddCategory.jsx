import {useState} from 'react';
export const AddCategory = ({agregarCategoria}) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputValue = (e)=>{
        setInputValue(e.target.value);
    }

    const setCategories = (e) => {
        if(e.key === 'Enter'){
            if(inputValue.trim().length < 1) return;
            agregarCategoria(inputValue);
            /* agregarCategoria(categories => {
                const eqCategory = categories.includes(inputValue);
                if(!eqCategory) 
                {return [...categories, inputValue]}
                else{
                    return categories;
                }
            }); */
            setInputValue('');
        }
    }

    return (
        <input type="text" placeholder="Agregar categoría" value={inputValue} onChange={onInputValue} onKeyUp={setCategories}/>
    );
}