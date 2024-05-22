const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', (e) => {
    if(e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(() => {
            jumbo.classList.remove('fade');
        }, 500);
    }

    thumbs.forEach(function(thumb) {
        if (thumb.classList.contains('active')) {
            thumb.classList.remove('active');
        }
    })

    e.target.classList.add('active');
});

