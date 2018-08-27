window.onload = () => {

	// **** Using the small product images to update the large hero product image
	const smallImages = document.querySelectorAll('.smallImgContainer img');
	const largeImages = document.querySelectorAll('.mainImgContainer img');

	//Changing large image on hover and overall active state on click
	for (let i = 0; i < smallImages.length; i++) {
		smallImages[i].addEventListener('mouseenter', () => {
			document.querySelector('.mainImgContainer img.active').style.opacity = 0;
			largeImages[i].style.opacity = 1;
		})
		smallImages[i].addEventListener('mouseleave', () => {
			largeImages[i].style.opacity = 0;
			document.querySelector('.mainImgContainer img.active').style.opacity = 1;
		})
	}

	document.querySelector('.smallImgContainer').addEventListener('click', (e) => {
		document.querySelector('.smallImgContainer img.active').classList.remove("active")
		document.querySelector('.mainImgContainer img.active').classList.remove("active")
		e.target.classList.add("active")
		largeImages[e.target.dataset.index].classList.add("active")
		largeImages[e.target.dataset.index].style.opacity = 1;
	})

	// **** Expanding and collapsing the sections on the lower right quadrant of the page 
	const moreInfoItems = document.querySelectorAll('.moreInfo li');
	const activeList = document.querySelector('.moreInfo li.active');

	for (let i = 0; i < moreInfoItems.length; i++) {
		const li = moreInfoItems[i]

		li.addEventListener('click', () => {
			if (li.querySelector('img').src.includes('collapsed')) {
				li.querySelector('img').src = './assets/arrow-expanded.png'
			} else {
				li.querySelector('img').src = './assets/arrow-collapsed.png'
			}
			li.classList.toggle('active')
		})
	}

	// **** Display a modal or message after the Add to Cart button is clicked.
	document.querySelector('.addToCart').addEventListener('click', () => {
		document.querySelector('.progressBar').classList.add('active')
		setTimeout(() => {
			document.querySelector('.progressBar .successMessage').style.display = 'block'
		}, 4100)
	})

	// Not letting user select negative number
	document.querySelector('input[name="productQuantity"]').addEventListener('change', (e) => {
		let quantity = e.target.value < 0 ? 0 : e.target.value

		document.querySelector('input[name="productQuantity"]').value = quantity
	})

}