import img1 from "./images/img_1.jpg";
import img2 from "./images/img_2.jpg";
import img3 from "./images/img_3.jpg";
import img4 from "./images/img_4.jpg";
import img5 from "./images/img_5.jpg";
import img6 from "./images/img_6.jpg";

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
    if(window.innerWidth < 401) {
        navBar.style.display = 'none';
        body.appendChild(makeLineButton());
    } else {
        removeLineMenuButton(body);
        navBar.style.display = 'flex';
    }
}

function makeSlider() {
    const div = document.createElement('div');
    div.setAttribute('id','slider');
    return div;
}

function addImagesToSlider(imgSrc, slider, pos, classs=null) {
    const img = new Image();
    img.src = imgSrc;
    img.setAttribute('data-pos', pos);
    img.setAttribute('class', classs);
    slider.appendChild(img)
}

function slideImages(event, direction) {
    const arrow = direction || event.target.getAttribute('id');
    const imgNumber = document.querySelectorAll('img[data-pos]').length;
    let img = document.querySelector('#slider > img.onScreen');
    let pos = Number(img.getAttribute('data-pos'));
    let dot = document.querySelector(`div[data-dotIndex="${pos}"]`);
    if(arrow === 'right' && pos+1 < imgNumber) {
        img.classList.remove('onScreen');
        dot.classList.remove('clickedDot');
        img.classList.add('offScreenLeft');
        pos += 1;
        img = document.querySelector(`img[data-pos="${pos}"]`);
        dot = document.querySelector(`div[data-dotIndex="${pos}"]`);
        img.classList.remove('offScreenRight');
        img.classList.add('onScreen');
        dot.classList.add('clickedDot');
    } else if(arrow === 'left' && pos-1 > -1) {
        img.classList.remove('onScreen');
        dot.classList.remove('clickedDot');
        img.classList.add('offScreenRight');
        pos -= 1;
        img = document.querySelector(`img[data-pos="${pos}"]`);
        dot = document.querySelector(`div[data-dotIndex="${pos}"]`);
        img.classList.remove('offScreenLeft');
        img.classList.add('onScreen');
        dot.classList.add('clickedDot');
    }
}

function makeSliderArrow(id) {
    const div = document.createElement('div');
    div.setAttribute('id', id);
    div.setAttribute('class', 'arrow');
    div.addEventListener('click', slideImages);
    return div;
}

function makeSlideDotsContainer() {
    const div = document.createElement('div');
    div.setAttribute('id', 'dotContainer');
    return div;
}

function advanceImages(event, index) {
    const clickedDot = event ? event.target : null;
    const dotIndex = index || clickedDot.getAttribute('data-dotIndex');
    while(true) {
        const currentImage = document.querySelector('img.onScreen');
        const currentImagePos = currentImage.getAttribute('data-pos');
        if(Number(dotIndex) === Number(currentImagePos)) {
            break;
        } else if(Number(dotIndex) > Number(currentImagePos)) {
            slideImages(null, "right");
        } else {
            slideImages(null, 'left');
        }
    }
}

function slidesImgaesInFive() {
    const imgs = document.querySelectorAll('img[data-pos]');
    const imgsLength = imgs.length;
    const currentImage = document.querySelector('img.onScreen');
    const currentImagePos = currentImage.getAttribute('data-pos');
    if(Number(currentImagePos) === imgsLength-1) {
        advanceImages(null, "0");
    } else {
        slideImages(null, 'right');
    }
}

function makeSlidingDots(index) {
    const dot = document.createElement('div');
    dot.setAttribute('data-dotIndex', `${index}`);
    dot.setAttribute('class', 'dot');
    if(index === 0) {
        dot.classList.add('clickedDot');
    }
    dot.addEventListener('click', advanceImages);
    return dot;
}

setInterval(slidesImgaesInFive, 5000);

(function start() {
    const navBar = makeNav();
    navBar.appendChild(makeDropDownMenu('Home', ['Living Room', 'Bed Room', 'Kitchen']));
    navBar.appendChild(makeDropDownMenu('Menu', ['TV Menu', 'Restaurant Menu', 'Microwave Menu']));
    navBar.appendChild(makeDropDownMenu('About', ['About you', 'About anyone']));
    const slider = makeSlider();
    navBar.parentElement.appendChild(slider);
    slider.appendChild(makeSliderArrow('left'));
    const dotContainer = makeSlideDotsContainer();
    slider.appendChild(dotContainer);
    slider.appendChild(makeSliderArrow('right'));
    const imgSrc = [img1, img2, img3, img4, img5, img6];
    for(let i=0; i<imgSrc.length; i+=1) {
        if(i===0) {
            addImagesToSlider(imgSrc[i], slider, i, 'onScreen');
        } else {
            addImagesToSlider(imgSrc[i], slider, i, 'offScreenRight');
        }
        dotContainer.appendChild(makeSlidingDots(i));
    } 
    windowResized();
})();

window.addEventListener('resize', windowResized);
