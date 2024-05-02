const tombolUbahWarna = document.getElementById('tombolUbahWarna');

tombolUbahWarna.addEventListener('click', function () {
    // document.body.style.backgroundColor = 'lightblue'
    document.body.classList.toggle('biru-muda');
})

const tombolAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tombolAcakWarna.appendChild(teksTombol);
tombolAcakWarna.setAttribute('type', 'button');
tombolUbahWarna.after(tombolAcakWarna);

tombolAcakWarna.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

// const sMerah = document.querySelector('input[name=sMerah]');
// const sHijau = document.querySelector('input[name=sHijau]');
// const sBiru = document.querySelector('input[name=sBiru]');

// sMerah.addEventListener('input', function () {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// });
// sHijau.addEventListener('input', function () {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// });
// sBiru.addEventListener('input', function () {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// });

const range = document.querySelectorAll('input');

for (let i = 0; i < range.length; i++) {

    range[i].addEventListener('input', function () {
        const r = range[0].value;
        const g = range[1].value;
        const b = range[2].value;

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
}

document.body.addEventListener('mousemove', function (e) {
    // ukuran browser
    const lebar = window.innerWidth;
    const tinggi = window.innerHeight;

    const xPos = Math.round((e.clientX / lebar) * 255);
    const yPos = Math.round((e.clientY / tinggi) * 255);
    
    document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`;
});
