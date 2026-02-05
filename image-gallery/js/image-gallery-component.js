/**
 * Creates an image gallery within a specified HTML element.
 * The gallery includes navigation buttons to cycle through a list of images.
 *
 * @param {HTMLElement} el - The container element where the gallery will be rendered.
 * @param {Array<{path: string, description: string}>} images - An array of image objects, where each object contains:
 *   - `path` (string): The URL or path to the image.
 *   - `description` (string): A textual description of the image.
 *
 * @example
 * const galleryContainer = document.getElementById("gallery");
 * const imageList = [
 *   { path: "image1.jpg", description: "Image 1 description" },
 *   { path: "image2.jpg", description: "Image 2 description" }
 * ];
 * createGallery(galleryContainer, imageList);
 */

const createGallery = (el, images) => {
	const template = `<img class="mainImg" src="">
					  <h3 class="caption"></h3>
					  <input type="button" class="btnPre" value="Prev">
					  <input type="button" class="btnNext" value="Next">`
console.log(images);
	el.innerHTML = template;
	el.classList.add("image-gallery");

	const mainImg = el.querySelector(".mainImg");
	const caption = el.querySelector(".caption");
	const btnPre  = el.querySelector(".btnPre");
	const btnNext = el.querySelector(".btnNext");




	let currentImg = 0;

	// STEP 2
	// Create a function to display an image object
	const showImage = (imgObj) => {
		mainImg.src = imgObj.path;
		mainImg.alt = imgObj.description;
		caption.innerHTML = imgObj.description;
	}

	showImage(images[currentImg]);

	// STEP 3
	// add an event handler function to the 'next' button
	btnNext.addEventListener("click", () => {
		currentImg++;
		if(currentImg == images.length){
		currentImg = 0;
		}
		showImage(images[currentImg]);
	})

	// STEP 4
	// add an event handler function to the 'prev' button
	btnPre.addEventListener("click", ()=>{
		currentImg--;
		if(currentImg < 0){
		currentImg = images.length - 1;
		}
		showImage(images[currentImg]);
	});














}