
export function backgroundSphere() {
    const sphere = document.getElementById('sphere');
    const rows = [];
    for (let i = 0; i < 180; i += 8) {
        rows.push(`<div class="line" style="transform: rotateY(${i}deg);"></div>`);
    }

    sphere.innerHTML = rows.join("");
}
