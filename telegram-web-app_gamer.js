let tg = window.Telegram.WebApp;
let create_gamer = document.getElementById("create_gamer");
tg.expand();
create_gamer.addEventListener("click", () => {
	let gaming_role = document.getElementById("id_gaming_role").value;
	let gender = document.getElementById("id_gender").value;
	let age = document.getElementById("id_age").value;
	let height = document.getElementById("id_height").value;
	let weight = document.getElementById("id_weight").value;
	let jump = document.getElementById("id_jump").value;
	let photo = document.getElementById("id_photo").file;
	let location = document.getElementById("id_location").value;
	let contact = document.getElementById("id_contact").value;
	let level = document.getElementById("id_level").value;
	let data = {
		gaming_role: gaming_role,
		gender: gender,
		age: age,
		height: height,
		weight: weight,
		jump: jump,
		photo: photo,
		location: location,
		contact: contact,
		level: level
		}
		tg.sendData(JSON.stringify(data));
		tg.close()
	});
