
function showText(selectedImageNode) {
	const imageDOM = retrieveDOM(selectedImageNode);
	selectedImageNode.style.opacity = 0.2;
	const selectedImageOverlayNode = imageDOM.nextElementSibling;
	selectedImageOverlayNode.innerHTML = selectedImageNode.alt;
}

function retrieveDOM(node) {
		const imageNodes = document.getElementsByTagName('img');
		console.log(imageNodes);
		for(var i = 0; i < imageNodes.length; i++) {
		if(imageNodes[i].alt === node.alt) {
			return imageNodes[i];
		}
	}
}