document.getElementById("suscripcion").addEventListener("submit", function(e){
  e.preventDefault();

  let correo = document.getElementById("correo").value;
  let terminos = document.getElementById("terminos").checked;
  let error = document.getElementById("error");

  if(!correo.includes("@")){
    error.textContent = "Correo inválido ❌";
    return;
  }

  if(!terminos){
    error.textContent = "Debes aceptar los términos ⚠️";
    return;
  }

  error.textContent = "";
  alert("Suscripción exitosa 🎉");
});
