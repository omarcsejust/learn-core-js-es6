/**
As JavaScript is Asynchronous, await is used to make statement Synchronous.
In this technique each statement wait for another statement to be completed
**/

function loginUser(name, pass){
	const tbl_user = [{id: 1, name: "omar", password: "12345"}, {id: 2, name: "hasan", password: "123456"}];
	let id = null;
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			tbl_user.forEach((user) => {
				if (name === user.name && pass === user.password) {
					id = user.id;
				}
			});
			resolve(id);
		}, 2000);
	});
}

function getUserVideos(u_id){
	const tbl_vidos = [{id: 1, user_id: 1}, {id: 2, user_id: 1}, {id: 3, user_id: 2}]
	let userVideos = [];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			userVideos = tbl_vidos.filter((video) => {
				return video.user_id === u_id;
			});
			resolve(userVideos);
		}, 2000);
	});
}

function getVideoTitle(v_id){
	const tbl_video_details = [{id: 1, title: "video1"}, {id: 2, title: "video2"}, {id: 3, title: "video3"}];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			tbl_video_details.forEach((video) => {
				if (v_id == video.id) {
					resolve(video.title);
				}
			});
		}, 2000);
	});
}

async function display(){
	let userId = await loginUser("omar", "12345");
	console.log(userId);
	let userVideos = await getUserVideos(userId);
	console.log(userVideos);
}

display();