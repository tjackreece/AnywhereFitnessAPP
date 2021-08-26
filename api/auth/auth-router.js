const express = require("express");
const server = express().router();
const bcryptjs = require("bcryptjs");
const userModel = require("../user/user-model");

server.post("/register", (req, res, next) => {
	const { first_name, last_name, email, username, password, role } = req.body;
	const hash = bcryptjs.hashSync(password, 10);

	const userInfo = {
		first_name,
		last_name,
		email,
		username,
		password: hash,
		role,
	};
	userModel.addUserInfo(userInfo).then((response) => {
		const data = response.rows;
		const dataCount = response.rowCount;
		if (dataCount === 0) {
			res
				.status(500)
				.json({ message: "User Data did not make it into database" });
		} else {
			res.status(201).json({
				code: 100,
				message: `Welcome To Your New Gym ${userInfo.first_name}, Allow us to show You all Your Features`,
				NewUserLogin: data,
			});
		}
	});
});
server.post("/login", (req, res, next) => {});

function makeToken(user) {
	const payload = {
		UserID: user.UserID,
		First_Name: user.FirstName,
		Last_Name: user.LastName,
		Email: user.Email,
		Username: user.Username,
		Role: user.Role,
	};
	const options = {
		expiresIn: "30 seconds",
	};
	return jwt.sign(payload, JWT_SECRET, options);
}
module.exports = server;
