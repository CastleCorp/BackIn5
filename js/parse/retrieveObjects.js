
var objects = new Array();

function retrieveObjects()
{

	var OutCollection = Parse.Collection.extend({
		model: "SignOut"
	});

	var InCollection = Parse.Collection.extend({
		model: "SignIn"
	});

	var collectionOut = new OutCollection();
	var collectionIn = new InCollection();



	collectionOut.fetch({
		success: function(collection) {
			collection.each(function(object){
				objects[objects.length] = object;
			});
		},
		error: function(error) {
			alert("Uh oh!" + error.message);
		}
	});

	collectionIn.fetch({
		success: function(collection) {
			collection.each(function(object){
				objects[objects.length] = object;
			});
		},
		error: function(error) {
			alert("Uh oh!" + error.message);
		}
	});

	function compare(a,b) {
		if (a.createdAt < b.createdAt)
			return -1;
		if (a.createdAt > b.createdAt)
			return 1;
		return 0;
	};

	objects.sort(compare);

	for(var i = 0; i < objects.length; i++) {
		var object = objects[i];

		$('#table tr:last').after("<tr><td>"+object._serverData.name+"</td> <td>"+object._serverData.returnTime+"</td> <td>"+object._serverData.destination+"</td><td>"+object._serverData.phone+"</td></tr>");
	}


}