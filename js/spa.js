const links = document.querySelectorAll('header nav a');
const main = document.querySelector('main');

links.forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const page = this.getAttribute('href');

    fetch(page)
      .then(response => response.text())
      .then(html => {
        // cria um DOM temporário pra pegar só o conteúdo do <main> da página carregada
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const novoConteudo = doc.querySelector('main').innerHTML;

        main.innerHTML = novoConteudo; // substitui todo o conteúdo antigo
      })
      .catch(err => console.error("Erro ao carregar página:", err));
  });
});

// Menu hamburguer mobile
const hamburguer = document.getElementById('hamburguer');
const menu = document.querySelector('.menu-links');

hamburguer.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});


