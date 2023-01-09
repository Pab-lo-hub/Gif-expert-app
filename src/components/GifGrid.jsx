export const GifGrid = ({ category }) => {
    const getGifs = async() => {
        const url = `http://api.giphy.com/v1/gifs/search?api_key=3CNTrQTXx53hj8qx2wJK8pAikIuZKfhR&q=${ category }&limit=20`
        const resp = await fetch( url );
        const { data } = await resp.json();
        const gifs = data.map( img =>({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }))

        console.log(gifs);
    }
    getGifs();


    return (
        <>
            <h3>{ category }</h3>
            <p>Hola Mundo</p>
        </>
    )
}