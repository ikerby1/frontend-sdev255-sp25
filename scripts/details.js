addEventListener("DOMContentLoaded", async function(){
   //grab the search params from the url after the question mark
    const urlpararm = new URLSearchParams(window.location.search)
    const songID = urlpararm.get('id')
    console.log(songID)

    const response = await fetch("https://localhost:3000/api/songs/" + songID)
    const song = await response.json()
    console.log(song)

    let heading = ""
    heading+= `${song.title}`
    document.querySelector("h1").innerHTML = heading

    let html = ""
    html+= `
        <h3>Artist - ${song.artist} </h3>
        <p>Title - ${song.popularity} </p>
        <p>Release Date - ${song.releaseDate} </p>
    `
    document.querySelector("div").innerHTML = html
})