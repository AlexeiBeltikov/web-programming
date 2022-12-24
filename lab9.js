function clickMe(button) {
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else
        button.innerHTML = 'Щелчок';
}

function clickMeFIO(button) {
    if(button.innerHTML == 'Алексей')
        button.innerHTML = 'Бельтиков';
    else
        button.innerHTML = 'Алексей';
}

function clickMe4raza(button) {
if(button.innerHTML == 'Нажми меня')
     button.innerHTML = 'Ещё раз нажми';
else if (button.innerHTML == 'Ещё раз нажми')
            button.innerHTML = 'Ещё';
else if (button.innerHTML == 'Ещё')
            button.innerHTML = 'Начать сначала';
else if (button.innerHTML == 'Начать сначала')
            button.innerHTML = 'Нажми меня';
else button.innerHTML = 'Нажми меня';

let r = Math.round(Math.random()*255);
let g = Math.round(Math.random()*255);
let b = Math.round(Math.random()*255);
let color = 'rgb(' + r + ',' + g + ',' + b + ')';
document.getElementById('4').style.backgroundColor = color 
}

function showCoords(event) {
    event.target.innerHTML = 'x = ' + event.offsetX + ', y = ' + event.offsetY;
}
window.addEventListener('DOMContentLoaded', function() {
let coords = document.querySelector('#coords');
coords.addEventListener('mousemove', showCoords);

coords.addEventListener('click', func);
function func(event) {
	if (event.ctrlKey) {
		alert('x = ' + event.offsetX + ', y = ' + event.offsetY + ' и нажат Ctrl');
	}
	if (event.altKey) {
		alert('x = ' + event.offsetX + ', y = ' + event.offsetY + ' и нажат Alt');
	}
	if (event.shiftKey) {
		alert('x = ' + event.offsetX + ', y = ' + event.offsetY + ' и нажат Shift');
	}
}}
);

window.addEventListener('DOMContentLoaded', function() {
    let coords = document.querySelector('#coords');
    coords.addEventListener('mousemove',showCoords);
});


function showFocus(event) {
    event.target.style.color = 'green';
    event.target.style.fontSize = '100px';
}

window.addEventListener('DOMContentLoaded', function() {
    let text = document.querySelectorAll('input[type = "text"]');
    text[0].addEventListener('focus',showFocus);
    text[1].addEventListener('focus',showFocus);
    text[2].addEventListener('focus',showFocus);
});

function showBlur(event) {
    event.target.style.color = 'black';
    event.target.style.fontSize = '13px';
}

window.addEventListener('DOMContentLoaded', function() {
    let text = document.querySelectorAll('input[type = "text"]');
    text[0].addEventListener('blur',showBlur);
    text[1].addEventListener('blur',showBlur);
    text[2].addEventListener('blur',showBlur);
});

function showChange(event) {
    document.getElementById('output').innerHTML=event.target.value;
}

window.addEventListener('DOMContentLoaded', function() {
    let text = document.querySelectorAll('input[type = "text"]');
    text[0].addEventListener('change',showChange);
    text[1].addEventListener('change',showChange);
    text[2].addEventListener('change',showChange);
});