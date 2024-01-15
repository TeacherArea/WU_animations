let isAnimating = false;

let btn = document.getElementById('animate-button');

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

const sphere = document.getElementById('sphere');
const rows = [];
for(let i = 0; i < 180; i += 9) {
    rows.push(`<div class="line" style="transform: rotateY(${i}deg);"></div>`);
}

sphere.innerHTML = rows.join("");
