const INCREASE_NUMBER_ANIMATION_SPEED = 50;
function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = `${i}+`;
        } else {
            element.innerText = i;
        }
        i+=100;
        setTimeout(function() {
            increaseNumberAnimationStep(i, element, endNumber);
        }, INCREASE_NUMBER_ANIMATION_SPEED)
    }

}
function initIncreaseNumberAnimation() {
    const element = document.querySelector('.features__clients-count')
    increaseNumberAnimationStep(0,element,5000)
}

//"Другое" в section
document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === 'other') {
        const formContainer = document.createElement('div')
        formContainer.classList.add('form__group', 'form__other-input')
        
        const input = document.createElement('input')
        input.placeholder = 'Введите ваш вариант'
        input.type = "text"
        formContainer.appendChild(input)

        document.querySelector('#form form').insertBefore(formContainer, document.querySelector('.form__submit'))
    }
    const otherInput = document.querySelector('.form__other-input')
    if (event.target.value !== 'other' && Boolean(otherInput)) {
        
        document.querySelector('#form form').removeChild(otherInput)
    }
});

//скролл и анимация рейтинга
let animationInited = false;
function updateScroll() {
    let windowBottomPosition = window.scrollY + window.innerHeight;
    let countElementPosition = document.querySelector('.features__clients-count').offsetTop;


    if (windowBottomPosition >= countElementPosition && !animationInited){
        animationInited = true;
        initIncreaseNumberAnimation();
    }

    let head = document.querySelector("head")

    if (window.scrollY > 0) {     
        head.classList.add("header__scrolled")
    } else {
        head.classList.remove("header__scrolled")
    }
}
window.addEventListener('scroll', updateScroll);

function addSmoothScroll(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    addSmoothScroll(anchor);
});

// addSmoothScroll(document.querySelector('.more-button'));