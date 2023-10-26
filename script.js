const url = 'https://fakerapi.it/api/v1/companies?quantity=';

const input = document.querySelector('.input');
const btn = document.querySelector('.submit');

btn.addEventListener('click', () => {
    document.querySelector('.posts').innerHTML = '';
    if (input.value.length > 0) fakerapi();
    input.value = '';
});

async function fakerapi() {
    const inputValue = input.value;
    let res = await fetch(`${url + inputValue}`);
    let data = await res.json();
    let response = data.data;

    let list = document.querySelector('.posts');
    let key;

    for (key in response) {
        console.log(response[key].name);
        if (!response[key] == "") {
            list.innerHTML += `
            <li class="post">
        ${response[key].name}</>
            </li>
            `
        } else {
            list.innerHTML = 'No items'
        }
    }
}