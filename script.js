// Redirige el formulario a WhatsApp con los datos del usuario
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  const numero = "5493816000000"; // número de ejemplo
  const texto = `Hola! Soy ${nombre} (${email}).%0A%0A${mensaje}`;
  const url = `https://wa.me/${numero}?text=${texto}`;

  window.open(url, "_blank");
});
