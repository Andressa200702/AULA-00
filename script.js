// script.js

// Destaque o link ativo no menu
const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    menuLinks.forEach(l => l.classList.remove('ativo'));
    this.classList.add('ativo');
  });
});

// Mensagem no console ao carregar
window.addEventListener('load', () => {
  console.log("Bem-vindo ao site da Construsol!");
});


document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
  }

  // Aqui você pode substituir com uma integração real (Formspree, Formsubmit, etc)
  alert('Mensagem enviada com sucesso!');

  this.reset();
});

