// Require and initialize the Twilio module with your credentials
var client = require(['twilio'])('AC30efc85d07f6aa7d087a81045285cf76', 'f9760191443358b354b1a7ae737e4750');
 
// Send an SMS message
client.sendSms({
    to:'+15712286515', 
    from: '+12405287308', 
    body: 'Hello world!'
  }, function(err, responseData) { 
    if (err) {
      console.log(err);
    } else { 
      console.log(responseData.from); 
      console.log(responseData.body);
    }
  }
);