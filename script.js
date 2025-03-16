document.querySelectorAll('.faq-button').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            button.querySelector('span:last-child').textContent = '+';
        } else {
            answer.style.display = 'block';
            button.querySelector('span:last-child').textContent = '-';
        }
    });
});