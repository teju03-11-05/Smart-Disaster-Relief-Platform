function submitRequest() {
  const name = document.getElementById("name").value;
  const location = document.getElementById("location").value;
  const severity = document.getElementById("severity").value;
  const message = document.getElementById("message");

  if (
    name.trim().length === 0 ||
    location.trim().length === 0 ||
    severity === ""
  ) {
    message.innerText = "Please fill in all fields.";
    message.style.color = "red";
    return;
  }

  message.innerText =
    "Emergency request submitted successfully. Priority: " + severity;
  message.style.color = "green";
}