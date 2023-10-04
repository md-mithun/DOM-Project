//globals
count = 0;
const div = document.getElementById('display');

window.onload = () => {
  main(div);
};
function main(display) {
  if (count < 0) {
    count = 0;
  }
  if (count > 0 && count < 10) {
    display.innerText = `0${count}`;
  } else {
    display.innerText = count;
  }
}

const counting = document.getElementsByName('counting');
for (const x of counting) {
  x.addEventListener('change', function (e) {
    if (e.target.id == 'inc') {
      count += parseInt(e.target.value);
      e.target.value = '';
      return;
    }
    if (e.target.id == 'dec') {
      count -= parseInt(e.target.value);
      e.target.value = '';
      return;
    }
  });
}

function display() {
  main(div);
}
