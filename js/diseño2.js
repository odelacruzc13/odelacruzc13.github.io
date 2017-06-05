function changeImage() {
	var pokeballImg = document.getElementById("icon01");
	pokeballImg.src="img/pika.gif";
}

function pageLoad() {
	var  ok = document.getElementById("icon01");
	ok.onclick=okayClick;
}

function okayClick() {
	alert("booya");
}

window.onLoad = pageLoad;
