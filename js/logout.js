function logout() {
	Parse.User.logOut();
	var currentUser = Parse.User.current();
	window.location.assign("/admin/index.html");
}