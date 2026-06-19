const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const formMessage = document.getElementById('formMessage');

emailForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValid) {
    formMessage.textContent = 'Please enter a valid email address.';
    emailInput.focus();
    return;
  }

  formMessage.textContent = `Thanks! ${email} has been registered for updates.`;
  emailInput.value = '';
});

const slider = document.getElementById('slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (slider && prevBtn && nextBtn) {
  const scrollAmount = 240;

  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  const button = item.querySelector('.faq-question');
  button.addEventListener('click', () => {
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });

    item.classList.toggle('active');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
