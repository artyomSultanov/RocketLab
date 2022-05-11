var typed = new Typed('#typed',{
    strings: ["Системное сообщение: Здесь создаётся будущее."],
    cursorChar: "|",
    typeSpeed: 30
});

document.body.onload = function () {
	
	setTimeout(function() {
		var preloader = document.getElementById('preloader');
		if ( !preloader.classList.contains('done') ) {
			preloader.classList.add('done');
		}
		setTimeout(function() {
			var preloader_2 = document.getElementById('glitch__text');
			if ( !preloader_2.classList.contains('glitch-off') ) {
				preloader_2.classList.add('glitch-off');
			}
			setTimeout(function() {
			var preloader_3 = document.getElementById('glitch');
			if ( !preloader_3.classList.contains('glitch-off') ) {
				preloader_3.classList.add('glitch-off');
			}
			}, 1000);
		}, 3000);
	}, 4000);

	setTimeout(function() {
		document.getElementById('glitch').style.display="none";
		document.getElementById('glitch__text').style.display="none";
	}, 9000);
}