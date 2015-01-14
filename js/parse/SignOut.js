
function signOutUser(user_name, user_email, user_phone, user_destination, user_departTime, user_returnTime) {

	var signOut = new Parse.Object("SignOut");
	var name = user_name;
	var email = user_email;
	var phone = user_phone;
	var destination = user_destination;
	var departTime = user_departTime;
	var returnTime = user_returnTime;

	signOut.set("name", name);
	signOut.set("email", email);
	signOut.set("phone", phone);
	signOut.set("destination", destination);
	signOut.set("departTime", departTime);
	signOut.set("returnTime", returnTime);

	signOut.save(null, {
		success: function(signOut) {
			var firstName = name.split(" ");
			alert("Thank you, " + firstName[0] + ". You have been signed out.")
		},
		error: function(signOut, error) {
			alert("Uh oh, something went wrong! \n" + error.message);
		}
	});
};