



const Photos = async (feed) => {
    

    return (
        <>
        
        </>
    )
}

export const getPhotos = async () => {
    const url = `https://graph.instagram.com/183814947792581?fields=id,username&access_token=c1f8c3d90acf0ee1bc9ceef7fb8e65ec`;
    const data = await fetch(url)
    const feed = await data.json();

    console.log(feed)

}

export default Photos;