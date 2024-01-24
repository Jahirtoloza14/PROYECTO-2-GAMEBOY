//** codigos de mi autoria  */

document.addEventListener('DOMContentLoaded', function () {
    const powerSwitchButton = document.querySelector('.power-switch');
  
    if (powerSwitchButton) {
      powerSwitchButton.addEventListener('click', function () {
        // Alternar la clase 'active' del botón al hacer clic
        powerSwitchButton.classList.toggle('on');
      });
    }
  });


document.addEventListener('DOMContentLoaded', function () {
    const powerSwitchButton = document.querySelector('.power-switch');
    const led = document.querySelector('.battery .led');
  
    if (powerSwitchButton && led) {
      powerSwitchButton.addEventListener('click', function () {
        // Toggle la clase 'on' para el LED
        led.classList.toggle('on');
      });
    }
  });

document.addEventListener('DOMContentLoaded', function () {
    const powerSwitchButton = document.querySelector('.power-switch');
    const animacionElement = document.querySelector('.animacion');
    const animacion2Element = document.querySelector('.animacion2');
  
    if (powerSwitchButton && animacionElement && animacion2Element) {
      powerSwitchButton.addEventListener('click', function () {
        // Alternar la clase 'active' del botón al hacer clic
        powerSwitchButton.classList.toggle('active');
  
        // Alternar las clases 'active' en animacionElement y animacion2Element
        animacionElement.classList.toggle('active');
        animacion2Element.classList.toggle('active');
      });
    }
  });
document.addEventListener('DOMContentLoaded', function () {
    const container4 = document.querySelector('.container4');
    const container5 = document.querySelector('.container5');
    const imagenesContainer = document.querySelector('.container-screen');
  
    const imagenesArray = ["./imagenes/imgen1.png", "./imagenes/imagen2.png", "./imagenes/imagen3.png"];
    let currentIndex = 0;
    let currentImage = null;
  
    container4.addEventListener('click', function () {
      mostrarSiguienteImagen();
    });
  
    container5.addEventListener('click', function () {
      devolverImagen();
    });
  
    function mostrarSiguienteImagen() {
      // Cambia el atributo 'src' de la imagen actual
      imagenesContainer.innerHTML = `<img src="${imagenesArray[currentIndex]}" alt="Imagen ${currentIndex + 1}">`;
      currentIndex = (currentIndex + 1) % imagenesArray.length;
    }
    
    function devolverImagen() {
        // Almacena la URL de la imagen actual en la variable currentImage
        currentImage = imagenesArray[currentIndex];
        console.log(`Devolver imagen: ${currentImage}`);
      }
  });