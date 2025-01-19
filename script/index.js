const player = document.getElementById("player");
const display = document.getElementsByClassName("display");

setInterval(function () {
	let date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();

	display[0].innerHTML = "" + Math.trunc(hour / 10);
	display[1].innerHTML = "" + hour % 10;

	display[2].innerHTML = "" + Math.trunc(minute / 10);
	display[3].innerHTML = "" + minute % 10;

	console.log(hour + ":" + minute + ":" + second);
}, 1000);


let lastMinute = 0;
setInterval(function () {
	let date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();

	if (minute !== lastMinute) {
		console.log("change!");
		if (hour === 20) {
			if (minute === 21) {
				player.src = "src/2021.mp3";
				player.currentTime = 95.5;
				player.play();

				setTimeout("player.pause()", 4300);
			} else if (minute === 22) {
				player.src = "src/2022.mp3";
				player.currentTime = 103;
				player.play();

				setTimeout("player.pause()", 5000);
			} else if (minute === 23) {
				player.src = "src/2023.mp3";
				player.currentTime = 104.3;
				player.play();

				setTimeout("player.pause()", 3400);
			} else if (minute === 24) {
				player.src = "src/2024.mp3";
				player.currentTime = 129.5;
				player.play();

				setTimeout("player.pause()", 4500);
			}
		}

		lastMinute = minute;
	}
}, 1000);


function test(index) {
	switch (index) {
		case 2021:
			player.src = "src/2021.mp3";
			player.currentTime = 95.5;
			player.play();

			setTimeout("player.pause()", 4700);
			break;
		case 2022:
			player.src = "src/2022.mp3";
			player.currentTime = 103;
			player.play();

			setTimeout("player.pause()", 5000);
			break;
		case 2023:
			player.src = "src/2023.mp3";
			player.currentTime = 104.3;
			player.play();

			setTimeout("player.pause()", 3400);
			break;
		case 2024:
			player.src = "src/2024.mp3";
			player.currentTime = 129.5;
			player.play();

			setTimeout("player.pause()", 4500);
			break;
		case 20240:
			player.src = "src/He He He.mp3";
			player.currentTime = 82.8;
			player.play();

			setTimeout("player.pause()", 4200);
			break;
	}
}