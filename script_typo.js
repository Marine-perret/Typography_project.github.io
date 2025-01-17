
 

// Faire le lien entre les objets de ma page et des noms de variable
const textarea = document.getElementById('dynamicText');
const colorPicker = document.getElementById('colorPicker');
const colorPicker_bg = document.getElementById('colorPicker_bg');
const slider1 = document.getElementById('slider1');
const slider2 = document.getElementById('slider2');
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const checkbox3 = document.getElementById('checkbox3');

const checkbox1a = document.getElementById('checkbox1a');
const checkbox1b = document.getElementById('checkbox1b');
const checkbox1c = document.getElementById('checkbox1c');

// colorpickers ------------------------------------------------------------//
colorPicker.addEventListener('input', () => {
  const color = colorPicker.value; 
  textarea.style.color = color; 
});  

colorPicker_bg.addEventListener('input', () => {
  const color = colorPicker_bg.value; 
  textarea.style.background = color; 
});

// sliders -------------------------------------------------------------------------//


slider1.addEventListener('input', () => {
  const size = slider1.value; 
  textarea.style.fontSize = `${size}px`; 
});

slider2.addEventListener('input', () => {
  const spacing = slider2.value; 
  textarea.style.letterSpacing = `${spacing}px`; 
});

// Sélectionner le slider et le span
const slider = document.getElementById('slider1');
const sliderValueDisplay = document.getElementById('sliderValue');

// Mettre à jour la valeur affichée lorsque le slider change
slider.addEventListener('input', () => {
  sliderValueDisplay.textContent = slider.value; // Affiche la valeur actuelle du slider
});


// checkboxes --------------------------------------------------------------------------------------//
const titleButton1 = document.querySelector('.title1');
const titleButton2 = document.querySelector('.title2');
const titleButton3 = document.querySelector('.title3');

checkbox1.addEventListener('input', () => {
  const typo1 = checkbox1.value; 
  if (checkbox1.checked) {
  textarea.style.fontFamily = 'Playpen Sans'; 
  titleButton1.classList.add('active');
  }else {
    textarea.style.fontFamily = 'Montserrat';
    titleButton1.classList.remove('active');
  }
});

checkbox2.addEventListener('input', () => {
  const typo2 = checkbox2.value; 
  if (checkbox2.checked) {
  textarea.style.fontFamily = 'Noto Serif'; 
  titleButton2.classList.add('active');
  }else {
    textarea.style.fontFamily = 'Montserrat';
    titleButton2.classList.remove('active');
  }
});

checkbox3.addEventListener('input', () => {
  const typo3 = checkbox3.value; 
  if (checkbox3.checked) {
  textarea.style.fontFamily = 'Jura';
  titleButton3.classList.add('active'); 
  }else {
    textarea.style.fontFamily = 'Montserrat';
    titleButton3.classList.remove('active');
  }
});



const radioButtons = document.querySelectorAll('input[name="titres"]');

// Ajoutez un event listener à chaque bouton radio
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('input', () => {
    // Vérifiez lequel est activé
    radioButtons.forEach((btn) => {
      const correspondingButton = document.querySelector(`label[for="${btn.id}"]`);

      if (btn.checked) {
        textarea.style.fontFamily = btn.value; // Change la police selon le bouton coché
        correspondingButton.classList.add('active'); // Ajoute la classe active au bouton coché
      } else {
        correspondingButton.classList.remove('active'); // Retire la classe active des autres
      }
    });
  });
});


// sub-checkboxes -----------------------------------------------------------------------------------------------------//

checkbox1a.addEventListener('input', () => {
  if (checkbox1a.checked) {
    textarea.style.fontWeight = '300'; // Par exemple : Light
  } else {
    textarea.style.fontWeight = '500'; // Par exemple : Medium
  }
});
