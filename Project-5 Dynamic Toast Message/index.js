// find dom element
const colorButton = document.getElementById('color-btn');
const copyButton = document.getElementById('copy-btn');
const outPutTextBox = document.getElementById('output');
//globals
toast = null;

//generate random color
colorButton.addEventListener('click', function () {
    const red = Math.floor(Math.random() * 254);
    const green = Math.floor(Math.random() * 254);
    const blue = Math.floor(Math.random() * 254);
    const bgColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    setDivColor(bgColor);

    //set hex color as display 
    outPutTextBox.value = bgColor.toUpperCase();
});

//set random color on main-div
function setDivColor(bgColor) {
    const mainDiv = document.querySelector('.main');
    mainDiv.style.background = bgColor;
}


//copy color code 
copyButton.addEventListener('click', function () {
    const colorCode = outPutTextBox.value;
    if (colorCode != '') {
        window.navigator.clipboard.writeText(colorCode.toUpperCase());
        // if one toast already here in body another toast wouldn't create
        if (toast !== null) {
            toast.remove();
            toastMessage(colorCode.toUpperCase());
        } else {
            toastMessage(colorCode.toUpperCase());
        }
    }
}
)

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
