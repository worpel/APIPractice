document.addEventListener('DOMContentLoaded', () => {
    const randNum = Math.ceil(Math.random() * 25);
    let img = document.getElementById('gif');
    fetch(`http://api.giphy.com/v1/gifs/search?q=random&api_key=BxPcxG81subNIyhCZXNE5sTk8Hjk4Irg`)
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            console.log(data.data[randNum].images.original.url);

            img.src = data.data[randNum].images.original.url;
        });
});

const searchGif = () => {
    const randNum = Math.ceil(Math.random() * 25);
    let img = document.getElementById('gif');
    let search = document.getElementById('giphyCount').value;
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=BxPcxG81subNIyhCZXNE5sTk8Hjk4Irg`)
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            console.log(data.data[randNum].images.original.url);

            img.src = data.data[randNum].images.original.url;
        });
}


document.getElementById('button').addEventListener('click', searchGif);