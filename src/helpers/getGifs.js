export const getGifs = async(category) => {
    
    console.log('getGifs');
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=sIn1sN1vG5d68oVlHsiZ4wNCDomR0F7x&q=${ category }&limit=20`;
    const resp = await fetch (url);
    const {data} = await resp.json();

    const gifs = data.map((img) => ({
        id:img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))

    return gifs;
}