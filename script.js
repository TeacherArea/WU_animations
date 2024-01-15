let isAnimating = false;

let btn = document.getElementById('animate');

btn.addEventListener('click', function () {
    const animatedElement = document.getElementById('animated');

    if (isAnimating) {
        animatedElement.classList.remove('rotating');
        btn.innerHTML = "Start";
        isAnimating = false;
    } else {
        animatedElement.classList.add('rotating');
        btn.innerHTML = "Stopp";
        isAnimating = true;
    }
});
