const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/fresno.png');
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png');
  }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt('Por favor, digite o seu nome');

  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Seja bem-vindo, ${myName}`;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `Bem-vindo novamente, ${storedName}`;
}

myButton.addEventListener('click', () => {
  setUserName();
});
