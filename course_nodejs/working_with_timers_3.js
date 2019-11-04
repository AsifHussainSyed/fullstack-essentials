var displayTCS = setInterval(() => {
	console.log("TCS");
}, 2000);

setTimeout(() => {
	clearInterval(displayTCS);
}, 10000);