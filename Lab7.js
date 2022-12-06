function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    let greeting;
    if(userAge <= 17) {
        greeting = 'Здравствуй, ';
        if(userSex == 'female') {
            greeting += 'девочка ';
        }
        else {
            greeting += 'мальчик';
        }
        alert(greeting + userName + ' ' + userSurname + ' ' + 'Ваш возраст: ' + userAge)
    }
    else {
        greeting = 'Здравствуйте, ';
        if(userSex == 'female') {
            greeting += 'Госпожа ';
        }
        else {
            greeting += 'Господин';
        }
        alert(greeting + userName + ' ' + userSurname + ' ' + 'Ваш возраст: ' + userAge)
    }
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color 
}

function makeStairs() {
    let stairs = document.querySelector('#stairs');
    let stepCount = 5;
    for (let i = 0; i<stepCount; i++) {
        stairs.innerHTML += '<div class="step"></div>';
    }
    let steps = document.querySelectorAll('.step');
    for (let i = 0; i <steps.length; i++) {
        steps[i].style.left = (30 * 10*i) + 'px';
        steps[i].style.top = (300 + 80*i) + 'px';
        steps[i].innerHTML = 'Блок номер' + ' ' + Number(i+1);
    }
}