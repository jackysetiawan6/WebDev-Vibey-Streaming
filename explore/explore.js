const colors = ['#FF5733', '#DAF7A6', '#C70039', '#900C3F', '#1B1464', '#F012BE', '#FF851B', '#3D9970', '#111111', '#FFFFFF', '#D2B4DE', '#FFD700', '#808080', '#00FFFF', '#FF00FF', '#FFFF00', '#0000FF', '#00FF00', '#008000', '#FFC0CB', '#FFA07A', '#00CED1', '#9400D3', '#228B22', '#FA8072', '#00FA9A', '#DC143C', '#4169E1', '#4B0082', '#7FFFD4', '#800080', '#2F4F4F', '#FF69B4'];

const genre = document.querySelectorAll('.genre');

genre.forEach(panel => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  panel.style.backgroundColor = randomColor;
});

const playButton = document.querySelector('.play-button');
playButton.addEventListener('click', () => {
  playButton.classList.toggle('clicked');
});

const pop = document.querySelector('.genre');
pop.addEventListener('click', () => {
	window.location.href = 'popsong.html';
});
