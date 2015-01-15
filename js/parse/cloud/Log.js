function log() {
	Parse.Cloud.define("Logger", function(request, response) {
		console.log(request.params);
		response.success();
	});
};