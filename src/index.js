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

(function start() {
    const navBar = makeNav();
    navBar.appendChild(makeDropDownMenu('Home', ['Living Room', 'Bed Room', 'Kitchen']));
    navBar.appendChild(makeDropDownMenu('Menu', ['TV Menu', 'Restaurant Menu', 'Microwave Menu']));
    navBar.appendChild(makeDropDownMenu('About', ['About you', 'About someone', 'About anyone']));
})();

