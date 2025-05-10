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

// Atualiza a largura da barra de progresso conforme rola
carrossel.addEventListener('scroll', () => {
  const scrollLeft = carrossel.scrollLeft;
  const scrollWidth = carrossel.scrollWidth - carrossel.clientWidth;
  const percentage = (scrollLeft / scrollWidth) * 100;
  progress.style.width = `${percentage}%`;
});