let navBar = document.getElementsByClassName("navBar")[0];
let slider = document.getElementsByClassName('slider')[0];
let itemArr = ['Home', 'Services', 'About us', 'Contact us'];
let tab = ['home', 'services', 'about', 'contact'];

for( let i = 0; i < itemArr.length; i++){
    navBar.innerHTML += `<div class='navItem' id='${i}'>
    <a href="#${tab[i]}" class='alink'>${itemArr[i]}</a>
    </div>`;
    let navItem = document.getElementsByClassName("navItem")[i];
    if (i == 0) {
        slider.style.width = navItem.offsetWidth + "px";
    }
}

navBar.addEventListener('click', (event)=>{
    console.log(event.target.parentNode.id);
    let clickedId = document.getElementById(event.target.parentNode.id);
    console.log(clickedId);
    slider.style.width = clickedId.offsetWidth + 'px';
    slider.style.transform = `translateX(${clickedId.offsetLeft}px)`;
});