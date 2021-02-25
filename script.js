let openPic = function(e) {
	let gallerySection = document.getElementById('gallery');
	let main = document.querySelector('main');
	gallerySection.id = 'container';
	
	main.style.paddingTop = '80px';
	main.style.display = 'flex';
	main.style.justifyContent = 'space-evenly';
	gallerySection.insertAdjacentHTML('beforebegin', '<button class="gallery-nav-btn" id="prev"></button>');
	var elem = document.createElement('img');
	elem.src = 'icons/prev.svg';
	elem.classList.add('gallery-nav-icon');
	document.getElementById('prev').appendChild(elem);
	
	gallerySection.insertAdjacentHTML('afterend', '<button id="cancel"></button>');
	elem = document.createElement('img');
	elem.src = 'icons/cancel.svg';
	elem.style.height = '18px';
	elem.style.width = '18px';
	document.getElementById('cancel').appendChild(elem);	
	gallerySection.insertAdjacentHTML('afterend', '<button class="gallery-nav-btn" id="next"></button>');
	elem = document.createElement('img');
	elem.src = 'icons/next.svg';
	elem.classList.add('gallery-nav-icon');	document.getElementById('next').appendChild(elem);
	
	
	document.querySelectorAll('.gallery-item').forEach(item => {item.className = 'image-view'});
	e.target.className += ' active';

	let prevBtn = document.getElementById('prev');
	let nextBtn = document.getElementById('next');
	let imgCount = document.querySelectorAll('.image-view').length;

	prevBtn.addEventListener('click', function() {
		let currentImg = document.querySelector('.active');
		let currentId = currentImg.id;
		currentImg.classList.remove('active');
		if (currentId === '1') {
			document.getElementById(imgCount).classList.add('active');
		} else {
			document.getElementById(parseInt(currentId, 10) - 1).classList.add('active');
		}
	});
	nextBtn.addEventListener('click', function() {
		let currentImg = document.querySelector('.active');
		let currentId = currentImg.id;
		currentImg.classList.remove('active');
		if (currentId == imgCount) {
			document.getElementById('1').classList.add('active');
		} else {
			document.getElementById(parseInt(currentId, 10) + 1).classList.add('active');
		}
	});
}

document.querySelectorAll('.gallery-item').forEach(item => { item.addEventListener('click', openPic)});
