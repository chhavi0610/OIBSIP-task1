function learnMore() {
    window.location.href = "features.html";
}

document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us, ' + document.getElementById('name').value + '!');
    document.getElementById('contactForm').reset();
});
