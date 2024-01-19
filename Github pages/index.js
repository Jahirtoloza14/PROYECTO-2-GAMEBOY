document.addEventListener('DOMContentLoaded', function () {
  

  const gameBoyContainer = document.querySelector('.gameboy-color');

 
  const titleElement = document.createElement('h1');
  titleElement.textContent = 'GAME BOY';
  titleElement.style.textAlign = 'center';  
  titleElement.style.borderRadius= "12px";
  titleElement.style.fontFamily= "Lato";
  titleElement.style.color= "#332C60";
  titleElement.style.display="absolute";
  titleElement.style.flexDirection= "column";
  titleElement.style.justyfyContent= "space-between";
  titleElement.style.position="relative";
  titleElement.style.top="-27%";
  titleElement.style.left="%";
  
 
  gameBoyContainer.appendChild(titleElement);

  // ...
});








var $gameBoyContainer = document.querySelector('.gameboy-color');
        $gameBoyContainer.style.position="relative";
        
        $gameBoyContainer.style.width= "290px";
        $gameBoyContainer.style.height= "225px";
        $gameBoyContainer.style.backgroundColor= "#d3ccd3";
        $gameBoyContainer.style.borderRadius= "75px 75px 75px 75px";
        $gameBoyContainer.style.boxShadow="0 0 11px #0007, 1px 0 10px 3px #0008 inset";
        $gameBoyContainer.style.display="flex";
        $gameBoyContainer.style.flexDirection= "column";
        $gameBoyContainer.style.justyfyContent= "space-between";
        $gameBoyContainer.style.position="absolute";
        $gameBoyContainer.style.top="7%";
        $gameBoyContainer.style.left="10%";
    


        var $gameBoyContainer = document.querySelector('.azul');
        $gameBoyContainer.style.width= "8px";
        $gameBoyContainer.style.height= "25px";

        $gameBoyContainer.style.borderRadius= "12px";
        $gameBoyContainer.style.boxShadow="0 0 11px #0007, 1px 0 10px 3px #0008 inset";
        $gameBoyContainer.style.display="absolute";
        $gameBoyContainer.style.flexDirection= "column";
        $gameBoyContainer.style.justyfyContent= "space-between";
        $gameBoyContainer.style.position="relative";
        $gameBoyContainer.style.top="67%";
        $gameBoyContainer.style.left="15%";
       
        var $gameBoyContainer = document.querySelector('.gris');
        $gameBoyContainer.style.width= "8px";
        $gameBoyContainer.style.height= "25px";
        $gameBoyContainer.style.top="56.3%";
        $gameBoyContainer.style.left="32%";
        $gameBoyContainer.style.borderRadius= "12px";
        $gameBoyContainer.style.boxShadow="0 0 11px #0007, 1px 0 10px 3px #0008 inset";
        $gameBoyContainer.style.display="absolute";
        $gameBoyContainer.style.flexDirection= "column";
        $gameBoyContainer.style.justyfyContent= "space-between";
        $gameBoyContainer.style.position="relative";



        var $gameBoyContainer = document.querySelector('.verde');
        $gameBoyContainer.style.width= "8px";
        $gameBoyContainer.style.height= "25px";
        $gameBoyContainer.style.position="relative";
        $gameBoyContainer.style.top="30%";
        $gameBoyContainer.style.borderRadius= "12px";
        $gameBoyContainer.style.boxShadow="0 0 11px #0007, 1px 0 10px 3px #0008 inset";
        $gameBoyContainer.style.display="absolute";
        $gameBoyContainer.style.flexDirection= "column";
        $gameBoyContainer.style.justyfyContent= "space-between";
        $gameBoyContainer.style.top="46.3%";
        $gameBoyContainer.style.left="49%";


        var $gameBoyContainer = document.querySelector('.rojo');
        $gameBoyContainer.style.width= "8px";
        $gameBoyContainer.style.height= "25px";
        $gameBoyContainer.style.top="35.3%";
        $gameBoyContainer.style.left="65%";
        $gameBoyContainer.style.borderRadius= "12px";
        $gameBoyContainer.style.boxShadow="0 0 11px #0007, 1px 0 10px 3px #0008 inset";
        $gameBoyContainer.style.display="absolute";
        $gameBoyContainer.style.flexDirection= "column";
        $gameBoyContainer.style.justyfyContent= "space-between";
        $gameBoyContainer.style.position="relative";

        

        
    

 
        document.addEventListener('DOMContentLoaded', function () {
            const imagenesElement = document.querySelector('.imagenes');
            const azulButton = document.querySelector('.azul');
            const grisButton = document.querySelector('.gris');
            const verdeButton = document.querySelector('.verde');
            const rojoButton = document.querySelector('.rojo');
            const imagenElement = document.querySelector('.imagenes');

            if (imagenesElement) {
                imagenesElement.style.display = 'none';
              }
          
            azulButton.addEventListener('click', function () {
              mostrarImagen('../imagenes/imgen1.png');
          
            grisButton.addEventListener('click', function () {
              mostrarImagen('../imagenes/imagen2.png'); 
            });
          
            verdeButton.addEventListener('click', function () {
              mostrarImagen('../imagenes/imagen3.png'); 
            });
          
            rojoButton.addEventListener('click', function () {
              mostrarImagen('../imagenes/imgen1.png'); 
            });
          
            function mostrarImagen(urlImagen) {
              if (imagenElement) {
                imagenElement.style.backgroundImage = `url('${urlImagen}')`;
              }
            }
            function mostrarImagen(urlImagen) {
                if (imagenesElement) {
                  imagenesElement.style.backgroundImage = `url('${urlImagen}')`;
                  imagenesElement.style.display = 'block'; 
                }
              }
          });


        });
        