const mobileElement = document.getElementById('mobile-links');
const menuBtn = document.querySelector('.nav-bar-mobile');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (mobileElement.style.display === 'block') {
    mobileElement.style.display = 'none';
  } else {
    mobileElement.style.display = 'block';
  }
});
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuBtn.style.marginRight = '25px';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuBtn.style.marginRight = '36px';
    menuOpen = false;
  }
});
mobileElement.addEventListener('click', () => {
  if (mobileElement.style.display === 'block') {
    mobileElement.style.display = 'none';
    menuBtn.classList.remove('open');
    menuOpen = false;
  } else {
    mobileElement.style.display = 'block';
    menuBtn.classList.add('open');
    menuOpen = true;
  }
});
















