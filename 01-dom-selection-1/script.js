// DOM Selection

// document.getElementById() -> element
const judul = document.getElementById('judul');

judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Brian Faviansa';

// document.getElementsByTagName() -> HTMLCollection
const p = document.getElementsByTagName('p');
// p[2].style.backgroundColor = 'lightblue';

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari javascript';
