// Intersection Observer für alle .fade-in Elemente
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Verzögerung aus data-delay lesen (falls vorhanden)
            const delay = entry.target.getAttribute('data-delay') || 0;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target); // Nur einmal animieren
        }
    });
});

// Alle .fade-in Elemente beobachten
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Typing-Effekt für "Ich bin ..."
const words = [
    "",
    "der Beste",
    ""


];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;
const typedText = document.getElementById("typed-text");

function type() {
    currentWord = words[wordIndex];
    if (isDeleting) {
        typedText.textContent = currentWord.substring(0, letterIndex--);
        if (letterIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 100);
        } else {
            setTimeout(type, 10);
        }
    } else {
        typedText.textContent = currentWord.substring(0, letterIndex++);
        if (letterIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1200);
        } else {
            setTimeout(type, 120);
        }
    }
}
type();
