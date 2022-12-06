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

function Snow() {
    let Snowles = document.querySelector('#Snowles');
    let snowCount = 100;
    for (let i = 0; i<snowCount; i++) {
        Snowles.innerHTML += '<img class="snowsnow" src=https://cdn-icons-png.flaticon.com/512/2530/2530005.png>';
    }
    
    let snowsnow = document.querySelectorAll('.snowsnow');
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;

    for (let i = 0; i<snowsnow.length; i++) {
        snowsnow[i].style.left = Math.random()*window.innerWidth + 'px';
        snowsnow[i].style.top = Math.random()*window.innerHeight + 'px';
        snowsnow[i].style.width = Math.random()* 100 + 'px';
    }
}