const btn = document.getElementById('btn');
btn.addEventListener('click', createColor);


function createColor() {
    const red = Math.floor((Math.random() * 254) + 1);
    const green = Math.floor((Math.random() * 254) + 1);
    const blue = Math.floor((Math.random() * 254) + 1);
    const bg = `rgb(${red},${green},${blue})`;

    appliedColor(bg);
}


function appliedColor(bg) {
    const div = document.getElementById('div');
    div.style.background = bg;
}