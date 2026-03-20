const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

document.querySelectorAll('.nav-links a').forEach(link =>
  link.addEventListener('click', () => nav.classList.remove('show'))
);

function scrollSlider(direction) {
  const slider = document.getElementById('charSlider');
  const scrollAmount = slider.clientWidth / 2; 
  
  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}