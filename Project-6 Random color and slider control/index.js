//globals
hex = null;
rgb = null;
mode = null;
toast = null;

//slider refference
const sliders = document.getElementsByName('slider');
const redSlider = document.getElementById('red-slider');
const greenSlider = document.getElementById('green-slider');
const blueSlider = document.getElementById('blue-slider');

//Range text refference
const redDecimal = document.getElementById('red-decimal');
const greenDecimal = document.getElementById('green-decimal');
const blueDecimal = document.getElementById('blue-decimal');

//color output div refference
const outColorDiv = document.getElementById('color-display');

//color code output refference
const hexOut = document.getElementById('hex-out');
const rgbOut = document.getElementById('rgb-out');
//random color event
function randomColor() {
    generateColor();
}

function displayColor(red, green, blue) {

    rgb = `rgb(${red},${green},${blue})`;
    const r = parseInt(red).toString(16);
    const g = parseInt(green).toString(16);
    const b = parseInt(blue).toString(16);
    hex = (`#${r}${g}${b}`).toUpperCase();
    outColorDiv.style.backgroundColor = rgb;
    document.querySelector('.container').style.borderColor = hex;
    hexOut.style.borderColor = rgb;
    rgbOut.style.borderColor = rgb;
    hexOut.value = hex;
    rgbOut.value = rgb;
}

function setSlideLevelTextDec(red, green, blue) {
    redDecimal.innerText = red;
    greenDecimal.innerText = green;
    blueDecimal.innerText = blue;
}
//set range value for randomly color change
function setSliderValue(red, green, blue) {
    redSlider.value = parseInt(red);
    greenSlider.value = parseInt(green);
    blueSlider.value = parseInt(blue);
}

//Change color by slider
function changeColorBySlider() {
    sliders.forEach(slide => {
        slide.addEventListener('change', function () {
            const red = redSlider.value;
            const green = greenSlider.value;
            const blue = blueSlider.value;
            generateColor(red, green, blue);
        })
    });
}
changeColorBySlider();

function generateColor(red, green, blue) {
    if (red, green, blue) {
        displayColor(red, green, blue);
        setSlideLevelTextDec(red, green, blue);
    } else {
        const red = Math.ceil(Math.random() * 255);
        const green = Math.ceil(Math.random() * 255);
        const blue = Math.ceil(Math.random() * 255);
        displayColor(red, green, blue);
        setSlideLevelTextDec(red, green, blue);
        setSliderValue(red, green, blue);
    }
}

//set copy mode
function handleClick(m) {
    mode = m.value;
}
//copy button handle click event
const copyBtn = document.getElementById('copy-btn');
copyBtn.addEventListener('click', function () {
    if (hex == null || rgb == null || mode == null) {
        toastMessage('Sorry ,no text')
    }

    else if (mode === 'rgb') {
        setCopyColor(rgb);
        if (toast !== null) {
            toast.remove();
            toastMessage(rgb);
        } else {
            toastMessage(rgb);
        }
    }
    else if (mode === 'hex') {
        setCopyColor(hex);
        if (toast !== null) {
            toast.remove();
            toastMessage(hex);
        } else {
            toastMessage(hex);
        }
    }

})


function setCopyColor(color) {
    window.navigator.clipboard.writeText(color);
}


//generate toast message
function toastMessage(message) {
    toast = document.createElement('div');
    toast.innerText = `${message} copied`;
    toast.classList = 'toast toast-animation-in';
    // remove toast message after 2second
    setTimeout(function () {
        toast.classList.add('automatic-toast-delete-animation');
        toast.addEventListener('animationend', function () {
            toast.remove();
        }
        )
    }, 2000);
    //remove toast by click
    toast.addEventListener('click', function () {
        toast.classList.remove('toast-animation-in');
        toast.classList.add('toast-animation-out');

        toast.addEventListener('animationend', function () {
            toast.remove();
        }
        )
    })
    document.body.appendChild(toast);
}
