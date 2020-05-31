const ham = document.querySelector('.ham');
ham.addEventListener('click', () => {
  if (!ham.classList.contains('open')) {
    ham.classList.add('open');
  } else {
    ham.classList.remove('open');
  }
});
$(function(){
  $('.ham').on('click', function(){
     $('.cont').slideToggle(700);
  });
});
