const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const api_url = "https://api.quotable.io/random";

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data)
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getquote(api_url)
