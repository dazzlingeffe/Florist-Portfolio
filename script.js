let openPic = function(e) {
	let gallerySection = document.getElementById('gallery');
	gallerySection.id = 'container';
	
	document.querySelector('main').style.paddingTop = '70px';
	
	gallerySection.insertAdjacentHTML('beforeEnd', '<div class="image-nav"><ul><li><button id="prev">previous</button></li><li><button id="next">next</button></li></ul></div>');
	
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
