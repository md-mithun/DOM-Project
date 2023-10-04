//Dom refference
const decimal = document.getElementById("dec");
const binary = document.getElementById("bin");
const octal = document.getElementById("oct");
const hexaDecimal = document.getElementById("hex");

//set initial toast message equal to null
toast = null;

// if x is empty string then set to all numbering method empty string
function emptyNumberChecked(x) {
  if (x == "") {
    binary.value = "";
    octal.value = "";
    hexaDecimal.value = "";
    decimal.value = "";
  } else {
    return true;
  }
}

//check binary validation
function binaryValidation(bin) {
  if (/^[01]+$/.test(bin)) {
    return true;
  } else {
    emptyNumberChecked(""); //set all empty string
    errorMessage(`${bin} is not valid binary number`);
    return false;
  }
}

//check hexa-decimal validation
function hexaDecimalValidation(hex) {
  if (/^[0-9a-fA-F]+$/i.test(hex)) {
    return true;
  } else {
    emptyNumberChecked(""); //set all empty string
    errorMessage(`${hex.toUpperCase()} is not valid hexadecimal number`);
    return false;
  }
}
//check octal validation
function octaValidation(octal) {
  if (/^[0-7]+$/.test(octal)) {
    return true;
  } else {
    emptyNumberChecked(""); //set all empty string
    errorMessage(`${octal} is not valid octal number`);
    return false;
  }
}

const Outputs = document.getElementsByClassName("output");
for (const element of Outputs) {
  element.addEventListener("keyup", function () {
    const num = element.value;
    if (element.name == "decimal") {
      fromDecimal(num);
    }
    if (element.name == "binary") {
      fromBinary(num);
    }
    if (element.name == "octal") {
      fromOctal(num);
    }
    if (element.name == "hexa") {
      fromHexaDecimal(num);
    }
  });
}

function fromDecimal(x) {
  if (emptyNumberChecked(x)) {
    const num = parseInt(x);
    binary.value = num.toString(2);
    octal.value = num.toString(8);
    hexaDecimal.value = num.toString(16);
  }
}

function fromOctal(x) {
  if (emptyNumberChecked(x) && octaValidation(x)) {
    const num = parseInt(x, 8); //now num is decimal
    binary.value = num.toString(2);
    decimal.value = num;
    hexaDecimal.value = num.toString(16);
  }
}

function fromBinary(x) {
  if (emptyNumberChecked(x) && binaryValidation(x)) {
    const num = parseInt(x, 2); //now num is decimal
    decimal.value = num;
    octal.value = num.toString(8);
    hexaDecimal.value = num.toString(16);
  }
}

function fromHexaDecimal(x) {
  if (emptyNumberChecked(x) && hexaDecimalValidation(x)) {
    const num = parseInt(x, 16); //now num is decimal
    decimal.value = num;
    binary.value = num.toString(2);
    octal.value = num.toString(8);
  }
}

//
function errorMessage(msg) {
  if (toast !== null) {
    //if one toast already appear delete this and add new
    toast.remove();
    toastMessage(msg);
  } else {
    toastMessage(msg);
  }
}

//----Toast message starts----//
//generate toast message
function toastMessage(message) {
  toast = document.createElement("div");
  toast.innerText = `${message}`;
  toast.classList = "toast toast-animation-in";
  // remove toast message after 2second
  setTimeout(function () {
    toast.classList.add("automatic-toast-delete-animation");
    toast.addEventListener("animationend", function () {
      toast.remove();
    });
  }, 2000);
  //remove toast by click
  toast.addEventListener("click", function () {
    toast.classList.remove("toast-animation-in");
    toast.classList.add("toast-animation-out");

    toast.addEventListener("animationend", function () {
      toast.remove();
    });
  });
  document.body.appendChild(toast);
}

//----toast message ends----//
