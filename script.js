let gallerySection = document.getElementById('gallery');
let main = document.querySelector('main');
let prevBtn, nextBtn, cancelBtn;

let openPic = function(e) {
	//style existing elements
	gallerySection.id = 'container';
	
//	main.style.paddingTop = '80px';
	main.style.display = 'flex';
	main.style.justifyContent = 'center';
	
	//add prev-btn
	gallerySection.insertAdjacentHTML('beforebegin', '<button class="gallery-nav-btn" id="prev"></button>');
	
	//add cancel-btn
	gallerySection.insertAdjacentHTML('afterend', '<button id="cancel"></button>');
	elem = document.createElement('img');
	elem.src = 'icons/cancel.svg';
	elem.style.height = '25px';
	elem.style.width = '25px';
	document.getElementById('cancel').appendChild(elem);
	
	//add next-btn
	gallerySection.insertAdjacentHTML('afterend', '<button class="gallery-nav-btn" id="next"></button>');
	
	//add active class on first img
	document.querySelectorAll('.gallery-item').forEach(item => {item.className = 'image-view'});
	e.target.className += ' active';

	//btns-activity
	prevBtn = document.getElementById('prev');
	nextBtn = document.getElementById('next');
	cancelBtn = document.getElementById('cancel');
	
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
	cancelBtn.addEventListener('click', function() {
		gallerySection.id = 'gallery';

		main.style.paddingTop = '55px';
		main.style.display = 'block';
		main.style.justifyContent = 'none';

		prevBtn.remove();
		nextBtn.remove();
		cancelBtn.remove();

		document.querySelectorAll('.image-view').forEach(item => {item.className = 'gallery-item'});
	});
}

document.querySelectorAll('.gallery-item').forEach(item => { item.addEventListener('click', openPic)});
