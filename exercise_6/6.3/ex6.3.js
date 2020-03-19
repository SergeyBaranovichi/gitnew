const countries = [
    {
        name: "Беларусь",
        area: 207595,
        people: "9,5млн",
        language: "Русский, Белорусский",
        phone: "+3",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1920px-Flag_of_Belarus.svg.png"
    },
    {
        name: "Россия",
        area: 17125191,
        people: "146,4млн",
        language: "Русский",
        phone: "+7",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1920px-Flag_of_Russia.svg.png"
    },
    {
        name: "США",
        area: 9519431,
        people: "328,9млн",
        language: "Английский",
        phone: "+1",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png"
    }
];
const table = document.getElementById('table');
table.insertAdjacentHTML('beforeend', `<th><tr>
    <td>Страна</td>
    <td>Площадь</td>
    <td>Население</td>
    <td>Язык</td>
    <td>Телефонный код</td>
    <td>Флаг</td></tr>
    </th>`);
table.insertAdjacentHTML('beforeend', '<tbody id="tbody"></tbody>');
const tbody = document.getElementById('tbody');
for (let i = 0; i < countries.length; i++) {
    tbody.insertAdjacentHTML('beforeend', `<tr>
    <td>${countries[i].name}</td>
    <td>${countries[i].area}</td>
    <td>${countries[i].people}</td>
    <td>${countries[i].language}</td>
    <td>${countries[i].phone}</td>
    <td><img src="${countries[i].flag}" height=100px></td>
    </tr>`);
}