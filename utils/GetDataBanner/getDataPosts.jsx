export async function GetDataPosts(url){
    const res = await fetch(url)

    return res.json();
}