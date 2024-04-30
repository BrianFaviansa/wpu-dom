// DOM Manipulation method

// manipulasi element
// manipulasi node

// manipulasi element
// 1. innerHTML
// 2. element.style.<property>
// 3.   element.getAttribute()
//      element.setAttribute()
//      element.removeAttribute()
// 4. classList

// 1. innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Brian Faviansa</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World!';

// 2. element.style.<property>
// const judul = document.querySelector('#judul');
// judul.style.color = 'white';
// judul.style.backgroundColor = 'tomato';

// 3. attribute()
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'brian');

// const a = document.querySelector('section#a a')
// a.setAttribute('id', 'link');
// a.getAttribute('href');

// const p2 = document.querySelector('.p2');
// p2.setAttribute('class', 'label');

// 4. element.classList
// classList.add(), remove(), toggle(), item(), contains(), replace()
const p2 = document.querySelector('.p2');
p2.classList.add('label');
p2.classList.remove('label');
p2.classList.toggle('label');
// document.body.classList.toggle('biru-muda');
// document.body.classList.toggle('biru-muda');
p2.classList.item(1);
p2.classList.contains('label');
p2.classList.replace('label', 'label-baru');
