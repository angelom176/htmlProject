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

<<<<<<< HEAD
// Atualiza a largura da barra de progresso conforme rola
=======
// Atualiza a largura da barra de progresso conforme a rola
>>>>>>> b3f9602a2de164f2fdddc57a72035184967900b2
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
<<<<<<< HEAD
=======
  currentCourse = title.toLowerCase().replace(/[^a-z0-9]/gi, ""); 
>>>>>>> b3f9602a2de164f2fdddc57a72035184967900b2
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('modal').classList.remove('hidden');
}

<<<<<<< HEAD
function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

function startCourse() {
  alert("Course started!");
  closeModal();
}

=======
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

const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const imageArea = document.getElementById('image-area');
const imageElement = document.getElementById('character-image');
const menuItems = document.querySelectorAll('.sidebar a');

openBtn.addEventListener('click', () => {
  sidebar.classList.add('open');
  imageArea.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
  imageArea.classList.remove('open');
});

menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const newImage = item.getAttribute('data-image');
    imageElement.style.opacity = 0;
    setTimeout(() => {
      imageElement.src = newImage;
      imageElement.style.opacity = 1;
    }, 200);
  });
});
>>>>>>> b3f9602a2de164f2fdddc57a72035184967900b2
