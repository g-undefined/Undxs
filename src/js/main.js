let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Fase 1
const botaoFaseUm = document.querySelector('#awnser-button01')

botaoFaseUm.addEventListener('click', event => {
  const respostaFaseUm = document.querySelector('#awnser-input01')
  const resposta = respostaFaseUm.value
  const respostaFormatada = String(resposta).toLowerCase()

  function verificar (valor) {
    const paragrafo = document.querySelector('.verificacao')
    const respostaIncorreta = 'Resposta <span class="incorreta">Errada</span>!'
    const respostaCorreta = 'Resposta <span class="correta">Correta</span>! Carregando próxima fase...'

    if (valor === 'correta') {
      paragrafo.innerHTML = respostaCorreta;
      setTimeout(() => {
        window.location.href = '../html/IIn0Sa7tnb6sfT.html';
      }, 3000);
    } else if (valor === 'incorreta') {
      paragrafo.innerHTML = respostaIncorreta;
    }
  }

  if (respostaFormatada === 'ártico' || respostaFormatada === 'artico') return verificar('correta');
  else return verificar('incorreta');

  
  console.log(resposta);
})


// Fase 2