// Pestañas Navegador Variables Constante
const navigationLinks = document.querySelectorAll("[data-navbar-link]");
const pages = document.querySelectorAll("[data-pestaña]");

// Agregar evento al dato-nav-link
for (let iterarNum = 0; iterarNum < navigationLinks.length; iterarNum++) {
  navigationLinks[iterarNum].addEventListener("click", function () {
    
    for (let BucleMove = 0; BucleMove < pages.length; BucleMove++) {
      if (this.innerHTML.toLowerCase() === pages[BucleMove].dataset.pestaña) {
        pages[BucleMove].classList.add("active");
        navigationLinks[BucleMove].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[BucleMove].classList.remove("active");
        navigationLinks[BucleMove].classList.remove("active");
      }
    }

    
      // Selecciona los elementos con la propiedad data-move Variables Constante
      const followMs = document.querySelectorAll('[data-move]');
      followMs.forEach(followM => {
        const heightM = followM.clientHeight;
        const widthM = followM.clientWidth;
        
      // Toma el de seguimiento de mouse y su posicion
      // Eventos de mousemove y mouseout a los Selectores
        followM.addEventListener('mousemove', (capture) => {
          const { layerX, layerY } = capture;
          const yRotation = (
            (layerX - widthM / 2) / widthM
          ) * 15;
          const xRotation = (
            (layerY - heightM / 2) / heightM
          ) * 15;
          const accion = `
          perspective(5000px)
          scale(1.02)
          rotateX(${xRotation}deg)
          rotateY(${yRotation}deg)`;
          followM.style.transform = accion;
        });
        followM.addEventListener('mouseout', function() {
          followM.style.transform = `
            rotateX(0)
            rotateY(0)
          `;
        });
      });
    });
}

// Seleccion de Contacto Variables Constante

const Survey = document.querySelector("[data-form]");
const FieldInput = document.querySelectorAll("[data-text]");
const Subbutton = document.querySelector("[data-sub-btn]");

// Agregar Evento de verificación en los campos
for (let BucleVerify = 0; BucleVerify < FieldInput.length; BucleVerify++) {
  FieldInput[BucleVerify].addEventListener("input", function () {

    // Verificación de entrada
    if (Survey.checkValidity()) {
      Subbutton.removeAttribute("disabled");
    } else {
      Subbutton.setAttribute("disabled", "");
    }
  });
}

