var username = ["user1", "user2", "user3"];
var passwd = ["abc1", "abc2", "abc3"];

var LogIn = function(benutzerName, benutzerPass) {
  var index = username.indexOf(benutzerName);
  var benutzerNameExistiert = index >= 0;
  console.log(
    "benutzerName " + benutzerName + " existiert " + benutzerNameExistiert
  );
  var passwortStimmt = passwd[index] === benutzerPass;
  var genehmigung = benutzerNameExistiert && passwortStimmt;
  return genehmigung;
};

module.exports = LogIn;
