const n = Number(prompt(""));
const table = document.getElementById('table');

for (let i = 0; i <= n; i++) {
    table.insertAdjacentHTML('beforeend', `<tr id="${i}"></tr>`);
    const tr = document.getElementById(`${i}`);
    for (let j = 0; j <= n; j++) {
        if (i === 0 && j === 0) {
            tr.insertAdjacentHTML('beforeend', `<td class="main">X</td>`);
            continue;
        }
        if (i === 0) {
            tr.insertAdjacentHTML('beforeend', `<td class="main">${1 * j}</td>`);
            continue;
        }
        if (j === 0) {
            tr.insertAdjacentHTML('beforeend', `<td class="main">${i * 1}</td>`);
            continue;
        }
        tr.insertAdjacentHTML('beforeend', `<td>${i * j}</td>`);
    }
}