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
    out.value = bg.toUpperCase();
    appliedColor(bg);
}


function appliedColor(bg) {
    const div = document.getElementById('div');
    div.style.background = bg;
}
btn.addEventListener('mouseup', function () {
    btn.classList.remove('fw');
})

// copy color code
const copyBtn = document.getElementById('copy-btn').addEventListener('click', function () {
    window.navigator.clipboard.writeText(out.value);
})

// validation check
function isvalidColor(color) {
    if (color.length !== 7 && color[0] !== '#') {
        return false;
    }
    else {
        color = color.substring(1);
        return /^[0-9a-fA-F]{6}$/i.test(color);
    }
}

out.addEventListener('keyup', function (e) {
    out.value = out.value.toUpperCase();
    const color = e.target.value;
    if (color && isvalidColor(color)) {
        div.style.background = color;
    }
})