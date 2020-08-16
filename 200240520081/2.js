let login = function () {
  let user = document.querySelector("#username").value;
  if ((log = " ^/*azAZ/$")) {
    console.log("valid");
  } else {
    console.log("invalid");
  }
  document.querySelector("#username").value = " ";

  let pass = document.querySelector("#password").value;
  if ((log = " ^/*azA-Z[-@]/$")) {
    console.log("valid");
  } else {
    console.log("invalid");
  }
  document.querySelector("#password").value = " ";
};
