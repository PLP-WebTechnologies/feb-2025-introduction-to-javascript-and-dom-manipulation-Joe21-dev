 const myContent = document.getElementById('myContent');
myContent.textContent = 'content changed';
myContent.style.fontSize = '14px';
myContent.style.color = 'blue';

const button = document.getElementById('toggleButton');
const container = document.getElementById('container');

function changeText() {
    container.textContent = 'The text has been changed';
    
}
button.addEventListener('click', changeText);