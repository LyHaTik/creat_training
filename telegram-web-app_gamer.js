let tg = window.Telegram.WebApp;
let create_training = document.getElementById("create_training");
tg.expand();
create_training.addEventListener("click", () => {
	let date_traning = document.getElementById("id_date_traning").value;
	let location = document.getElementById("id_location").value;
	let type_traning = document.getElementById("id_type_traning").value;
	let limit_number_players = document.getElementById("id_limit_number_players").value;
	let comment = document.getElementById("id_comment").value;
	let level = document.getElementById("id_level").value;
	let data = {
		date_traning: date_traning,
		location: location,
		type_traning: type_traning,
		limit_number_players: limit_number_players,
		comment: comment,
		level: level
		}
		tg.sendData(JSON.stringify(data));
		tg.close()
	});