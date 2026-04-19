const can = document.querySelectorAll('.can');
can[0].style.display = 'block';
const buttons = document.querySelectorAll('button');
let currentIndex = 0;
buttons[0].addEventListener('click', () => {
    can[currentIndex].style.display = 'none';
    can[currentIndex].classList.remove('animation');
    currentIndex = (currentIndex + 1) % can.length;
    can[currentIndex].style.display = 'block';
    can[currentIndex].classList.add('animation');
});
buttons[1].addEventListener('click', () => {
    can[currentIndex].style.display = 'none';
    can[currentIndex].classList.remove('animation');
    currentIndex = (currentIndex - 1 + can.length) % can.length;
    can[currentIndex].style.display = 'block';
    can[currentIndex].classList.add('animation');
});