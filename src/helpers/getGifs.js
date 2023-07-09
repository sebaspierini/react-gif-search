export const getGift= async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZDxzDpX26EqNOB9Yg1P3UbrkRctbtO1K&q=${category}&limit=16`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs
}