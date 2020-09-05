/**
Promise is alternative of callback, and smart way to handle nested callback functions.
An example given in the below
**/

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({user_name: "Omar", email: "omar@gmail.com"});
		//reject(new Error("Error from promise"));
	}, 2000);
});

promise.then((user) => {
	console.log(user);
})
.catch((err) => {
	console.log(err.message);
});


function getUserData(name, email){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({name: name, email: email});
		}, 2000);
	});
}

function getUserVideos(email){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([{id: 1, title: "video1"}, {id: 2, title: "video2"}, {id: 3, title: "video3"}]);
		}, 2000);
	});
}

function getVideoTitle(v_id){
	const videos = [{id: 1, title: "video1"}, {id: 2, title: "video2"}, {id: 3, title: "video3"}];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			videos.forEach((video) => {
				if (v_id == video.id) {
					resolve(video.title);
				}
			});
		}, 2000);
	});
}


getUserData("Omar", "omar@m.com")
.then((user) => getUserVideos(user.email))
.then((videos) => getVideoTitle(videos[1].id))
.then((title) => console.log(title));