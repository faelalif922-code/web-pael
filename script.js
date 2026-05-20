// Typing Animation
const texts = ["Web Developer", "Tech Enthusiast", "Content Creator", "Designer"];
let count = 0;
let index = 0;
let currentText = '';
let direction = 1;
const typingElement = document.getElementById('typing-text');

function type() {
    if (direction === 1) {
        currentText = texts[count].substring(0, index + 1);
        typingElement.textContent = currentText;
        index++;
        if (index === texts[count].length) {
            direction = -1;
            setTimeout(type, 1500);
            return;
        }
    } else {
        currentText = texts[count].substring(0, index - 1);
        typingElement.textContent = currentText;
        index--;
        if (index === 0) {
            direction = 1;
            count = (count + 1) % texts.length;
        }
    }
    setTimeout(type, direction === 1 ? 60 : 35);
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll to top button (bisa ditambahkan)
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize
window.onload = () => {
    type();
    console.log('%cRafael Alif Ramadhan Personal Website Loaded ✨', 'color: #22d3ee; font-size: 14px');
};