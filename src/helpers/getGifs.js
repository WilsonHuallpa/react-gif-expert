  //ejemplo
  export const getGifs = async(category) => {
    //obtenemos la imagenes
    const url = ` https://api.giphy.com/v1/gifs/search?api_key=7MnlZUeh3a1oU1WSS3pV4zLssYEANF06&q=${ category }&limit=10`; 
    const resp = await fetch(url);
    const {data} = await resp.json();
    //En lugar de tener un retrun vamos color ( ) para retornar un objeto.
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    //usetfest

    return gifs;
}