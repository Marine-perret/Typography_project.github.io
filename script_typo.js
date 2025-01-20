
 

// Faire le lien entre les objets de ma page et des noms de variable
const textarea = document.getElementById('dynamicText');
const colorPicker = document.getElementById('colorPicker');
const colorPicker_bg = document.getElementById('colorPicker_bg');
const slider1 = document.getElementById('slider1');
const slider2 = document.getElementById('slider2');

const checkbox1a = document.getElementById('checkbox1a');
const checkbox1b = document.getElementById('checkbox1b');
const checkbox1c = document.getElementById('checkbox1c');

const checkbox2a = document.getElementById('checkbox2a');
const checkbox2b = document.getElementById('checkbox2b');
const checkbox2c = document.getElementById('checkbox2c');

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


const slider = document.getElementById('slider1');
const sliderValueDisplay = document.getElementById('sliderValue1');
slider.addEventListener('input', () => {
  sliderValueDisplay.textContent = slider.value + "% size"; 
});


const sliderDeux = document.getElementById('slider2');
const sliderValueDisplay2 = document.getElementById('sliderValue2');
sliderDeux.addEventListener('input', () => {
  sliderValueDisplay2.textContent = sliderDeux.value + "% space";
});


// checkboxes TITLE --------------------------------------------------------------------------------------//
const titleButton1 = document.querySelector('.title1');
const titleButton2 = document.querySelector('.title2');
const titleButton3 = document.querySelector('.title3');

checkbox1.addEventListener('input', () => {
  const typo1 = checkbox1.value; 
  if (checkbox1.checked) {
  textarea.style.fontFamily = 'Playpen Sans'; 
  textarea.style.fontWeight = '400';
  }
});

checkbox2.addEventListener('input', () => {
  const typo2 = checkbox2.value; 
  if (checkbox2.checked) {
  textarea.style.fontFamily = 'Noto Serif';
  textarea.style.fontWeight = '400';
  }
});

checkbox3.addEventListener('input', () => {
  const typo3 = checkbox3.value; 
  if (checkbox3.checked) {
  textarea.style.fontFamily = 'Jura';
  textarea.style.fontWeight = '500'; 
  }
});


// sub-checkboxes -----------------------------------------------------------------------------------------------------//

// playpen : thin, medium and bold -----------------------------------------------------------
const subButton1thin = document.querySelector('.sub-options2');
checkbox1a.addEventListener('input', () => {
  const thin1a = checkbox1a.value; 
  if (checkbox1a.checked) {
    textarea.style.fontWeight = '200'; 
  }
});

const subButton1bold = document.querySelector('.sub-options2');
checkbox1c.addEventListener('input', () => {
  const bold1c = checkbox1c.value; 
  if (checkbox1c.checked) {
    textarea.style.fontWeight = '800'; 
  }
});

const subButton1medium = document.querySelector('.sub-options2');
checkbox1b.addEventListener('input', () => {
  const medium1b = checkbox1b.value; 
  if (checkbox1b.checked) {
    textarea.style.fontWeight = '400'; 
  }
});

// noto serif : thin, medium and bold -----------------------------------------------------------
const subButton2thin = document.querySelector('.sub-options2');
checkbox2a.addEventListener('input', () => {
  const thin2a = checkbox2a.value; 
  if (checkbox2a.checked) {
    textarea.style.fontWeight = '200'; 
  }
});

const subButton2bold = document.querySelector('.sub-options2');
checkbox2c.addEventListener('input', () => {
  const bold2c = checkbox2c.value; 
  if (checkbox2c.checked) {
    textarea.style.fontWeight = '800'; 
  }
});

const subButton2medium = document.querySelector('.sub-options2');
checkbox2b.addEventListener('input', () => {
  const medium2b = checkbox2b.value; 
  if (checkbox2b.checked) {
    textarea.style.fontWeight = '400'; 
  }
});


// jura : thin, medium and bold -----------------------------------------------------------
const subButton3thin = document.querySelector('.sub-options3');
checkbox3a.addEventListener('input', () => {
  const thin3a = checkbox3a.value; 
  if (checkbox3a.checked) {
    textarea.style.fontWeight = '300'; 
  }
});

const subButton3bold = document.querySelector('.sub-options3');
checkbox3c.addEventListener('input', () => {
  const bold3c = checkbox3c.value; 
  if (checkbox3c.checked) {
    textarea.style.fontWeight = '700'; 
  }
});

const subButton3medium = document.querySelector('.sub-options3');
checkbox3b.addEventListener('input', () => {
  const medium3b = checkbox3b.value; 
  if (checkbox3b.checked) {
    textarea.style.fontWeight = '500'; 
  }
});





