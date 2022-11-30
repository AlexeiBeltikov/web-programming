function setRussian() {
    let name = document.getElementById ('student');
    name.innerHTML = 'Алексей Бельтиков';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Факультет бизнеса, ФБИ-01, 3 курс, 2022';

    document.getElementById('your-name').innerHTML = 'Ваше имя';
    document.getElementById('input-name').placeholder = 'введите имя';
}

function setEnglish() {
    let name = document.getElementById ('student');
    name.innerHTML = 'Alexey Beltikov';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Faculty of Business, FBI-01, 3rd year, 2022';

    document.getElementById('your-name').innerHTML = 'Your name';
    document.getElementById('input-name').placeholder = 'Enter your name';
}