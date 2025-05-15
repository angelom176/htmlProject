const carrossel = document.getElementById('carrossel');
const btnAnterior = document.getElementById('btnAnterior');
const btnProximo = document.getElementById('btnProximo');

const scrollBy = 280;

btnAnterior.addEventListener('click', () => {
  carrossel.scrollBy({ left: -scrollBy, behavior: 'smooth' });
});

btnProximo.addEventListener('click', () => {
  carrossel.scrollBy({ left: scrollBy, behavior: 'smooth' });
});

const progress = document.getElementById('progress');

// Atualiza a largura da barra de progresso conforme a rola
carrossel.addEventListener('scroll', () => {
  const scrollLeft = carrossel.scrollLeft;
  const scrollWidth = carrossel.scrollWidth - carrossel.clientWidth;
  const percentage = (scrollLeft / scrollWidth) * 100;
  progress.style.width = `${percentage}%`;
});

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const content = item.querySelector('.faq-answer');

    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  });
});

function openModal(title, description) {
  currentCourse = title.toLowerCase().replace(/[^a-z0-9]/gi, ""); // transforma "JavaScript" em "javascript"
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('modal').classList.remove('hidden');
}

function startCourse() {
  const courseLinks = {
    "java": "java.html",
    "python": "python.html",
    "htmlcss": "html-css.html",
    "javascript": "javascript.html",
    "csharp": "csharp.html",
    "ia": "ia.html",
    "php": "php.html",
    "mysql": "mysql.html"
  };

  const link = courseLinks[currentCourse];
  if (link) {
    window.location.href = link;
  } else {
    alert("Curso não encontrado para: " + currentCourse);
  }
}



