function openNewWindow(e, url) {
  e.preventDefault();
  window.open(url, "_blank", "width=700px, height=500px");
}

let inputPassword = document.getElementById("exampleInputPassword1");

console.log(inputPassword.value);
