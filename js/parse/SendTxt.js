/**
// Include the Twilio Cloud Module and initialize it
  //var twilio = require('twilio');
  require(['./twilio-node/lib']);
  //var twilio = require('twilio');

  var accountSid = 'AC30efc85d07f6aa7d087a81045285cf76';
  var authToken = 'f9760191443358b354b1a7ae737e4750';

  var client = require(['twilio'])(accountSid, authToken);

  client.messages.create({
    body: "Jenny please?! I love you <3",
    to: "+5712286515",
    from: "+12405287308"
}, function(err, message) {
    process.stdout.write(message.sid);
});

  //twilio.initialize("AC30efc85d07f6aa7d087a81045285cf76","f9760191443358b354b1a7ae737e4750");

/**
 // Create the Cloud Function
 Parse.Cloud.define("inviteWithTwilio", function(request, response) {
  // Use the Twilio Cloud Module to send an SMS
  twilio.sendSMS({
    From: "+12405287308",
    To: request.params.number,
    Body: "Start using Parse and Twilio!"
  }, {
    success: function(httpResponse) { response.success("SMS sent!"); },
    error: function(httpResponse) { response.error("Uh oh, something went wrong"); }
  });
});
**/
var accountSid = 'AC30efc85d07f6aa7d087a81045285cf76';
var authToken = 'f9760191443358b354b1a7ae737e4750';

require(['../../twilio-node/lib']);
var twilio = require(['twilio']);
var client = new twilio.RestClient(accountSid, authToken);
 
client.messages.create({
    to:'+16512223344',
    from:'TWILIO_NUMBER',
    body:'Hello World'
}, function(error, message) {
    if (error) {
        console.log(error.message);
    }
});
