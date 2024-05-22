// const tutup = document.querySelector('.close');
// const kartu = document.querySelector('.card');

// tutup.addEventListener('click', function() {
//     kartu.style.display = 'none';
// });

// dom traversal
const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) {
//         // alert('tombol close ke-' + parseInt(i + 1) );
//         e.target.parentElement.style.display = 'none';
//         // close[i].parentElement.style.display = 'none';
//     });
// }

close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
        e.stopPropagation();
    });
    
});

//  dom traversal method

// parentNode => node
// parentElement => element
// nextSibling => node
// nextElementSibling => element
// previousSibling => node
// previousElementSibling => element