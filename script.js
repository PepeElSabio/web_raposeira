function actualizarHora() {
    const horaElemento = document.getElementById("hora");
    const fecha = new Date();
  
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');
  
    const horaActual = `${horas}:${minutos}:${segundos}`;
    horaElemento.textContent = horaActual;
  }
  
  // Actualiza la hora cada segundo
  setInterval(actualizarHora, 1000);
  
  // Llama a la función una vez para mostrar la hora inmediatamente
  actualizarHora();