const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });

  // Como teoricamente só há 1 panel com a classe "active"
  // talvez um forEach não seja necessário, apenas um selector...
  /*
  const panel = document.querySelector('.panel.active');
  panel.classList.remove('active');
  */
}
