import { useState } from "react"
import { AddCategory, GitGrid } from "./components";

export const GitExpertApp = () =>{

    const [categories, setCategoria] = useState(['One Punch']);

    const onAddCategory = (newCategory) =>{
        if ( categories.includes(newCategory) ) return;
        //console.log(newCategory);
        setCategoria([newCategory, ...categories]);
    }
    return (
        <>
            {/* titulo */}
            <h1>GitExpertApp</h1>
            {/* Input */}
            <AddCategory 
                //setCategories= { setCategoria }
                onNewCategory= { onAddCategory }
            />
            {/* Listado de Git */}
 
            {
                categories.map( (category) => (

                    <GitGrid 
                    key={ category}
                    category={ category }
                    />
                ))
            }
            
                {/* Git ITem */}
        </>

    )
}

//Listado de categoria
//Agregar una nueva categoria