// DOM Selection

// document.querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p');
// p.innerHTML = 'Ini diubah melalui javascript';

// document.querySelectorAll() -> nodeList
// const pAll = document.querySelectorAll('p');
// for (let i = 0; i < pAll.length; i++) {
//     pAll[i].style.backgroundColor = 'lightblue';
// }

// const p4 = document.getElementsByTagName('p')[3];
// p4.style.backgroundColor = 'green';

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'orange';
