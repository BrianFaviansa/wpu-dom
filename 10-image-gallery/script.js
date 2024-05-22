const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');

container.addEventListener('click', (e) => {
    if(e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(() => {
            jumbo.classList.remove('fade');
        }, 500);
    }
});

// 17:42
