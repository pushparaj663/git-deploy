const toggle = document.getElementById('mode-toggle');

toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    const elements = document.querySelectorAll('.container, #one, #sec, #three, #four, #five, #six, #seven');
    elements.forEach(el => el.classList.toggle('dark'));
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
