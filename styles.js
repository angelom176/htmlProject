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
