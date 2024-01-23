class GameboyScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.audioOn = this.createAudioElement('../audio/nintendo-game-boy-startup.mp3');
    this.audioOff = this.createAudioElement('../audio/nintendo-game-boy-startup.mp3');
  }

  createAudioElement(src) {
    const audioElement = document.createElement('audio');
    audioElement.src = src;
    audioElement.style.display = 'none';   
    this.shadowRoot.appendChild(audioElement);
    return audioElement;
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 250px;
        --height: 180px;
      }

      .container-screen {
        
        background: #9ca04c;
        width: var(--width);
        height: var(--height);

        box-shadow:
          5px 5px 10px #0008 inset,
          -2px -1px 10px #0005 inset,
          0 0 4px 3px #aaa4;

        display: flex;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;
        margin:18%;
        margin-top: -9%;
        


      }
      .power-switch {
        width: 34px;
        height: 10px;
        border-bottom: none;
        border-width: 1%;
        border-radius: 30%;
        position: absolute;
        top: 0%;
        left: 5%;
        background: #fff;
        background-image:linear-gradient(to bottom, #8b8b8b 0 3px, #ddd 5px 1px);
        transform: translate(20px, -8px);
        
        cursor: pointer;
      }


      .battery {
        padding: 0px;
      
        
        
        flex-direction: column;
        justify-content: center;
        
        transform: translateX(10px);
       
      }

      .battery .led {
        width: 10px;
        height: 10px;
        background: #4a4748;
        border-radius: 50%;
        margin: 6px;
      }

      .battery .led.on {
        background: #E11E0A;
        background-image: linear-gradient(0deg, transparent, #fff2);
        box-shadow: 0 0 2px 1.5px #d87473;
      }

      .bottom .battery.active {
        opacity: 1;
        transform: translateY(0);
      }

      .battery .text {
        font-size: 8px;
      }

      .text {
        font-family: Arial, sans-serif;
        font-size: 10px;
        color: #eee;
        text-shadow: 0 0 2px #eee9;
      }





      .power-switch.on {
        transform: translate(60px, -8px);
      }
      
      .animacion {
       
        opacity: 0;
        transform: translateY(70px);
        transition: opacity 4.5s ease-in-out, transform 2.5s ease-in-out;
        transform: translate(65px, -8px);
      }

      


      .animacion.active {
        opacity: 2;

        transform: translateY(60px);
      }
      
      .animacion2 {
        
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 2.5s ease-in-out, transform 6s ease-in-out ;
        ;
      }

      


      .animacion2.active {
        opacity: 1;

        transform: translateY(20px);
      }
    `;
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }
 
  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>${GameboyScreen.styles}</style>
      
      <div class="bottom">
        <div class="battery">
          <div class="led on"></div>
          <div class="text">BATTERY</div>
        </div>
      <div class="container-screen">
        <button class="power-switch"></button>
        <div class="animacion"><h2>GAME BOY</h2></div>
        <div class="animacion2"><p>Nintendo</p></div>
      </div>
      `;
  }
//** codigos de mi autoria  */
  setupEventListeners() {
    const powerSwitchButton = this.shadowRoot.querySelector('.power-switch');
    const batteryContainer = this.shadowRoot.querySelector('.bottom .battery');
    powerSwitchButton.addEventListener('click', () => {
      powerSwitchButton.classList.toggle('on');
      this.toggleAnimation('.animacion');
      this.toggleAnimation2('.animacion2') ;
      

      const ledElement = batteryContainer.querySelector('.led');
      if (ledElement) {
        ledElement.classList.toggle('on');
      }


      if (powerSwitchButton.classList.contains('on')) {
        this.audioOn.play();
      } else {
        this.audioOff.play();
      }


      setTimeout(() => {
        this.toggleAnimation();
        
      }, 5000);
      setTimeout(() => {
      this.toggleAnimation2();
    }, 5000);
    });

    
    const ledElement = batteryContainer.querySelector('.led');
    if (ledElement) {
      ledElement.classList.remove('on');
    }
  }

  toggleAnimation() {
    
    
    
    const animacionElement2 = this.shadowRoot.querySelector('.animacion2');
    if (animacionElement2) {
      animacionElement2.classList.toggle('active');
    }
    
}

toggleAnimation2() {
const animacionElement = this.shadowRoot.querySelector('.animacion');
    if (animacionElement) {
      animacionElement.classList.toggle('active');
  }

}

}





customElements.define("gameboy-screen", GameboyScreen);


