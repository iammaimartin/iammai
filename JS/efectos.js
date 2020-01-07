let prevScrollpos = window.pageYOffset;
const navbar = () => {
  const el = document.getElementById("navbar");
  const rect = el.getBoundingClientRect()
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    el.style.top = "0";
  } else {
    el.style.top = -(rect.height) + "px";
  }
  prevScrollpos = currentScrollPos;
}



document.addEventListener('scroll', navbar)



function myFunction() {

  let graphicButton = document.getElementById("graphicButton");
  let allButton = document.getElementById("allButton");
  let uxUiButton = document.getElementById("uxUiButton");
  let illustrationButton = document.getElementById("illustrationButton");
  let uxUi = document.getElementById("ux-ui");
  let graphic = document.getElementById("graphic-design");
  let illustration = document.getElementById("illustration");
  allButton.style.textDecoration = 'underline wavy #D4273E';
  uxUiButton.style.textDecoration = 'none';
  graphicButton.style.textDecoration = 'none';
  illustrationButton.style.textDecoration = 'none';
  uxUi.style.display = "flex";
  graphic.style.display = 'flex';
  illustration.style.display = 'flex';
  AOS.refresh();
}

function myFunction2() {
  let uxUi = document.getElementById("ux-ui");

  let graphicButton = document.getElementById("graphicButton");
  let allButton = document.getElementById("allButton");
  let uxUiButton = document.getElementById("uxUiButton");
  let illustrationButton = document.getElementById("illustrationButton");
  let graphic = document.getElementById("graphic-design");
  let illustration = document.getElementById("illustration");
  uxUi.style.display = "flex";
  graphic.style.display = 'none';
  illustration.style.display = 'none';
  uxUiButton.style.textDecoration = 'underline wavy #D4273E';
  allButton.style.textDecoration = 'none';
  graphicButton.style.textDecoration = 'none';
  illustrationButton.style.textDecoration = 'none';
  AOS.refresh();
}

function myFunction3() {
  let graphic = document.getElementById("graphic-design");

  let graphicButton = document.getElementById("graphicButton");
  let allButton = document.getElementById("allButton");
  let uxUiButton = document.getElementById("uxUiButton");
  let illustrationButton = document.getElementById("illustrationButton");
  let uxUi = document.getElementById("ux-ui");
  let illustration = document.getElementById("illustration");
  graphic.style.display = 'flex';
  graphicButton.style.textDecoration = 'underline wavy #D4273E';
  illustrationButton.style.textDecoration = 'none';
  uxUiButton.style.textDecoration = 'none';
  allButton.style.textDecoration = 'none';
  uxUi.style.display = 'none';
  illustration.style.display = 'none';
  AOS.refresh();

}

function myFunction4() {
  let illustration = document.getElementById("illustration");

  let graphicButton = document.getElementById("graphicButton");
  let allButton = document.getElementById("allButton");
  let uxUiButton = document.getElementById("uxUiButton");
  let illustrationButton = document.getElementById("illustrationButton");
  let uxUi = document.getElementById("ux-ui");
  let graphic = document.getElementById("graphic-design");
  illustration.style.display = 'flex';
  illustrationButton.style.textDecoration = 'underline wavy #D4273E';
  allButton.style.textDecoration = 'none';
  uxUiButton.style.textDecoration = 'none';
  graphicButton.style.textDecoration = 'none';
  uxUi.style.display = 'none';
  graphic.style.display = 'none';
  AOS.refresh();
  console.log(AOS)
}