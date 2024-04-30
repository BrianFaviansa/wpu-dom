// DOM Manipulation method

// manipulasi element
// manipulasi node

// manipulasi node
// 1. document.createElement()
// 2. document.createTextNode()
// 3. node.appendChild()
// 4. node.insertBefore()
// 5. parentNode.removeChild()
// 6. parentNode.replaceChild()

// buat element p baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf baru');

// simpan tulisan ke dalam pBaru
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// buat element li baru
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item baru');

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
// const li2 = document.querySelector('section#b ul li:nth-child(2)');
const li2 = ul.querySelector('li:nth-child(2)');

// masukkan ke sebelum li2
ul.insertBefore(liBaru, li2);

// mau removeChild link
const linkIg = document.getElementsByTagName('a')[0];
sectionA.removeChild(linkIg);

// mau replaceChild
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const judulBaru = document.createElement('h2');
const teksJudulBaru = document.createTextNode('Judul baru');
judulBaru.appendChild(teksJudulBaru);

sectionB.replaceChild(judulBaru, p4);

pBaru.style.backgroundColor = 'lightgreen';
judulBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';

// manipulasi node (method baru)

// 1. parentNode.append() -> akhir
// 2. parentNode.prepend() -> awal
// 3. childNode.before()
// 4. childNode.after()
// 5. childNode.remove()
// 6. childNode.replaceWith()
