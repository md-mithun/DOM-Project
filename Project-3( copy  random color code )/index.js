const btn = document.getElementById('btn');
const out = document.getElementById('output');


btn.addEventListener('mousedown', function () {
    btn.classList.add('fw');
    createColor();
});


function createColor() {
    const red = (Math.floor((Math.random() * 254) + 1)).toString(16);
    const green = (Math.floor((Math.random() * 254) + 1)).toString(16);
    const blue = (Math.floor((Math.random() * 254) + 1)).toString(16);
    const bg = `#${red}${green}${blue}`;
    out.value = bg;
    appliedColor(bg);
}


function appliedColor(bg) {
    const div = document.getElementById('div');
    div.style.background = bg;
}
btn.addEventListener('mouseup', function () {
    btn.classList.remove('fw');
})

const copyBtn = document.getElementById('copy-btn').addEventListener('click', function () {
    window.navigator.clipboard.writeText(out.value);
    alert(`${out.value} copied`);
})