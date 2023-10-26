const url = 'https://fakerapi.it/api/v1/companies?quantity=';

const input = document.querySelector('.input');
const btn = document.querySelector('.submit');
const list = document.querySelector('.posts');

btn.addEventListener('click', () => {
    list.innerHTML = '';
    if (input.value >= 1) {
        fakerapi();
    } else {
        list.innerHTML = 'No items';
    }
    input.value = '';
});

async function fakerapi() {
    const inputValue = input.value;
    let res = await fetch(`${url + inputValue}`);
    let data = await res.json();
    let response = data.data;

    let key;

    for (key in response) {
        if (response[key]) {
            list.innerHTML += `
            <li class="post">
        ${response[key].name}
        </>
            </li>
            `
        }
    }
}


