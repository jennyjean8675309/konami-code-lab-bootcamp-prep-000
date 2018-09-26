const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init(){
  documentBody = document.body;
  let index = 0;
  documentBody.addEventListener('keydown', function(e) {
    const key = e.which;
    if (key === codes[index]) {
      index++;
      if (index === codes.length) {
        alert("Congratulations!");
        index = 0;
      }
    }
    else {
      index = 0;
    }
  });
}

init();
