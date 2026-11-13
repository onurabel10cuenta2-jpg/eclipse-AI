document.getElementById("year").textContent = new Date().getFullYear();

// Los botones se activan automáticamente cuando existe el archivo correspondiente
// dentro de la carpeta /files con el nombre indicado abajo.
const downloads = {
  "1.0": "files/ECLIPSE-1.0.zip",
  "2.0": "files/ECLIPSE-2.0.zip"
};

document.querySelectorAll("[data-version]").forEach((button) => {
  const version = button.dataset.version;
  const path = downloads[version];
  // Mientras el archivo no esté agregado, el botón permanece deshabilitado.
  // Al publicar el ZIP en la ruta indicada, cambia el enlace y quita la clase unavailable.
  button.href = path;
  button.addEventListener("click", (event) => {
    if (button.classList.contains("unavailable")) {
      event.preventDefault();
      alert("Esta descarga todavía no está publicada. El administrador debe agregar el archivo de ECLIPSE " + version + ".");
    }
  });
});
