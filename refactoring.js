let scrollToTop = document.querySelector(".up");

window.onscroll = function() {
    this.scrollY >= 150 ? scrollToTop.classList.add("show") : scrollToTop.classList.remove("show");
}

scrollToTop.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});