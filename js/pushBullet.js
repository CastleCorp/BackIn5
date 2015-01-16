function push(number, body) {

var API_KEY = "JMvrjX4FdSiWjqGRVFO0w3O5wj2dr1Qs";
var TARGET_EMAIL = "sasbackin5@gmail.com";
var newPush = {};
var phone = number;
var message = body;

newPush["email"] = TARGET_EMAIL;
newPush["type"] = "note";
newPush["title"] = phone;
newPush["body"] = message;
 
$.ajax({
    type: "POST",
    headers: {"Authorization": "Bearer " + API_KEY},
    url: "https://api.pushbullet.com/v2/pushes",
    channel_tag: "backin5",
    data: newPush
});
};