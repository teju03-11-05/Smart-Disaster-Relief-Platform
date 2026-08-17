function submitRequest() {
  const name = document.getElementById("name").value;
  const location = document.getElementById("location").value;
  const severity = document.getElementById("severity").value;

  if (name === "" || location === "" || severity === "") {
    document.getElementById("message").innerText =
      "Please fill all fields.";
    return;
  }

  document.getElementById("message").innerText =
    "Emergency request submitted successfully. Priority: " + severity;
}