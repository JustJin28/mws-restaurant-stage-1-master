if ('serviceWorker' in navigator) {
	window.addEventListener('load', function(){
		navigator.serviceWorker.register('./sw.js')
		.then(function() {
			console.log('POG Champ with an Arm');
		})
		.catch(function() {
			console.log('PePe hands in the chat');
		});
	});
};
