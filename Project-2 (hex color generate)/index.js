const btn = document.getElementById('btn');
btn.addEventListener('mousedown', function(){
    btn.classList.add('fw');
    createColor();
});


function createColor() {
    const red = (Math.floor((Math.random() * 254) + 1)).toString(16);
    const green = (Math.floor((Math.random() * 254) + 1)).toString(16);
    const blue = (Math.floor((Math.random() * 254) + 1)).toString(16);
    const bg = `#${red}${green}${blue}`;

    appliedColor(bg);
}


function appliedColor(bg) {
    const div = document.getElementById('div');
    div.style.background = bg;
}
btn.addEventListener('mouseup',function(){
    btn.classList.remove('fw');
})
