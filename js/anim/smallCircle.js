export function smallRotatingCircle(btn) {
    let isAnimating = false;
    
    btn.addEventListener('click', function () {
        const animatedElement = document.getElementById('animated');
    
        if (isAnimating) {
            animatedElement.classList.remove('rotating');
            btn.innerHTML = "Again?";
            isAnimating = false;
        } else {
            animatedElement.classList.add('rotating');
            btn.innerHTML = "Stopp it!";
            isAnimating = true;
        }
    });
}
