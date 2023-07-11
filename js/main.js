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


function enviarMensagem() {
  event.preventDefault(); // Evita o envio do formulário

  var numero = "13155084715"; // Insira seu número de telefone ou nome de usuário do WhatsApp
  var texto = document.getElementById("mensagem").value;
  texto = encodeURIComponent(texto); // Codifica o texto para ser usado em uma URL

  var url = "https://wa.me/" + numero + "?text=" + texto;
  window.open(url);
}


const data = new Date();
const hora = data.getHours();
let saudacao;

switch (hora) {
  case hora < 12:
    saudacao = 'Bom dia';
    break;
  
  case hora < 18:
    saudacao = 'Boa tarde';
    break;
  default:
    saudacao = 'Boa noite';
    break;
}

const typed = new Typed('.multiple-text', {
    strings: ['Ao Undxs', `${saudacao}.`, 'Boa Sorte!', 'Criado pela Undefined'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
