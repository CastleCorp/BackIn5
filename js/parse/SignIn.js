function signInUser(user_name, actual_returnTime) {

	var signIn = new Parse.Object("SignIn");
	var name = user_name;
	var returnTime = actual_returnTime;

	signIn.set("name", name);
	signIn.set("returnTime", returnTime);

	signIn.save(null, {
		success: function(signIn) {
			var query = new Parse.Query("OffCampus");
			query.equalTo("name", name);
			query.find({
				success: function(results) {
					var object = results[0];

					object.destroy({
						success: function(object) {},
						error: function(object, error) {
							alert("Destroy object failed! " + error.message);
						}
					});
				},
				error: function(object, error) {
					alert("Find object failed! " + error.message);
				},
			});

			alert("Thanks, you're signed in!");
		},
		error: function(signIn, error) {
			alert("Sign in failed! " + error.message);
		}
	});

}