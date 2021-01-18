const nav = document.querySelector('.nav')
nav.style.textAlign = 'center'
nav.style.fontSize = '1.5rem'

//selecting the h1. 

let h1 = document.querySelector('h1');
//change h1 color on hover.
function onH1Hover(event){
    h1.style.fontSize = '7rem';
    h1.style.transition = '350ms'
    h1.style.color='orange';
}

h1.addEventListener('mouseover', onH1Hover)
//page style
h1.style.fontSize = '5rem';
h1.style.textAlign ='center';

//change h1 Color on mouse out
function changeH1Color (event){
    h1.style.color ='black'
    h1.style.fontSize ='5rem'
    h1.style.transition = '350ms'
}
h1.addEventListener('mouseout', changeH1Color)

