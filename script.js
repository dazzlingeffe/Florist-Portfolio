document.querySelector('.gallery-item').onclick = function () {
	document.getElementById('gallery').style.display = 'none';
	
	let gallerySlider = document.createElement('div');
	gallerySlider.className = 'gallery-slider';
	document.querySelector('main').append(gallerySlider);
	
	let thumbnails = document.createElement('ul');
	thumbnails.className = 'thumbnails';
	
	let ulSlides = document.createElement('ul');
	ulSlides.className = 'slides';
	gallerySlider.append(ulSlides);
	gallerySlider.append(thumbnails);
	
	let n = document.querySelectorAll('.gallery-item').length;
	let i = 0;
	
	while (i++ < n) {
		let liElem = document.createElement('li');
		liElem.setAttribute('id', 'slide' + i);
		ulSlides.append(liElem);
		
		let liThumb = document.createElement('li');
		thumbnails.append(liThumb);
		let aThumb = document.createElement('a');
		aThumb.setAttribute('href', '#slide' + i);
		liThumb.append(aThumb);
		
		let imgElem = document.createElement('img');
		imgElem.setAttribute('src', 'images/pic' + i + '.jpeg');
		liElem.append(imgElem);
		imgElem = document.createElement('img');
		imgElem.setAttribute('src', 'images/pic' + i + '.jpeg');
		aThumb.append(imgElem);

	}
	
	i = 0;
	
	while (i++ < n) {
		let liThumb = document.createElement('li');
		let imgThumb = document.createElement('a');
		
	}
};