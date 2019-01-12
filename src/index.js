import React from "react";
import ReactDOM from "react-dom";
import LogIn from "./login";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

var username = "";
var password = "";

function CheckLog() {
  console.log("Check log with " + username + " & " + password);
  console.log(LogIn(username, password));
}

var usernameChanged = e => {
  username = e.target.value;
  console.log("username changed " + e.target.value);
};

var passwordChanged = e => {
  password = e.target.value;
  console.log("password changed " + e.target.value);
};

function App() {
  return (
    <div className="App">
      <TextField
        id="username"
        label="Username"
        margin="normal"
        onChange={usernameChanged}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        margin="normal"
        onChange={passwordChanged}
      />
      <Button variant="contained" color="primary" onClick={CheckLog}>
        Log In
      </Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
