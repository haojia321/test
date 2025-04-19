addLoadEvent(() => {
	initPosts(9);
	initCarousel();
});

const initCarousel = () => {
	let arr = [];
	let items = [];
	for(let i=0; i<photos.length; i++) {
		const data = photos[i];
		let temp = galleryTemplate;
		const photoUrl = window.document.domain === "" ? localRoot + data.photo : data.photo;
		temp = temp.replaceAll(/{{photo}}/ig, photoUrl);
		temp = temp.replaceAll(/{{index}}/ig, i);
		arr.push(temp);
	}
	const galleryHtml = arr.join("");
	document.getElementById("carouselContainer").innerHTML = galleryHtml;
	
	for(let i=0; i<photos.length; i++) {
		items.push({
			position: i,
			el: document.getElementById(`carousel-item-${i}`)
		});
	}
	
	const carouselElement = document.getElementById('default-carousel');
	const carousel = new Carousel(carouselElement, items);
	carousel.cycle();
	const $prevButton = document.getElementById('data-carousel-prev');
	const $nextButton = document.getElementById('data-carousel-next');
	$prevButton.addEventListener('click', () => {
		carousel.prev();
	});
	$nextButton.addEventListener('click', () => {
		carousel.next();
	});
};