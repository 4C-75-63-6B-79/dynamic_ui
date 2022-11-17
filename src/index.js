import './styles.css';

function printName(name) {
  console.log(`hi ${name}`);
}

printName("Jack");

function makeNav() {
    const body = document.querySelector('body');
    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'navbar');
    body.appendChild(navBar);
    return navBar;
}

function makeButton(buttonName) {
    const button = document.createElement('button');
    button.textContent = buttonName;
    return button;
}

(function start() {
    const navBar = makeNav();
    navBar.appendChild(makeButton('Home'));
    navBar.appendChild(makeButton('Menu'));
    navBar.appendChild(makeButton('About'));
})();

