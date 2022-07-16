window.addEventListener('load', () => {

    // Remove preloader - Start
    let loader = document.querySelector('.preloader');
    setTimeout(() => {
        loader.classList.remove('active');
    }, 500);
    // Remove preloader - End

});