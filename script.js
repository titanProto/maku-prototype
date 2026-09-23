function logMeIn() {
  let usernameEntered = document.getElementById("username").value;
  let passwordEntered = document.getElementById("password").value;
  if (usernameEntered != "" && passwordEntered != "") {
    window.location.href = "home.html";
  } else {
    document.getElementById("loginError").innerHTML =
      "Error - Please enter a username and password!";
  }
}
