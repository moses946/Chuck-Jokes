var place = document.querySelector(".placeholder");
var button = document.querySelector(".btn");

async function joke(){
	url = "https://api.chucknorris.io/jokes/random"
	const response = await fetch(url);
	const dict = await response.json();
	place.innerHTML = dict.value
}

button.addEventListener("click",joke);

window.addEventListener("load",joke);