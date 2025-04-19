//your JS code here. If required.
setInterval(() => {
	let date = new Date();
	let elem = document.getElementById("timer");
	elem.innerText = date.toLocaleString("en-US");
}, 1000);