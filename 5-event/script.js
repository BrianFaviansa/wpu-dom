// cara mendengarkan event

// 1. Event Handler -> on<event>
// - inline html attribute
// - element method
// 2. addEventListener()

const p3 = document.querySelector('.p3');

function changeP2Color() {
    p2.style.backgroundColor = 'lightgreen';
}
function changeP3Color() {
    p3.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.onclick = changeP2Color;

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('Item Baru');
    liBaru.appendChild(teksLiBaru);

    ul.appendChild(liBaru);
});

// event handler menimpa jika dibuat lebih dari 1 sedangkan addeventlistener semua dijalankan

// lebih baik gunakan event listener jangan inline html attribute
