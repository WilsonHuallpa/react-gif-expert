import { useState } from 'react'


//Normalmente tenemos los pros, pero simpre los destructuramos con {}
export const AddCategory = ( {onNewCategory}) => {
    //cada componente tiene sus propios Hooks.
    
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }
    const onSubmit = (event) => {
        //Hace que no haga un reflesh del navegador.
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        //setCategories( categoria => [inputValue, ...categoria]);
        //console.log(inputValue);  
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
