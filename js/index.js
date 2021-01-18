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

const anchor = document.querySelectorAll('.nav-link')

anchor[0].addEventListener('click', event =>{
    anchor[0].style.fontSize = '7rem'
    anchor[0].style.color ='gold'
})

anchor[1].addEventListener('dblclick', event =>{
    anchor[1].style.fontSize = '7rem';
    anchor[1].style.color ='yellow';
})

const html = document.querySelector('html')

html.addEventListener('click', event =>{
    html.style.backgroundColor = 'dodgerblue'
})

let img = document.querySelectorAll('img')


let color = new Array();
color[0] = "#CC99FF";
color[1] = '#FF99CC';
color[2] = '#FF9744';
color[3] = '#114455';
color[4] = '#FFFF99';
color[5] = '#887675';
color[6] = '#772233';
color[7] = '#WW3322';
color[8] = '#SS6j6j';

function changeColor()
{
 let randomColor = Math.floor(Math.random() * 6)
  console.log(color[randomColor]);
  document.getElementsByTagName("body")[0].style.backgroundColor=color[randomColor];
};