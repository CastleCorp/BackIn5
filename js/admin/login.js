function login(password) {
	var pass = password;
	Parse.User.logIn("teacher", pass, {
		success: function(user) {
			
		},
		error: function(user, error) {
			alert("Uh oh! Looks like you may have typed the wrong password! Or the site might be broken...I'm going to assume this was your fault for now.")
		}
	});
};