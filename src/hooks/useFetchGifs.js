import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


//Recomienda poner un use para crear un hooks.
export const useFetchGifs = ( category ) => { 
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    //Un hooks no es mas que una funcion que regresa algo. 
    return {
        images,
        isLoading
    }
}

//custom Hook, vamos a crear nuestro propios hooks con mas estados propios de la aplicacion.
