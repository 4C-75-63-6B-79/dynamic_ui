import './styles.css';

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

function makeDropDownList(list) {
    const dorpDownList = document.createElement('ul');
    list.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        dorpDownList.appendChild(listItem);
    });
    return dorpDownList;
}

function makeDropDownMenu(buttonName, listItems) {
    const dropDownMenu = document.createElement('div');
    dropDownMenu.setAttribute('class', 'dropDownMenu');
    dropDownMenu.appendChild(makeButton(buttonName));
    dropDownMenu.appendChild(makeDropDownList(listItems));
    return dropDownMenu;
}
function lineMenuButtonClicked() {
    const navBar = document.getElementById('navbar');
    const navDisplayValue = navBar.style.display;
    const lineMenuButton = document.getElementById('lineMenuButton');
    if(navDisplayValue === 'none') {
        lineMenuButton.classList.add('rotate');
        navBar.style.display = 'flex';
    } else {
        lineMenuButton.classList.remove('rotate');
        navBar.style.display = 'none';
    }
}

function makeLineButton() {
    if(document.getElementById('lineMenuButton')) {
        const lineButton = document.getElementById('lineMenuButton');
        lineButton.parentElement.removeChild(lineButton);
    }
    const div = document.createElement('div');
    div.setAttribute('id', 'lineMenuButton');
    for(let i=0; i<3; i+=1) {
        const span = document.createElement('span');
        div.appendChild(span);
    }
    div.addEventListener('click', lineMenuButtonClicked, {capture: true});
    return div;
}

function removeLineMenuButton(body) {
    const lineMenuButton = document.getElementById('lineMenuButton');
    if(lineMenuButton) {
        body.removeChild(lineMenuButton);
    }
}

function windowResized() {
    const body = document.querySelector('body');
    const navBar = document.getElementById('navbar');
    if(window.innerWidth < 400) {
        navBar.style.display = 'none';
        body.appendChild(makeLineButton());
    } else {
        removeLineMenuButton(body);
        navBar.style.display = 'flex';
    }
}

(function start() {
    const navBar = makeNav();
    navBar.appendChild(makeDropDownMenu('Home', ['Living Room', 'Bed Room', 'Kitchen']));
    navBar.appendChild(makeDropDownMenu('Menu', ['TV Menu', 'Restaurant Menu', 'Microwave Menu']));
    navBar.appendChild(makeDropDownMenu('About', ['About you', 'About anyone']));
    windowResized();
})();

window.addEventListener('resize', windowResized);
