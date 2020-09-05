/**
Some times we want to execute some statement after some specifiic task/function to be completed

To perform some task, some times we need to wait for result of another function.
But in JS, JS engine does not wait for any statement to execute next statement because 
of being Asynchronous.

So if any function takes long time to return result, we need to wait for result 
to use the result in the next statement.

In this situation we do use callback technique
**/

function loginUser(name, password){
	const userData = {user_name: "omar", password: "123456"};
	//here setTimeout like Databae operation time
	let isValid = false;
	setTimeout(() => {
		if (name === userData.user_name && password === userData.password) {
			isValid = true;
		}
		return isValid;
	}, 5000);
}

console.log("Start");

let isValidUser = loginUser("omar", "123456") //Here you will get undefined for isValidUser value,
if (isValidUser !== undefined) {
	if (isValidUser) {
	console.log("Welcome To User Profile Page");
	}else{
		console.log("Sorry! Invalid user name or password.");
	}
}

console.log("End");

/**To solve this problem we can use callback technique**/

function getUserDataAsync(name, email, callback){
	setTimeout(() => {
		callback({name:name, email:email}); //sending data into the callback function parameter
		//console.log("End");
	}, 2000);
}

console.log("Start Callback...");
getUserDataAsync("Omar", "omar@mail.com", (user) => {
	console.log(user); //got response from callback function
	console.log("End Callback...");
});


/**
Problem: Write a program to redirect user to profile page if login success or warn user if login fails.
1. First print Start
2. Then verify data to ligin user
3. At last print End
**/

function loginUserAsync(name, password, callback){
	const userData = {user_name: "omar", password: "123456"};
	//here setTimeout acts like Databae operation time
	let isValid = false;
	setTimeout(() => {
		if (name === userData.user_name && password === userData.password) {
			isValid = true;
		}
		callback(isValid); //sending data into the callback function parameter
	}, 3000);
}

console.log("Start Login...");
loginUserAsync("omar", "123456", (isValidUser) => {
	if (isValidUser) { //got response from callback function
		console.log("Welcome To User Profile Page");
	}else{
		console.log("Sorry! Invalid user name or password.");
	}
	console.log("End Login...");
});