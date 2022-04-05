const menuBtn = document.querySelector('.nav-bar-mobile');
menuBtn.addEventListener('click', () => {
    if (mobileElement.style.display === "block") {
        mobileElement.style.display = "none";
    } else {
        mobileElement.style.display = "block";
    }
});