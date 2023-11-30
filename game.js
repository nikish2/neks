

const boxes = document.querySelectorAll('.style');

const checkBoxes = () => {
    const triger = (window.innerHeight / 5) * 4;
    for (const box of boxes) {
        const topOfBox = box.getBoundingClientRect().top;
        if (topOfBox < triger) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    }
};
checkBoxes();

window.addEventListener('scroll', checkBoxes);






const cards = document.querySelectorAll('.banda__card');

for (const frends of cards) {
    frends.addEventListener('click', () => {
        cleanActiveCards()

        frends.classList.add('active')
    })
};

function cleanActiveCards() {
    cards.forEach(frends => {
        frends.classList.remove('active')
    });
};


const misha = document.getElementById('misha');
const sania = document.querySelector('.sania');

document.addEventListener('keydown', function (event) {
    jump();
});

function jump() {
    if (misha.classList != 'jump') {
        misha.classList.add('jump')
    }
    setTimeout(function () {
        misha.classList.remove('jump')
    }, 300)
}

let isAlive = setInterval(function () {
    let mishaTop = parseInt(window.getComputedStyle(misha).getPropertyValue('top'));
    let saniaTop = parseInt(window.getComputedStyle(sania).getPropertyValue('left'));

    if (saniaTop < 50 && saniaTop > 0 && mishaTop >= 140) {
        alert('Зажмурился копченный');
    }
}, 10)



const stop = document.querySelector('.sania');
const btn = document.querySelector('.btn__stop');

btn.addEventListener('mousedown', () => {
    delite();
});

function delite() {
    if (stop.classList != 'clistart-endck') {
        stop.classList.toggle('start-end')
    } 
}










