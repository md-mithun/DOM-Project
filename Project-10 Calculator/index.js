window.onload = () => {
  output = document.getElementById('display');
};

function calc(own) {
  if (own.value == '') {
    output.value = '';
  } else if (own.value == 'equal') {
    // Check if the input field is empty.
    if (output.value == '') {
      // If the input field is empty, display an error message.
      output.value = '';
      return;
    } else {
      output.value = eval(output.value);
    }
  } else if (own.value == '%') {
    output.value = eval(`${output.value} / 100`);
  } else {
    output.value += own.value;
  }
  console.clear();
}
